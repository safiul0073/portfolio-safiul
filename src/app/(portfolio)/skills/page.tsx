import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Skills from "@/components/sections/Skills";

export const metadata: Metadata = {
    title: "Skills | Md Safiullah",
    description: "Full stack development skills across Laravel, Next.js, React, Vue, databases, APIs, Docker, AWS, and CI/CD.",
};

export default function SkillsPage() {
    return (
        <>
            <PageHeader index="04" eyebrow="Skills" title="A practical full stack toolkit." description="Technologies and engineering capabilities used to design, build, deploy, and maintain production applications." />
            <Skills showHeader={false} />
        </>
    );
}
