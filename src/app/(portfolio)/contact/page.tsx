import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
    title: "Contact | Md Safiullah",
    description: "Contact Md Safiullah about full-time roles, freelance full stack projects, technical leadership, or product collaboration.",
};

export default function ContactPage() {
    return (
        <>
            <PageHeader index="05" eyebrow="Contact" title="Let's discuss useful work." description="Share your role, product, or technical challenge. I am available for selected full-time, freelance, and collaborative opportunities." />
            <Contact showHeader={false} />
        </>
    );
}
