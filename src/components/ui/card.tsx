import * as React from "react";

import { cn } from "@/lib/utils";

const paddings = {
    none: "",
    sm: "p-5",
    md: "p-6",
    lg: "p-6 sm:p-8",
} as const;

interface CardProps extends React.HTMLAttributes<HTMLElement> {
    as?: React.ElementType;
    interactive?: boolean;
    padding?: keyof typeof paddings;
}

const Card = ({
    as: Component = "div",
    interactive = false,
    padding = "md",
    className,
    ...props
}: CardProps) => (
    <Component
        className={cn(
            // Separation by surface and depth, not by an outline. The ring is a
            // half-strength hairline that only defines the edge, it does not draw it.
            "relative flex flex-col rounded-lg bg-surface shadow-sm ring-1 ring-line/60",
            paddings[padding],
            interactive &&
                "group transition-[transform,box-shadow] duration-slow ease-out " +
                    "hover:-translate-y-1 hover:shadow-lg " +
                    "focus-within:-translate-y-1 focus-within:ring-fg/40",
            className,
        )}
        {...props}
    />
);

export { Card };
