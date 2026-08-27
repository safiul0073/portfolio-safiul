import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import About from "@/components/sections/About";

export const metadata: Metadata = {
    title: "About | Md Safiullah",
    description: "Learn about Md Safiullah's full stack and AI automation background, chatbot work, delivery approach, availability, and professional strengths.",
};

export default function AboutPage() {
    return (
        <>
            <PageHeader index="01" eyebrow="About" title="Backend thinking. Full stack and AI delivery." description="I build and lead production web applications and the AI chatbots and automation that run on top of them, and I move into an unfamiliar stack or codebase quickly." />
            <About showHeader={false} />
        </>
    );
}
