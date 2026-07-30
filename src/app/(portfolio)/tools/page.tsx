import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Tools from "@/components/sections/Tools";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
    title: "Tools | Md Safiullah",
    description: `Explore ${tools.length} independent tools by Md Safiullah, including a Bengali plagiarism checker and native macOS utilities for image replacement and clean ZIP archives.`,
};

export default function ToolsPage() {
    return (
        <>
            <PageHeader
                index="05"
                eyebrow="Tools"
                title="Small tools with focused, practical jobs."
                description="Independent web and macOS applications created to solve repetitive file tasks, improve developer workflows, and explore Bengali language processing."
            />
            <Tools showHeader={false} />
        </>
    );
}
