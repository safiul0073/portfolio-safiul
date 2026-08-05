"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scroll reveal driven by IntersectionObserver.
 *
 * Authoring contract:
 *   data-reveal        this element fades and rises when it enters the viewport
 *   data-reveal-group  container whose [data-reveal] descendants stagger together
 *
 * The hidden start state lives in globals.css behind `html.js`, which the
 * blocking script in the root layout sets before first paint — so content is
 * never painted, hidden, then revealed. Containers are never animated, so no
 * element ends up with a stray transform (which would break `position: fixed`
 * descendants such as the project quick-view modal).
 */
const STAGGER_MS = 60;
const MAX_STAGGER_STEPS = 6;

const ScrollReveal = () => {
    const pathname = usePathname();

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const reveal = (element: HTMLElement, delayMs: number) => {
            element.style.setProperty("--reveal-delay", `${delayMs}ms`);
            element.setAttribute("data-revealed", "");
        };

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) continue;

                    const element = entry.target as HTMLElement;
                    observer.unobserve(element);

                    if (element.hasAttribute("data-reveal-group")) {
                        element.querySelectorAll<HTMLElement>("[data-reveal]").forEach((child, index) => {
                            observer.unobserve(child);
                            reveal(child, Math.min(index, MAX_STAGGER_STEPS) * STAGGER_MS);
                        });
                    }

                    if (element.hasAttribute("data-reveal")) {
                        reveal(element, 0);
                    }
                }
            },
            { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
        );

        const observeAll = () => {
            document
                .querySelectorAll<HTMLElement>(
                    "[data-reveal-group]:not([data-revealed]),[data-reveal]:not([data-revealed])",
                )
                .forEach((element) => {
                    // Items inside a group are revealed by the group, so they must
                    // not also trigger on their own — that would skip the stagger.
                    const group = element.closest("[data-reveal-group]");
                    if (group && group !== element) return;
                    observer.observe(element);
                });
        };

        observeAll();

        // React can add nodes later (project filtering, modal content). Re-observe
        // so nothing is ever left stuck at opacity 0.
        let frame = 0;
        const mutationObserver = new MutationObserver(() => {
            if (frame) return;
            frame = window.requestAnimationFrame(() => {
                frame = 0;
                observeAll();
            });
        });
        mutationObserver.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.cancelAnimationFrame(frame);
            mutationObserver.disconnect();
            observer.disconnect();
        };
    }, [pathname]);

    return null;
};

export default ScrollReveal;
