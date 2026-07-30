"use client";

import { useEffect, useRef } from "react";

const GRID_SIZE = 72;
const LINE_STEP = 12;
const INFLUENCE_RADIUS = 150;
const MAX_DISPLACEMENT = 14;

const HeroBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = canvas?.parentElement;
        const context = canvas?.getContext("2d");
        if (!canvas || !container || !context) return;

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        const coarsePointer = window.matchMedia("(pointer: coarse)");
        let interactive = !reducedMotion.matches && !coarsePointer.matches;
        let isVisible = true;
        let isDark = document.documentElement.classList.contains("dark");
        let width = 0;
        let height = 0;
        let animationFrame = 0;
        let devicePixelRatio = 1;

        const pointer = {
            x: 0,
            y: 0,
            targetX: 0,
            targetY: 0,
            strength: 0,
            targetStrength: 0,
        };

        const displacedPoint = (x: number, y: number) => {
            if (pointer.strength < 0.001) return { x, y };

            const deltaX = x - pointer.x;
            const deltaY = y - pointer.y;
            const distance = Math.hypot(deltaX, deltaY);
            if (distance === 0 || distance >= INFLUENCE_RADIUS) return { x, y };

            const influence = Math.pow(1 - distance / INFLUENCE_RADIUS, 2);
            const displacement = MAX_DISPLACEMENT * influence * pointer.strength;

            return {
                x: x + (deltaX / distance) * displacement,
                y: y + (deltaY / distance) * displacement,
            };
        };

        const drawGrid = () => {
            context.clearRect(0, 0, width, height);

            if (pointer.strength > 0.001) {
                const bloom = context.createRadialGradient(
                    pointer.x,
                    pointer.y,
                    0,
                    pointer.x,
                    pointer.y,
                    INFLUENCE_RADIUS * 1.4
                );
                bloom.addColorStop(0, isDark ? "rgba(255,255,255,0.045)" : "rgba(0,0,0,0.025)");
                bloom.addColorStop(1, "rgba(0,0,0,0)");
                context.fillStyle = bloom;
                context.fillRect(0, 0, width, height);
            }

            context.beginPath();
            context.strokeStyle = isDark ? "rgba(163,163,163,0.18)" : "rgba(115,115,115,0.18)";
            context.lineWidth = 1;

            for (let y = 0; y <= height + GRID_SIZE; y += GRID_SIZE) {
                for (let x = 0; x <= width + LINE_STEP; x += LINE_STEP) {
                    const point = displacedPoint(x, y);
                    if (x === 0) context.moveTo(point.x, point.y);
                    else context.lineTo(point.x, point.y);
                }
            }

            for (let x = 0; x <= width + GRID_SIZE; x += GRID_SIZE) {
                for (let y = 0; y <= height + LINE_STEP; y += LINE_STEP) {
                    const point = displacedPoint(x, y);
                    if (y === 0) context.moveTo(point.x, point.y);
                    else context.lineTo(point.x, point.y);
                }
            }

            context.stroke();
        };

        const animate = () => {
            animationFrame = 0;
            pointer.x += (pointer.targetX - pointer.x) * 0.085;
            pointer.y += (pointer.targetY - pointer.y) * 0.085;
            pointer.strength += (pointer.targetStrength - pointer.strength) * 0.075;
            drawGrid();

            const settled =
                pointer.targetStrength === 0 &&
                Math.abs(pointer.strength) < 0.002 &&
                Math.abs(pointer.targetX - pointer.x) < 0.05 &&
                Math.abs(pointer.targetY - pointer.y) < 0.05;

            if (settled) {
                pointer.strength = 0;
                drawGrid();
            } else if (interactive && isVisible) {
                animationFrame = window.requestAnimationFrame(animate);
            }
        };

        const startAnimation = () => {
            if (!interactive || !isVisible) {
                window.cancelAnimationFrame(animationFrame);
                animationFrame = 0;
                pointer.strength = 0;
                drawGrid();
            } else if (!animationFrame) {
                animationFrame = window.requestAnimationFrame(animate);
            }
        };

        const resizeCanvas = () => {
            const bounds = container.getBoundingClientRect();
            width = Math.max(1, Math.round(bounds.width));
            height = Math.max(1, Math.round(bounds.height));
            devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);

            canvas.width = Math.round(width * devicePixelRatio);
            canvas.height = Math.round(height * devicePixelRatio);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

            if (pointer.targetX === 0 && pointer.targetY === 0) {
                pointer.x = pointer.targetX = width / 2;
                pointer.y = pointer.targetY = height / 2;
            }
            drawGrid();
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
            startAnimation();
        };

        const resizeObserver = new ResizeObserver(resizeCanvas);
        const intersectionObserver = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
                startAnimation();
            },
            { threshold: 0.02 }
        );
        const themeObserver = new MutationObserver(() => {
            isDark = document.documentElement.classList.contains("dark");
            drawGrid();
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
    }, []);

    return (
        <canvas
            ref={canvasRef}
            data-hero-grid-canvas
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full"
        />
    );
};

export default HeroBackground;
