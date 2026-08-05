import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionVariants = cva("relative", {
    variants: {
        band: {
            default: "bg-surface",
            muted: "bg-surface-muted",
            // The colour work is done by the data-band attribute below, which
            // re-declares the surface tokens as their dark values.
            inverse: "bg-surface",
        },
        size: {
            default: "py-24 md:py-32",
            compact: "py-16 md:py-24",
            flush: "py-0",
        },
        // Half-strength: the band change carries the separation, the line only hints at it.
        divider: {
            none: "",
            top: "border-t border-line/60",
            bottom: "border-b border-line/60",
            y: "border-y border-line/60",
        },
    },
    defaultVariants: {
        band: "default",
        size: "default",
        divider: "none",
    },
});

interface SectionProps
    extends React.HTMLAttributes<HTMLElement>,
        VariantProps<typeof sectionVariants> {}

const Section = ({ band = "default", size, divider, className, ...props }: SectionProps) => (
    <section
        data-band={band === "inverse" ? "inverse" : undefined}
        className={cn(sectionVariants({ band, size, divider }), className)}
        {...props}
    />
);

export { Section, sectionVariants };
