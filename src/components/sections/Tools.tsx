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

const ToolVisual = ({ tool }: { tool: Tool }) => {
    if (tool.slug === "bangla-plagiarism-checker") {
        return (
            <div className="flex h-full min-h-64 items-center justify-center bg-neutral-100 p-6 dark:bg-neutral-900 sm:p-9">
                <div className="w-full max-w-lg border border-neutral-300 bg-white shadow-xl shadow-neutral-950/[0.06] dark:border-neutral-700 dark:bg-neutral-950">
                    <div className="flex h-9 items-center justify-between border-b border-neutral-200 px-3 dark:border-neutral-800">
                        <div className="flex gap-1.5"><span className="h-2 w-2 bg-neutral-300 dark:bg-neutral-700" /><span className="h-2 w-2 bg-neutral-300 dark:bg-neutral-700" /></div>
                        <span className="font-mono text-[8px] text-neutral-400">BANGLA TEXT ANALYSIS</span>
                    </div>
                    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 p-4 sm:gap-5 sm:p-6">
                        <div className="border border-neutral-200 p-3 dark:border-neutral-800">
                            <FileSearch size={20} />
                            <div className="mt-4 space-y-2">
                                <span className="block h-1.5 w-full bg-neutral-200 dark:bg-neutral-800" />
                                <span className="block h-1.5 w-4/5 bg-neutral-200 dark:bg-neutral-800" />
                                <span className="block h-1.5 w-2/3 bg-neutral-200 dark:bg-neutral-800" />
                            </div>
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center border border-neutral-300 font-mono text-[9px] dark:border-neutral-700">OCR</div>
                        <div className="border border-neutral-200 p-3 dark:border-neutral-800">
                            <FileSearch size={20} />
                            <div className="mt-4 space-y-2">
                                <span className="block h-1.5 w-full bg-neutral-800 dark:bg-neutral-200" />
                                <span className="block h-1.5 w-3/4 bg-neutral-200 dark:bg-neutral-800" />
                                <span className="block h-1.5 w-5/6 bg-neutral-800 dark:bg-neutral-200" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (tool.slug === "image-replacer-macos") {
        return (
            <div className="flex h-full min-h-64 items-center justify-center bg-neutral-100 p-6 dark:bg-neutral-900 sm:p-9">
                <div className="w-full max-w-lg border border-neutral-300 bg-white shadow-xl shadow-neutral-950/[0.06] dark:border-neutral-700 dark:bg-neutral-950">
                    <div className="flex h-9 items-center justify-between border-b border-neutral-200 px-3 dark:border-neutral-800">
                        <span className="font-mono text-[8px] text-neutral-400">IMAGE REPLACER</span>
                        <ShieldCheck size={14} className="text-neutral-500" />
                    </div>
                    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 p-4 sm:gap-5 sm:p-6">
                        <div className="grid grid-cols-2 gap-1 border border-neutral-200 p-2 dark:border-neutral-800">
                            {[0, 1, 2, 3].map((item) => <span key={item} className="flex aspect-square items-center justify-center bg-neutral-100 dark:bg-neutral-900"><ImageIcon size={16} /></span>)}
                        </div>
                        <ArrowRight size={20} />
                        <div className="border border-neutral-200 p-3 dark:border-neutral-800">
                            <div className="flex aspect-[4/3] items-center justify-center bg-neutral-900 text-white dark:bg-white dark:text-neutral-950"><ImageIcon size={28} /></div>
                            <p className="mt-2 truncate font-mono text-[8px] text-neutral-500">avatar-20.jpg</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-full min-h-64 items-center justify-center bg-neutral-100 p-6 dark:bg-neutral-900 sm:p-9">
            <div className="w-full max-w-lg border border-neutral-300 bg-white shadow-xl shadow-neutral-950/[0.06] dark:border-neutral-700 dark:bg-neutral-950">
                <div className="flex h-9 items-center justify-between border-b border-neutral-200 px-3 dark:border-neutral-800">
                    <span className="font-mono text-[8px] text-neutral-400">ZIPPER / CLEAN ARCHIVE</span>
                    <Archive size={14} className="text-neutral-500" />
                </div>
                <div className="grid gap-4 p-5 sm:grid-cols-[auto_1fr] sm:p-6">
                    <div className="flex h-20 w-20 items-center justify-center border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
                        <FolderArchive size={34} />
                    </div>
                    <div className="divide-y divide-neutral-200 border-y border-neutral-200 text-[11px] dark:divide-neutral-800 dark:border-neutral-800">
                        <div className="flex items-center justify-between py-2"><span>.env</span><span className="flex items-center gap-1 text-neutral-500"><Check size={12} />KEEP</span></div>
                        <div className="flex items-center justify-between py-2"><span>.gitignore</span><span className="flex items-center gap-1 text-neutral-500"><Check size={12} />KEEP</span></div>
                        <div className="flex items-center justify-between py-2"><span>.DS_Store</span><span className="flex items-center gap-1 text-neutral-500"><X size={12} />REMOVE</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Tools = ({ preview = false, showHeader = true }: { preview?: boolean; showHeader?: boolean }) => (
    <section data-gsap-section id="tools" className="border-y border-neutral-200 bg-neutral-50 py-16 dark:border-neutral-800 dark:bg-neutral-900 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {showHeader && (
                <SectionHeader
                    index="05 / TOOLS"
                    title={preview ? "Tools built to solve specific problems" : "Developer tools and native utilities"}
                    description="Independent applications built around language processing, repeatable file workflows, and cleaner macOS development tasks."
                />
            )}

            {preview ? (
                <>
                    <div data-gsap-stagger className="grid gap-6 lg:grid-cols-3">
                        {tools.map((tool) => (
                            <article data-gsap-item key={tool.id} className="group overflow-hidden border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-xl hover:shadow-neutral-950/[0.05] dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-600">
                                <div className="h-52 overflow-hidden"><ToolVisual tool={tool} /></div>
                                <div className="p-5">
                                    <p className="font-mono text-[10px] uppercase text-neutral-400">{tool.platform} / {tool.type}</p>
                                    <h3 className="mt-3 text-xl font-semibold text-neutral-950 dark:text-white">{tool.name}</h3>
                                    <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{tool.description}</p>
                                    <a href={tool.github} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 dark:text-white">
                                        View repository <Github size={16} />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="mt-8 text-right">
                        <Link href="/tools" className="inline-flex items-center gap-2 bg-neutral-950 px-5 py-3 text-sm font-medium text-white dark:bg-white dark:text-neutral-950">
                            Explore all tools <ArrowUpRight size={16} />
                        </Link>
                    </div>
                </>
            ) : (
                <div data-gsap-stagger className="space-y-8">
                    {tools.map((tool, index) => (
                        <article data-gsap-item key={tool.id} className="overflow-hidden border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 lg:grid lg:grid-cols-[0.9fr_1.1fr]">
                            <div className={index % 2 === 1 ? "lg:order-2" : ""}><ToolVisual tool={tool} /></div>
                            <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                                <div>
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <p className="font-mono text-[10px] uppercase text-neutral-400">TOOL {String(tool.id).padStart(2, "0")} / {tool.platform}</p>
                                        <span className="border border-neutral-200 px-2.5 py-1 text-[10px] uppercase text-neutral-500 dark:border-neutral-800">{tool.type}</span>
                                    </div>
                                    <h2 className="mt-5 text-3xl font-semibold leading-tight text-neutral-950 dark:text-white">{tool.name}</h2>
                                    <p className="mt-4 leading-7 text-neutral-600 dark:text-neutral-400">{tool.description}</p>
                                    <ul className="mt-6 space-y-3 border-t border-neutral-200 pt-5 dark:border-neutral-800">
                                        {tool.highlights.map((highlight) => (
                                            <li key={highlight} className="flex gap-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                                                <Check size={15} className="mt-1 shrink-0" />
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-7">
                                    <div className="flex flex-wrap gap-2">
                                        {tool.technologies.map((technology) => (
                                            <span key={technology} className="border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">{technology}</span>
                                        ))}
                                    </div>
                                    <a href={tool.github} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 bg-neutral-950 px-5 py-3 text-sm font-medium text-white dark:bg-white dark:text-neutral-950">
                                        Open GitHub repository <Github size={17} />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </div>
    </section>
);

export default Tools;
