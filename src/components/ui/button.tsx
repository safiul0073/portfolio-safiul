import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium " +
        "transition-[background-color,border-color,color,box-shadow,transform] duration-base ease-out " +
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg " +
        "active:translate-y-px " +
        "disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50",
    {
        variants: {
            variant: {
                solid: "bg-solid text-solid-fg shadow-sm hover:bg-solid-hover",
                outline: "bg-surface text-fg ring-1 ring-line-strong/70 hover:bg-surface-muted hover:ring-fg/40",
                ghost: "text-fg-muted hover:bg-surface-muted hover:text-fg",
                link: "h-auto rounded-none p-0 text-fg underline-offset-4 decoration-1 hover:underline active:translate-y-0",
                // Non-interactive placeholder, e.g. "Private repository".
                muted: "pointer-events-none text-fg-faint ring-1 ring-line",
            },
            size: {
                sm: "h-9 px-3.5 text-sm",
                md: "h-11 px-5 text-sm",
                lg: "h-12 px-6 text-base",
                icon: "h-10 w-10 p-0",
            },
            block: {
                true: "w-full",
            },
        },
        defaultVariants: {
            variant: "solid",
            size: "md",
        },
    },
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, block, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp className={cn(buttonVariants({ variant, size, block, className }))} ref={ref} {...props} />
        );
    },
);
Button.displayName = "Button";

export { Button, buttonVariants };
