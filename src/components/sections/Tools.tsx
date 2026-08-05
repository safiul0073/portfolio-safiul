import Link from "next/link";
import {
    Archive,
    ArrowRight,
    ArrowUpRight,
    Check,
    FileSearch,
    FolderArchive,
    Github,
    Image as ImageIcon,
    ShieldCheck,
    X,
} from "lucide-react";
import SectionHeader from "@/components/layout/SectionHeader";
import { tools } from "@/data/tools";
import type { Tool } from "@/types";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

// The visual fills whatever box it is given — no min-height, so it is never clipped.
const visualFrameClass = "flex h-full w-full items-center justify-center bg-surface-sunken p-5 sm:p-8";
const visualCardClass = "w-full max-w-lg overflow-hidden rounded-lg bg-surface shadow-md ring-1 ring-line/60";
const visualChromeClass = "flex h-9 items-center justify-between border-b border-line/60 px-3";

const ToolVisual = ({ tool }: { tool: Tool }) => {
    if (tool.slug === "bangla-plagiarism-checker") {
        return (
            <div className={visualFrameClass}>
                <div className={visualCardClass}>
                    <div className={visualChromeClass}>
                        <div className="flex gap-1.5">
                            <span className="h-2 w-2 bg-line-strong" />
                            <span className="h-2 w-2 bg-line-strong" />
                        </div>
                        <span className="type-label">Bangla text analysis</span>
                    </div>
                    {/* Stacks below sm — three tracks do not fit a 320px viewport. */}
                    <div className="grid grid-cols-1 items-center gap-3 p-4 sm:grid-cols-[1fr_auto_1fr] sm:gap-5 sm:p-6">
                        <div className="rounded-md bg-surface-muted p-3">
                            <FileSearch size={20} className="text-fg-subtle" />
                            <div className="mt-4 space-y-2">
                                <span className="block h-1.5 w-full bg-line" />
                                <span className="block h-1.5 w-4/5 bg-line" />
                                <span className="block h-1.5 w-2/3 bg-line" />
                            </div>
                        </div>
                        <div className="type-label mx-auto flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-line-strong/70">
                            OCR
                        </div>
                        <div className="rounded-md bg-surface-muted p-3">
                            <FileSearch size={20} className="text-fg-subtle" />
                            <div className="mt-4 space-y-2">
                                <span className="block h-1.5 w-full bg-fg" />
                                <span className="block h-1.5 w-3/4 bg-line" />
                                <span className="block h-1.5 w-5/6 bg-fg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (tool.slug === "image-replacer-macos") {
        return (
            <div className={visualFrameClass}>
                <div className={visualCardClass}>
                    <div className={visualChromeClass}>
                        <span className="type-label">Image replacer</span>
                        <ShieldCheck size={14} className="text-fg-subtle" />
                    </div>
                    <div className="grid grid-cols-1 items-center gap-3 p-4 sm:grid-cols-[1fr_auto_1fr] sm:gap-5 sm:p-6">
                        <div className="grid grid-cols-2 gap-1 rounded-md bg-surface-muted p-2">
                            {[0, 1, 2, 3].map((item) => (
                                <span key={item} className="flex aspect-square items-center justify-center bg-surface-sunken">
                                    <ImageIcon size={16} className="text-fg-subtle" />
                                </span>
                            ))}
                        </div>
                        <ArrowRight size={20} className="mx-auto rotate-90 text-fg-subtle sm:rotate-0" />
                        <div className="rounded-md bg-surface-muted p-3">
                            <div className="flex aspect-[4/3] items-center justify-center rounded-sm bg-solid text-solid-fg">
                                <ImageIcon size={28} />
                            </div>
                            <p className="type-label mt-2 truncate">avatar-20.jpg</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={visualFrameClass}>
            <div className={visualCardClass}>
                <div className={visualChromeClass}>
                    <span className="type-label">Zipper / clean archive</span>
                    <Archive size={14} className="text-fg-subtle" />
                </div>
                <div className="grid gap-4 p-5 sm:grid-cols-[auto_1fr] sm:p-6">
                    <div className="flex h-20 w-20 items-center justify-center rounded-md bg-surface-muted">
                        <FolderArchive size={34} className="text-fg-subtle" />
                    </div>
                    <div className="divide-y divide-line/60 border-y border-line/60 text-[11px] text-fg-muted">
                        <div className="flex items-center justify-between py-2">
                            <span>.env</span>
                            <span className="flex items-center gap-1 text-fg-subtle">
                                <Check size={12} />
                                KEEP
                            </span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <span>.gitignore</span>
                            <span className="flex items-center gap-1 text-fg-subtle">
                                <Check size={12} />
                                KEEP
                            </span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <span>.DS_Store</span>
                            <span className="flex items-center gap-1 text-fg-subtle">
                                <X size={12} />
                                REMOVE
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Tools = ({ preview = false, showHeader = true }: { preview?: boolean; showHeader?: boolean }) => (
    <Section id="tools" band="muted" divider="y">
        <Container>
            {showHeader && (
                <SectionHeader
                    index="05 / TOOLS"
                    title={preview ? "Tools built to solve specific problems" : "Developer tools and native utilities"}
                    description="Independent applications built around language processing, repeatable file workflows, and cleaner macOS development tasks."
                />
            )}

            {preview ? (
                <>
                    <div data-reveal-group className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {tools.map((tool) => (
                            <Card data-reveal as="article" interactive padding="none" key={tool.id} className="overflow-hidden">
                                {/* min-height, not a fixed aspect: the visual stacks on narrow
                                    cards and must be allowed to grow rather than be clipped. */}
                                <div className="min-h-56 border-b border-line/60">
                                    <ToolVisual tool={tool} />
                                </div>
                                <div className="flex flex-1 flex-col p-5">
                                    <p className="type-label">
                                        {tool.platform} / {tool.type}
                                    </p>
                                    <h3 className="type-card-title mt-3">{tool.name}</h3>
                                    <p className="type-body-sm mt-3 flex-1">{tool.description}</p>
                                    <Button asChild variant="link" className="mt-5 self-start text-sm font-semibold">
                                        <a href={tool.github} target="_blank" rel="noopener noreferrer">
                                            View repository <Github size={16} />
                                        </a>
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                    <div className="mt-10 flex justify-end">
                        <Button asChild>
                            <Link href="/tools">
                                Explore all tools <ArrowUpRight size={16} />
                            </Link>
                        </Button>
                    </div>
                </>
            ) : (
                <div data-reveal-group className="space-y-8">
                    {tools.map((tool, index) => (
                        <Card
                            data-reveal
                            as="article"
                            padding="none"
                            key={tool.id}
                            className="overflow-hidden lg:grid lg:grid-cols-[0.9fr_1.1fr]"
                        >
                            <div className={index % 2 === 1 ? "min-h-64 lg:order-2" : "min-h-64"}>
                                <ToolVisual tool={tool} />
                            </div>
                            <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                                <div>
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <p className="type-label">
                                            Tool {String(tool.id).padStart(2, "0")} / {tool.platform}
                                        </p>
                                        <Chip>{tool.type}</Chip>
                                    </div>
                                    <h2 className="type-h2 mt-5">{tool.name}</h2>
                                    <p className="type-body mt-4">{tool.description}</p>
                                    <ul className="mt-6 space-y-3 border-t border-line/60 pt-5">
                                        {tool.highlights.map((highlight) => (
                                            <li key={highlight} className="type-body-sm flex gap-3">
                                                <Check size={15} className="mt-1 shrink-0" />
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-7">
                                    <div className="flex flex-wrap gap-2">
                                        {tool.technologies.map((technology) => (
                                            <Chip key={technology}>{technology}</Chip>
                                        ))}
                                    </div>
                                    <Button asChild className="mt-6">
                                        <a href={tool.github} target="_blank" rel="noopener noreferrer">
                                            Open GitHub repository <Github size={17} />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </Container>
    </Section>
);

export default Tools;
