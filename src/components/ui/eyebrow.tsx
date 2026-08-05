import * as React from "react";

import { cn } from "@/lib/utils";

interface EyebrowProps extends React.HTMLAttributes<HTMLElement> {
    as?: React.ElementType;
    rule?: boolean;
}

const Eyebrow = ({ as: Component = "p", rule = false, className, children, ...props }: EyebrowProps) => (
    <Component className={cn("type-eyebrow inline-flex items-center gap-3", className)} {...props}>
        {rule && <span aria-hidden className="h-px w-6 bg-line-strong" />}
        {children}
    </Component>
);

export { Eyebrow };
