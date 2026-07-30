import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Skills from "@/components/sections/Skills";

export const metadata: Metadata = {
    title: "Skills | Md Safiullah",
    description: "Production engineering skills across Laravel, Next.js, React, Vue, FastAPI, databases, real-time systems, mobile integration, DevOps, cloud, and AI automation.",
};

export default function SkillsPage() {
    return (
        <>
            <PageHeader
                index="04"
                eyebrow="Skills"
                title="Production skills, organized by capability."
                description="A current view of the languages, frameworks, architecture practices, data systems, infrastructure, mobile tools, and AI workflows I use in real projects."
            />
            <Skills showHeader={false} />
        </>
    );
}
