import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import About from "@/components/sections/About";

export const metadata: Metadata = {
    title: "About | Md Safiullah",
    description: "Learn about Md Safiullah's full stack engineering background, delivery approach, availability, and professional strengths.",
};

export default function AboutPage() {
    return (
        <>
            <PageHeader index="01" eyebrow="About" title="Backend thinking. Full stack delivery." description="I build and lead production web applications with a focus on reliable architecture, clear execution, and maintainable systems." />
            <About showHeader={false} />
        </>
    );
}
