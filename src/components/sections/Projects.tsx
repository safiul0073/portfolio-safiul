"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, ExternalLink, Eye, Github, X } from "lucide-react";
import SectionHeader from "@/components/layout/SectionHeader";
import { projects } from "@/data/portfolio";
import { hasValidProjectUrl } from "@/lib/portfolio";
import type { Project } from "@/types";

type ProjectFilter = "all" | "laravel" | "nextjs" | "frontend" | "mobile";

const projectFilters: Array<{ id: ProjectFilter; label: string }> = [
    { id: "all", label: "All projects" },
    { id: "laravel", label: "Laravel" },
    { id: "nextjs", label: "Next.js" },
    { id: "frontend", label: "Vue / React" },
    { id: "mobile", label: "Mobile" },
];

const matchesFilter = (project: Project, filter: ProjectFilter) => {
    if (filter === "all") return true;
    const technologies = project.technologies.map((technology) => technology.toLowerCase());
    if (filter === "laravel") return technologies.includes("laravel");
    if (filter === "nextjs") return technologies.includes("next.js");
    if (filter === "frontend") return technologies.some((technology) => ["vue.js", "react", "nuxt.js"].includes(technology));
    return technologies.some((technology) => ["expo", "react native"].includes(technology));
};

const Projects = ({ preview = false, showHeader = true }: { preview?: boolean; showHeader?: boolean }) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");

    const visibleProjects = useMemo(() => {
        if (preview) return projects.filter((project) => project.featured).slice(0, 6);
        return projects.filter((project) => matchesFilter(project, activeFilter));
    }, [activeFilter, preview]);

    const openProject = (project: Project) => {
        setSelectedProject(project);
        document.body.style.overflow = "hidden";
    };

    const closeProject = () => {
        setSelectedProject(null);
        document.body.style.overflow = "";
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") closeProject();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <section data-gsap-section id="projects" className="border-y border-neutral-200 bg-neutral-50 py-20 dark:border-neutral-800 dark:bg-neutral-900 md:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {showHeader && (
                    <SectionHeader
                        index="02 / SELECTED WORK"
                        title={preview ? "Selected portfolio projects" : "Portfolio projects"}
                        description="Production applications, business systems, and commercial products built across client and product teams."
                    />
                )}

                {!preview && (
                    <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="overflow-x-auto">
                            <div className="inline-flex min-w-max border border-neutral-200 bg-white p-1 dark:border-neutral-800 dark:bg-neutral-950">
                                {projectFilters.map((filter) => (
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
                        <p className="font-mono text-xs text-neutral-500">{visibleProjects.length} PROJECTS</p>
                    </div>
                )}

                <div data-gsap-stagger className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {visibleProjects.map((project) => (
                        <article data-gsap-item key={project.id} className="group flex h-full flex-col overflow-hidden border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
                            <Link href={`/projects/${project.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
                                {project.featured && <span className="absolute left-4 top-4 bg-white px-2.5 py-1 font-mono text-[10px] text-neutral-950">FEATURED</span>}
                                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
                                    {project.technologies.slice(0, 3).map((technology) => (
                                        <span key={technology} className="border border-white/25 bg-black/35 px-2 py-1 text-[11px] text-white backdrop-blur">{technology}</span>
                                    ))}
                                </div>
                            </Link>
                            <div className="flex flex-1 flex-col p-6">
                                <p className="font-mono text-[11px] text-neutral-400">PROJECT {String(project.id).padStart(2, "0")}</p>
                                <h3 className="mt-3 text-xl font-semibold leading-7 text-neutral-950 dark:text-white">
                                    <Link href={`/projects/${project.slug}`} className="hover:underline">{project.title}</Link>
                                </h3>
                                <p className="mt-3 flex-1 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{project.description}</p>
                                {project.highlights && (
                                    <ul className="mt-5 space-y-2 border-t border-neutral-200 pt-4 dark:border-neutral-800">
                                        {project.highlights.slice(0, preview ? 1 : 2).map((highlight) => (
                                            <li key={highlight} className="flex gap-2 text-xs leading-5 text-neutral-500 dark:text-neutral-400"><Check size={14} className="mt-0.5 shrink-0" />{highlight}</li>
                                        ))}
                                    </ul>
                                )}
                                <div className="mt-6 flex items-center justify-between border-t border-neutral-200 pt-4 dark:border-neutral-800">
                                    <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-950 dark:text-white">
                                        View case study <ArrowUpRight size={15} />
                                    </Link>
                                    <button type="button" onClick={() => openProject(project)} aria-label={`Quick view ${project.title}`} title="Quick view" className="p-2 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-950 dark:hover:bg-neutral-900 dark:hover:text-white">
                                        <Eye size={18} />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {preview && (
                    <div className="mt-10 text-right">
                        <Link href="/projects" className="inline-flex items-center gap-2 bg-neutral-950 px-5 py-3 text-sm font-medium text-white dark:bg-white dark:text-neutral-950">
                            View all {projects.length} projects <ArrowUpRight size={16} />
                        </Link>
                    </div>
                )}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-neutral-950/80 p-4 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeProject}
                    >
                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            aria-label={`${selectedProject.title} quick view`}
                            className="relative max-h-[90vh] w-full max-w-3xl overflow-auto bg-white shadow-2xl dark:bg-neutral-950"
                            initial={{ opacity: 0, y: 24, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 16, scale: 0.98 }}
                            transition={{ duration: 0.22 }}
                            onClick={(event) => event.stopPropagation()}
                        >
                            <button type="button" onClick={closeProject} aria-label="Close project details" className="absolute right-4 top-4 z-10 bg-white p-2 text-neutral-950 shadow dark:bg-neutral-950 dark:text-white"><X size={20} /></button>
                            <div className="relative aspect-[16/8] bg-neutral-200 dark:bg-neutral-800">
                                <Image src={selectedProject.image} alt={selectedProject.title} fill sizes="768px" className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <h3 className="absolute bottom-6 left-6 right-6 text-2xl font-semibold text-white sm:text-3xl">{selectedProject.title}</h3>
                            </div>
                            <div className="p-6 sm:p-8">
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.technologies.map((technology) => <span key={technology} className="border border-neutral-200 px-2.5 py-1 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">{technology}</span>)}
                                </div>
                                <p className="mt-6 leading-7 text-neutral-600 dark:text-neutral-400">{selectedProject.longDescription || selectedProject.description}</p>
                                {selectedProject.highlights && (
                                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                                        {selectedProject.highlights.map((highlight) => <li key={highlight} className="flex gap-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400"><Check size={16} className="mt-1 shrink-0" />{highlight}</li>)}
                                    </ul>
                                )}
                                <div className="mt-8 flex flex-wrap gap-3 border-t border-neutral-200 pt-6 dark:border-neutral-800">
                                    <Link href={`/projects/${selectedProject.slug}`} onClick={closeProject} className="inline-flex items-center gap-2 bg-neutral-950 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-neutral-950">
                                        Full case study <ArrowUpRight size={16} />
                                    </Link>
                                    {hasValidProjectUrl(selectedProject.github) ? (
                                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-neutral-300 px-4 py-2 text-sm dark:border-neutral-700"><Github size={16} />View code</a>
                                    ) : (
                                        <span className="inline-flex items-center gap-2 border border-neutral-200 px-4 py-2 text-sm text-neutral-400 dark:border-neutral-800"><Github size={16} />Private repository</span>
                                    )}
                                    {hasValidProjectUrl(selectedProject.live) ? (
                                        <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-neutral-300 px-4 py-2 text-sm dark:border-neutral-700"><ExternalLink size={16} />Live demo</a>
                                    ) : (
                                        <span className="inline-flex items-center gap-2 border border-neutral-200 px-4 py-2 text-sm text-neutral-400 dark:border-neutral-800"><ExternalLink size={16} />Demo unavailable</span>
                                    )}
                                    {hasValidProjectUrl(selectedProject.codecanyon) && (
                                        <a href={selectedProject.codecanyon} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-neutral-300 px-4 py-2 text-sm dark:border-neutral-700"><ExternalLink size={16} />CodeCanyon</a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
