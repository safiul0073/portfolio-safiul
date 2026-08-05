import { Eyebrow } from "@/components/ui/eyebrow";
import { HEADER_GRID } from "@/components/layout/PageHeader";

interface SectionHeaderProps {
    index: string;
    title: string;
    description: string;
}

const SectionHeader = ({ index, title, description }: SectionHeaderProps) => (
    <div className="mb-14">
        <div className={HEADER_GRID}>
            <Eyebrow rule className="self-start">
                {index}
            </Eyebrow>
            <div>
                <h2 className="type-h2">{title}</h2>
                <p className="type-lead mt-4 max-w-2xl">{description}</p>
            </div>
        </div>
    </div>
);

export default SectionHeader;
