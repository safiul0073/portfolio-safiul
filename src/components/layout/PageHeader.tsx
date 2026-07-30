import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageHeaderProps {
    index: string;
    eyebrow: string;
    title: string;
    description: string;
    backHref?: string;
    backLabel?: string;
}

const PageHeader = ({ index, eyebrow, title, description, backHref, backLabel }: PageHeaderProps) => (
    <header data-gsap-page-header className="relative overflow-hidden border-b border-neutral-200 bg-neutral-50 pt-28 dark:border-neutral-800 dark:bg-neutral-900">
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:72px_72px] dark:opacity-[0.05]" />
        <div className="container relative mx-auto px-4 pb-12 sm:px-6 md:pb-14 lg:px-8">
            {backHref && (
                <Link
                    href={backHref}
                    className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                >
                    <ArrowLeft size={16} />
                    {backLabel || "Back"}
                </Link>
            )}
            <div className="grid gap-5 lg:grid-cols-[160px_1fr] lg:gap-8">
                <p className="flex items-center gap-3 self-start font-mono text-xs uppercase text-neutral-500 dark:text-neutral-400">
                    <span className="h-px w-8 bg-neutral-400 dark:bg-neutral-600" />
                    {index} / {eyebrow}
                </p>
                <div className="max-w-4xl">
                    <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] text-neutral-950 sm:text-5xl lg:text-[3.5rem] dark:text-white">{title}</h1>
                    <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8 dark:text-neutral-300">{description}</p>
                </div>
            </div>
        </div>
    </header>
);

export default PageHeader;
