"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Braces, Code2, Database, GitBranch, Layers3, Server } from "lucide-react";
import SectionHeader from "@/components/layout/SectionHeader";
import { skills } from "@/data/portfolio";
import type { Skill } from "@/types";

type SkillFilter = "all" | Skill["category"];

const filters: Array<{ id: SkillFilter; label: string }> = [
    { id: "all", label: "All skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
    { id: "devops", label: "DevOps" },
    { id: "other", label: "Architecture" },
];

const featuredSkillNames = new Set(["Laravel", "Next.js", "React", "Vue.js", "MySQL", "Docker", "RESTful APIs", "CI/CD"]);

const SkillIcon = ({ category }: { category: Skill["category"] }) => {
    const className = "h-5 w-5";
    if (category === "frontend") return <Code2 className={className} />;
    if (category === "backend") return <Server className={className} />;
    if (category === "database") return <Database className={className} />;
    if (category === "devops") return <GitBranch className={className} />;
    return <Braces className={className} />;
};

const Skills = ({ preview = false, showHeader = true }: { preview?: boolean; showHeader?: boolean }) => {
    const [activeFilter, setActiveFilter] = useState<SkillFilter>("all");
    const visibleSkills = useMemo(() => {
        if (preview) return skills.filter((skill) => featuredSkillNames.has(skill.name));
        return activeFilter === "all" ? skills : skills.filter((skill) => skill.category === activeFilter);
    }, [activeFilter, preview]);

    return (
        <section data-gsap-section id="skills" className="bg-white py-20 dark:bg-neutral-950 md:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {showHeader && <SectionHeader index="04 / CAPABILITIES" title="Skills and technologies" description="The tools and engineering areas I use to build maintainable full stack applications." />}
                {!preview && (
                    <div className="mb-10 overflow-x-auto">
                        <div className="inline-flex min-w-max border border-neutral-200 p-1 dark:border-neutral-800">
                            {filters.map((filter) => (
                                <button
                                    key={filter.id}
                                    type="button"
                                    onClick={() => setActiveFilter(filter.id)}
                                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                                        activeFilter === filter.id
                                            ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950"
                                            : "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-900"
                                    }`}
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
                <div data-gsap-stagger className="grid gap-px border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4 dark:border-neutral-800 dark:bg-neutral-800">
                    {visibleSkills.map((skill) => (
                        <article data-gsap-item key={skill.name} className="bg-white p-5 dark:bg-neutral-950">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex h-10 w-10 items-center justify-center border border-neutral-200 text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
                                    <SkillIcon category={skill.category} />
                                </div>
                                <span className="font-mono text-[10px] uppercase text-neutral-500">Production toolkit</span>
                            </div>
                            <h3 className="mt-7 font-semibold text-neutral-950 dark:text-white">{skill.name}</h3>
                            <p className="mt-1 text-xs capitalize text-neutral-500">{skill.category === "other" ? "Architecture" : skill.category}</p>
                            <div className="mt-5 h-px bg-neutral-200 dark:bg-neutral-800" />
                        </article>
                    ))}
                </div>
                {preview && (
                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-6 dark:border-neutral-800">
                        <p className="inline-flex items-center gap-2 text-sm text-neutral-500"><Layers3 size={16} /> Frontend, backend, database, DevOps, and architecture</p>
                        <Link href="/skills" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 dark:text-white">
                            Explore all skills <ArrowUpRight size={16} />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Skills;
