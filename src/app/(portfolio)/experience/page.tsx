import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Experience from "@/components/sections/Experience";

export const metadata: Metadata = {
    title: "Experience | Md Safiullah",
    description: "Employment history, education, leadership experience, and delivery responsibilities of senior full stack developer Md Safiullah.",
};

export default function ExperiencePage() {
    return (
        <>
            <PageHeader index="03" eyebrow="Experience" title="Experience grounded in production delivery." description="Four years of building applications, modernizing systems, guiding developers, and shipping work for clients and product teams." />
            <Experience showHeader={false} />
        </>
    );
}
