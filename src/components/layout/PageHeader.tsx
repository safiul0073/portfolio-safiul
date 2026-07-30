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
    <header data-gsap-page-header className="border-b border-neutral-200 bg-neutral-50 pt-32 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="container mx-auto px-4 pb-16 sm:px-6 md:pb-20 lg:px-8">
            {backHref && (
                <Link
                    href={backHref}
                    className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                >
                    <ArrowLeft size={16} />
                    {backLabel || "Back"}
                </Link>
            )}
            <div className="grid gap-8 lg:grid-cols-[160px_1fr]">
                <p className="font-mono text-sm text-neutral-500 dark:text-neutral-400">{index} / {eyebrow}</p>
                <div className="max-w-4xl">
                    <h1 className="text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl md:text-6xl dark:text-white">{title}</h1>
                    <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">{description}</p>
                </div>
            </div>
        </div>
    </header>
);

export default PageHeader;
