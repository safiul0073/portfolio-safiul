interface SectionHeaderProps {
    index: string;
    title: string;
    description: string;
}

const SectionHeader = ({ index, title, description }: SectionHeaderProps) => (
    <div className="mb-10 grid gap-4 border-b border-neutral-200 pb-7 md:grid-cols-[120px_1fr] dark:border-neutral-800">
        <p className="font-mono text-xs uppercase text-neutral-400 dark:text-neutral-500">{index}</p>
        <div>
            <h2 className="text-3xl font-semibold text-neutral-950 dark:text-white">{title}</h2>
            <p className="mt-3 max-w-2xl leading-7 text-neutral-600 dark:text-neutral-400">{description}</p>
        </div>
    </div>
);

export default SectionHeader;
