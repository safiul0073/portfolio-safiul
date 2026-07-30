"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

const GsapAnimator = () => {
    const pathname = usePathname();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let refreshTimer = 0;

        const frame = window.requestAnimationFrame(() => {
            const context = gsap.context(() => {
                const media = gsap.matchMedia();

                media.add("(prefers-reduced-motion: reduce)", () => {
                    gsap.set("[data-gsap-page-header], [data-gsap-section], [data-gsap-item]", {
                        clearProps: "all",
                        autoAlpha: 1,
                    });
                });

                media.add("(prefers-reduced-motion: no-preference)", () => {
                    gsap.fromTo(
                        "[data-gsap-page-header]",
                        { autoAlpha: 0, y: 24 },
                        { autoAlpha: 1, y: 0, duration: 0.72, ease: "power3.out" }
                    );

                    gsap.utils.toArray<HTMLElement>("[data-gsap-section]").forEach((section) => {
                        gsap.fromTo(
                            section,
                            { autoAlpha: 0, y: 28 },
                            {
                                autoAlpha: 1,
                                y: 0,
                                duration: 0.72,
                                ease: "power3.out",
                                scrollTrigger: { trigger: section, start: "top 86%", once: true },
                            }
                        );
                    });

                    gsap.utils.toArray<HTMLElement>("[data-gsap-stagger]").forEach((group) => {
                        const items = group.querySelectorAll("[data-gsap-item]");
                        if (!items.length) return;

                        gsap.fromTo(
                            items,
                            { autoAlpha: 0, y: 18 },
                            {
                                autoAlpha: 1,
                                y: 0,
                                duration: 0.58,
                                ease: "power2.out",
                                stagger: 0.055,
                                scrollTrigger: { trigger: group, start: "top 88%", once: true },
                            }
                        );
                    });
                });

                refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 100);
            });

            (window as Window & { __portfolioGsapContext?: gsap.Context }).__portfolioGsapContext = context;
        });

        return () => {
            window.cancelAnimationFrame(frame);
            window.clearTimeout(refreshTimer);
            const win = window as Window & { __portfolioGsapContext?: gsap.Context };
            win.__portfolioGsapContext?.revert();
            delete win.__portfolioGsapContext;
        };
    }, [pathname]);

    return null;
};

export default GsapAnimator;
