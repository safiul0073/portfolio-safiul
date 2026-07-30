import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Projects from "@/components/sections/Projects";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
    title: "Projects | Md Safiullah",
    description: `Explore ${projects.length} production projects by Md Safiullah across marketplaces, property technology, ERP, e-commerce, booking, and business systems.`,
};

export default function ProjectsPage() {
    return (
        <>
            <PageHeader index="02" eyebrow="Projects" title="Products and platforms built for real use." description="A complete portfolio of client applications, business systems, commercial marketplace products, and production platforms." />
            <Projects showHeader={false} />
        </>
    );
}
