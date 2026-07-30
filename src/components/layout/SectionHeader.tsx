interface SectionHeaderProps {
    index: string;
    title: string;
    description: string;
}

const SectionHeader = ({ index, title, description }: SectionHeaderProps) => (
    <div className="mb-9 grid gap-4 border-b border-neutral-200 pb-7 md:grid-cols-[140px_1fr] dark:border-neutral-800">
        <p className="flex items-center gap-3 self-start font-mono text-[11px] uppercase text-neutral-500 dark:text-neutral-500">
            <span className="h-px w-6 bg-neutral-300 dark:bg-neutral-700" />
            {index}
        </p>
        <div>
            <h2 className="text-3xl font-semibold leading-tight text-neutral-950 sm:text-4xl dark:text-white">{title}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base dark:text-neutral-400">{description}</p>
        </div>
    </div>
);

export default SectionHeader;
