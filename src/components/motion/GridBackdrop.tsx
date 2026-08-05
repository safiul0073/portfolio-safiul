"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

interface GridBackdropProps {
    /** Spacing between grid lines in CSS pixels. */
    gridSize?: number;
    /** Scales displacement, bloom and drift together. 0 disables all reaction. */
    intensity?: number;
    /** Dots at line intersections that light up near the pointer. */
    nodes?: boolean;
    /** Slow ambient breathing while idle. Desktop only. */
    drift?: boolean;
    className?: string;
}

const LINE_STEP = 12;
const INFLUENCE_RADIUS = 170;
const MAX_DISPLACEMENT = 16;
const NODE_GLOW_RADIUS = 210;
const INTRO_DURATION = 700;

const easeOutCubic = (value: number) => 1 - Math.pow(1 - value, 3);

const GridBackdrop = ({
    gridSize = 72,
    intensity = 1,
    nodes = true,
    drift = true,
    className,
}: GridBackdropProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = canvas?.parentElement;
        const context = canvas?.getContext("2d");
        if (!canvas || !container || !context) return;

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        const coarsePointer = window.matchMedia("(pointer: coarse)");

        // Pointer reaction and ambient drift are both desktop-only: a full-viewport
        // canvas repainting every frame is a real battery cost on phones.
        let interactive = !reducedMotion.matches && !coarsePointer.matches;
        let isVisible = true;
        let isDark = document.documentElement.classList.contains("dark");
        let width = 0;
        let height = 0;
        let animationFrame = 0;
        let introStart = 0;
        let introProgress = reducedMotion.matches ? 1 : 0;
        let time = 0;

        const driftAmplitude = drift ? 2.2 * intensity : 0;

        const pointer = {
            x: 0,
            y: 0,
            targetX: 0,
            targetY: 0,
            strength: 0,
            targetStrength: 0,
        };

        const displacedPoint = (x: number, y: number) => {
            let pointX = x;
            let pointY = y;

            if (driftAmplitude > 0 && interactive) {
                pointX += Math.sin(x * 0.0055 + y * 0.0032 + time) * driftAmplitude;
                pointY += Math.cos(y * 0.0061 + x * 0.0027 + time * 0.82) * driftAmplitude;
            }

            if (pointer.strength < 0.001) return { x: pointX, y: pointY };

            const deltaX = pointX - pointer.x;
            const deltaY = pointY - pointer.y;
            const distance = Math.hypot(deltaX, deltaY);
            if (distance === 0 || distance >= INFLUENCE_RADIUS) return { x: pointX, y: pointY };

            const influence = Math.pow(1 - distance / INFLUENCE_RADIUS, 2);
            const displacement = MAX_DISPLACEMENT * intensity * influence * pointer.strength;

            return {
                x: pointX + (deltaX / distance) * displacement,
                y: pointY + (deltaY / distance) * displacement,
            };
        };

        const drawNodes = () => {
            const baseAlpha = isDark ? 0.22 : 0.2;
            const hotColor = isDark ? "255,255,255" : "10,10,10";
            const glowRadius = NODE_GLOW_RADIUS * intensity;

            context.beginPath();
            context.fillStyle = isDark ? `rgba(163,163,163,${baseAlpha})` : `rgba(115,115,115,${baseAlpha})`;

            const hotNodes: Array<{ x: number; y: number; heat: number }> = [];

            for (let x = 0; x <= width + gridSize; x += gridSize) {
                for (let y = 0; y <= height + gridSize; y += gridSize) {
                    const point = displacedPoint(x, y);
                    const heat =
                        pointer.strength > 0.001 && glowRadius > 0
                            ? Math.max(0, 1 - Math.hypot(point.x - pointer.x, point.y - pointer.y) / glowRadius) *
                              pointer.strength
                            : 0;

                    if (heat > 0.02) {
                        hotNodes.push({ x: point.x, y: point.y, heat });
                        continue;
                    }

                    context.rect(point.x - 0.75, point.y - 0.75, 1.5, 1.5);
                }
            }

            // One fill for every quiet node, then only the lit ones pay for a state change.
            context.fill();

            for (const node of hotNodes) {
                const size = 1.5 + node.heat * 2.6;
                context.fillStyle = `rgba(${hotColor},${(0.18 + node.heat * 0.6).toFixed(3)})`;
                context.fillRect(node.x - size / 2, node.y - size / 2, size, size);
            }
        };

        const draw = () => {
            context.clearRect(0, 0, width, height);
            context.globalAlpha = introProgress;

            if (pointer.strength > 0.001) {
                const bloom = context.createRadialGradient(
                    pointer.x,
                    pointer.y,
                    0,
                    pointer.x,
                    pointer.y,
                    INFLUENCE_RADIUS * 1.5,
                );
                bloom.addColorStop(0, isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.028)");
                bloom.addColorStop(1, "rgba(0,0,0,0)");
                context.fillStyle = bloom;
                context.fillRect(0, 0, width, height);
            }

            context.beginPath();
            context.strokeStyle = isDark ? "rgba(163,163,163,0.12)" : "rgba(115,115,115,0.11)";
            context.lineWidth = 1;

            for (let y = 0; y <= height + gridSize; y += gridSize) {
                for (let x = 0; x <= width + LINE_STEP; x += LINE_STEP) {
                    const point = displacedPoint(x, y);
                    if (x === 0) context.moveTo(point.x, point.y);
                    else context.lineTo(point.x, point.y);
                }
            }

            for (let x = 0; x <= width + gridSize; x += gridSize) {
                for (let y = 0; y <= height + LINE_STEP; y += LINE_STEP) {
                    const point = displacedPoint(x, y);
                    if (y === 0) context.moveTo(point.x, point.y);
                    else context.lineTo(point.x, point.y);
                }
            }

            context.stroke();

            if (nodes) drawNodes();

            context.globalAlpha = 1;
        };

        const animate = (timestamp: number) => {
            animationFrame = 0;

            if (!introStart) introStart = timestamp;
            if (introProgress < 1) {
                introProgress = easeOutCubic(Math.min(1, (timestamp - introStart) / INTRO_DURATION));
            }

            time = timestamp / 4200;
            pointer.x += (pointer.targetX - pointer.x) * 0.085;
            pointer.y += (pointer.targetY - pointer.y) * 0.085;
            pointer.strength += (pointer.targetStrength - pointer.strength) * 0.075;
            draw();

            const pointerSettled =
                pointer.targetStrength === 0 &&
                Math.abs(pointer.strength) < 0.002 &&
                Math.abs(pointer.targetX - pointer.x) < 0.05 &&
                Math.abs(pointer.targetY - pointer.y) < 0.05;

            // Drift never settles, so it keeps its own frame loop while on screen.
            const keepAnimating = driftAmplitude > 0 || !pointerSettled || introProgress < 1;

            if (!keepAnimating) {
                pointer.strength = 0;
                draw();
            } else if (interactive && isVisible) {
                animationFrame = window.requestAnimationFrame(animate);
            }
        };

        const startAnimation = () => {
            if (!interactive || !isVisible) {
                window.cancelAnimationFrame(animationFrame);
                animationFrame = 0;
                pointer.strength = 0;
                introProgress = 1;
                draw();
            } else if (!animationFrame) {
                animationFrame = window.requestAnimationFrame(animate);
            }
        };

        const resizeCanvas = () => {
            const bounds = container.getBoundingClientRect();
            width = Math.max(1, Math.round(bounds.width));
            height = Math.max(1, Math.round(bounds.height));
            const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);

            canvas.width = Math.round(width * devicePixelRatio);
            canvas.height = Math.round(height * devicePixelRatio);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

            if (pointer.targetX === 0 && pointer.targetY === 0) {
                pointer.x = pointer.targetX = width / 2;
                pointer.y = pointer.targetY = height / 2;
            }
            draw();
        };

        const handlePointerMove = (event: PointerEvent) => {
            const bounds = container.getBoundingClientRect();
            pointer.targetX = event.clientX - bounds.left;
            pointer.targetY = event.clientY - bounds.top;
            pointer.targetStrength = 1;
            startAnimation();
        };

        const handlePointerLeave = () => {
            pointer.targetStrength = 0;
            startAnimation();
        };

        const handlePreferenceChange = () => {
            interactive = !reducedMotion.matches && !coarsePointer.matches;
            pointer.targetStrength = 0;
            if (reducedMotion.matches) introProgress = 1;
            startAnimation();
        };

        const resizeObserver = new ResizeObserver(resizeCanvas);
        const intersectionObserver = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
                startAnimation();
            },
            { threshold: 0.02 },
        );
        const themeObserver = new MutationObserver(() => {
            isDark = document.documentElement.classList.contains("dark");
            draw();
        });

        resizeObserver.observe(container);
        intersectionObserver.observe(container);
        themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
        container.addEventListener("pointermove", handlePointerMove, { passive: true });
        container.addEventListener("pointerleave", handlePointerLeave);
        reducedMotion.addEventListener("change", handlePreferenceChange);
        coarsePointer.addEventListener("change", handlePreferenceChange);

        resizeCanvas();
        startAnimation();

        return () => {
            window.cancelAnimationFrame(animationFrame);
            resizeObserver.disconnect();
            intersectionObserver.disconnect();
            themeObserver.disconnect();
            container.removeEventListener("pointermove", handlePointerMove);
            container.removeEventListener("pointerleave", handlePointerLeave);
            reducedMotion.removeEventListener("change", handlePreferenceChange);
            coarsePointer.removeEventListener("change", handlePreferenceChange);
        };
    }, [gridSize, intensity, nodes, drift]);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className={cn(
                "pointer-events-none absolute inset-0 h-full w-full",
                // Dissolve toward the edges so the grid reads as depth rather than a texture swatch.
                "[-webkit-mask-image:radial-gradient(125%_115%_at_50%_0%,#000_30%,transparent_100%)]",
                "[mask-image:radial-gradient(125%_115%_at_50%_0%,#000_30%,transparent_100%)]",
                className,
            )}
        />
    );
};

export default GridBackdrop;
