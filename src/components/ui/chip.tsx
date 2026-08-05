import * as React from "react";

import { cn } from "@/lib/utils";

interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
    tone?: "default" | "solid";
}

/**
 * Static tag for technology lists. Deliberately has no hover state — it is not
 * interactive and not focusable.
 */
const Chip = ({ tone = "default", className, ...props }: ChipProps) => (
    <span
        className={cn(
            "type-label inline-flex items-center rounded-full px-3 py-1.5",
            tone === "solid" ? "bg-solid text-solid-fg" : "bg-surface-muted text-fg-subtle ring-1 ring-line/60",
            className,
        )}
        {...props}
    />
);

export { Chip };
