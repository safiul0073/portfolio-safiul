import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import GridBackdrop from "@/components/motion/GridBackdrop";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

// Shared with SectionHeader so both headers use one grid.
export const HEADER_GRID = "grid gap-5 lg:grid-cols-[9rem_1fr] lg:gap-10";

interface PageHeaderProps {
    index: string;
    eyebrow: string;
    title: string;
    description: string;
    backHref?: string;
    backLabel?: string;
    breadcrumb?: ReactNode;
    meta?: ReactNode;
    actions?: ReactNode;
}

const PageHeader = ({
    index,
    eyebrow,
    title,
    description,
    backHref,
    backLabel,
    breadcrumb,
    meta,
    actions,
}: PageHeaderProps) => (
    <header className="relative overflow-hidden border-b border-line/60 bg-surface-muted pt-nav-lg">
        {/* Same backdrop as the hero, dialled down: page headers are short, so the
            grid is denser and reacts less, and there is no ambient drift. */}
        <GridBackdrop gridSize={56} intensity={0.6} drift={false} />
        <Container className="relative pb-16 md:pb-20">
            {backHref && (
                <Link
                    href={backHref}
                    className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-fg-subtle transition-colors duration-base ease-out hover:text-fg"
                >
                    <ArrowLeft size={16} />
                    {backLabel || "Back"}
                </Link>
            )}
            {breadcrumb && <div className="mb-7">{breadcrumb}</div>}
            <div className={HEADER_GRID}>
                <Eyebrow rule className="self-start">
                    {index} / {eyebrow}
                </Eyebrow>
                <div className="max-w-4xl">
                    {meta && <div className="mb-5 flex flex-wrap items-center gap-3">{meta}</div>}
                    <h1 className="type-h1 max-w-3xl">{title}</h1>
                    <p className="type-lead mt-5 max-w-3xl">{description}</p>
                    {/* Actions sit below the copy at every breakpoint so they never
                        compete with the display-size title for horizontal room. */}
                    {actions && <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div>}
                </div>
            </div>
        </Container>
    </header>
);

export default PageHeader;
