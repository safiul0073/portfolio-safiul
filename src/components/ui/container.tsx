import * as React from "react";

import { cn } from "@/lib/utils";

const sizes = {
    narrow: "max-w-[52rem]",
    default: "max-w-[75rem]",
    wide: "max-w-[90rem]",
} as const;

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType;
    size?: keyof typeof sizes;
}

const Container = ({ as: Component = "div", size = "default", className, ...props }: ContainerProps) => (
    <Component className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", sizes[size], className)} {...props} />
);

export { Container };
