"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Eye, X } from "lucide-react";
import SectionHeader from "@/components/layout/SectionHeader";
import ProjectLinks from "@/components/projects/ProjectLinks";
import { projects } from "@/data/portfolio";
import type { Project } from "@/types";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type ProjectFilter = "all" | "laravel" | "nextjs" | "frontend" | "mobile";

const projectFilters: Array<{ id: ProjectFilter; label: string }> = [
    { id: "all", label: "All projects" },
    { id: "laravel", label: "Laravel" },
    { id: "nextjs", label: "Next.js" },
    { id: "frontend", label: "Vue / React" },
    { id: "mobile", label: "Mobile" },
];

const FOCUSABLE = 'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])';

const matchesFilter = (project: Project, filter: ProjectFilter) => {
    if (filter === "all") return true;
    const technologies = project.technologies.map((technology) => technology.toLowerCase());
    if (filter === "laravel") return technologies.includes("laravel");
    if (filter === "nextjs") return technologies.includes("next.js");
    if (filter === "frontend") return technologies.some((technology) => ["vue.js", "react", "nuxt.js"].includes(technology));
    return technologies.some((technology) => ["expo", "react native", "flutter", "flutter api"].includes(technology));
};

const Projects = ({ preview = false, showHeader = true }: { preview?: boolean; showHeader?: boolean }) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
    const [mounted, setMounted] = useState(false);
    const panelRef = useRef<HTMLDivElement>(null);
    const openerRef = useRef<HTMLElement | null>(null);

    useEffect(() => setMounted(true), []);

    const visibleProjects = useMemo(() => {
        if (preview) return projects.filter((project) => project.featured).slice(0, 6);
        return projects.filter((project) => matchesFilter(project, activeFilter));
    }, [activeFilter, preview]);

    const openProject = (project: Project, event: React.MouseEvent<HTMLButtonElement>) => {
        openerRef.current = event.currentTarget;
        setSelectedProject(project);
        document.body.style.overflow = "hidden";
    };

    const closeProject = useCallback(() => setSelectedProject(null), []);

    // The scroll lock is released in onExitComplete so it does not snap back
    // while the panel is still animating out.
    const releaseScrollLock = useCallback(() => {
        document.body.style.overflow = "";
        openerRef.current?.focus();
        openerRef.current = null;
    }, []);

    useEffect(() => {
        if (!selectedProject) return;

        const panel = panelRef.current;
        panel?.querySelector<HTMLElement>("[data-modal-close]")?.focus();

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeProject();
                return;
            }
            if (event.key !== "Tab" || !panel) return;

            const focusable = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE));
            if (!focusable.length) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            const active = document.activeElement;

            if (event.shiftKey && (active === first || !panel.contains(active))) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && active === last) {
                event.preventDefault();
                first.focus();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedProject, closeProject]);

    // Safety net: never leave the page locked if this unmounts while open.
    useEffect(
        () => () => {
            document.body.style.overflow = "";
        },
        [],
    );

    const modal = (
        <AnimatePresence onExitComplete={releaseScrollLock}>
            {selectedProject && (
                <motion.div
                    key="project-quick-view"
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    onClick={closeProject}
                >
                    <motion.div
                        ref={panelRef}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="project-quick-view-title"
                        className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-xl bg-surface shadow-lg"
                        initial={{ opacity: 0, y: 24, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 16, scale: 0.98 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            data-modal-close
                            onClick={closeProject}
                            aria-label="Close project details"
                            className="absolute right-4 top-4 z-10 rounded-full bg-surface p-2 text-fg shadow-md transition-colors duration-base ease-out hover:bg-surface-muted"
                        >
                            <X size={20} />
                        </button>

                        <div className="relative aspect-[16/10] bg-surface-sunken sm:aspect-[16/8]">
                            <Image
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                fill
                                sizes="768px"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 hidden bg-gradient-to-t from-black/80 via-transparent to-transparent sm:block" />
                            <h3
                                id="project-quick-view-title"
                                className="type-h3 absolute bottom-6 left-6 right-6 hidden text-white sm:block"
                            >
                                {selectedProject.title}
                            </h3>
                        </div>

                        <div className="p-6 sm:p-8">
                            {/* Below sm the title sits in the body — the image band is too
                                short to hold two or three lines of heading. */}
                            <h3 className="type-h3 mb-5 sm:hidden">{selectedProject.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.technologies.map((technology) => (
                                    <Chip key={technology}>{technology}</Chip>
                                ))}
                            </div>
                            <p className="type-body mt-6">
                                {selectedProject.longDescription || selectedProject.description}
                            </p>
                            {selectedProject.highlights && (
                                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                                    {selectedProject.highlights.map((highlight) => (
                                        <li key={highlight} className="type-body-sm flex gap-2">
                                            <Check size={16} className="mt-1 shrink-0" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <div className="mt-8 flex flex-wrap gap-3 border-t border-line/60 pt-6">
                                <Button asChild size="sm">
                                    <Link href={`/projects/${selectedProject.slug}`} onClick={closeProject}>
                                        Full case study <ArrowUpRight size={16} />
                                    </Link>
                                </Button>
                                <ProjectLinks project={selectedProject} size="sm" />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    return (
        <Section id="projects" band="muted" divider="y">
            <Container>
                {showHeader && (
                    <SectionHeader
                        index="02 / SELECTED WORK"
                        title={preview ? "Selected portfolio projects" : "Portfolio projects"}
                        description="Production applications, business systems, and commercial products built across client and product teams."
                    />
                )}

                {!preview && (
                    <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div
                            role="group"
                            aria-label="Filter projects by technology"
                            className="grid grid-cols-2 gap-1 rounded-full bg-surface-muted p-1 ring-1 ring-line/50 sm:inline-flex"
                        >
                            {projectFilters.map((filter) => (
                                <Button
                                    key={filter.id}
                                    type="button"
                                    size="sm"
                                    variant={activeFilter === filter.id ? "solid" : "ghost"}
                                    aria-pressed={activeFilter === filter.id}
                                    onClick={() => setActiveFilter(filter.id)}
                                    className="last:col-span-2 sm:last:col-span-1"
                                >
                                    {filter.label}
                                </Button>
                            ))}
                        </div>
                        <p className="type-label">{visibleProjects.length} projects</p>
                    </div>
                )}

                {/* Keyed on the filter so the grid remounts and re-staggers cleanly. */}
                <div key={activeFilter} data-reveal-group className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {visibleProjects.map((project, index) => (
                        <Card
                            data-reveal
                            as="article"
                            interactive
                            padding="none"
                            key={project.id}
                            className="h-full overflow-hidden"
                        >
                            <Link
                                href={`/projects/${project.slug}`}
                                className="relative block aspect-[16/10] overflow-hidden bg-surface-sunken"
                                tabIndex={-1}
                                aria-hidden="true"
                            >
                                <Image
                                    src={project.image}
                                    alt=""
                                    fill
                                    priority={index === 0}
                                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    className="object-cover transition-transform duration-reveal ease-out group-hover:scale-[1.04]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent transition-opacity duration-slow ease-out group-hover:opacity-90" />
                                {project.featured && (
                                    <span className="type-label absolute left-4 top-4 bg-white px-2.5 py-1 text-neutral-950">
                                        Featured
                                    </span>
                                )}
                                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
                                    {project.technologies.slice(0, 3).map((technology) => (
                                        <span
                                            key={technology}
                                            className="type-label border border-white/25 bg-black/35 px-2 py-1 text-white backdrop-blur"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                            </Link>

                            <div className="flex flex-1 flex-col p-5 sm:p-6">
                                <p className="type-label">Project {String(project.id).padStart(2, "0")}</p>
                                <h3 className="type-card-title mt-3">
                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className="decoration-1 underline-offset-4 hover:underline"
                                    >
                                        {project.title}
                                    </Link>
                                </h3>
                                <p className="type-body-sm mt-3 flex-1">{project.description}</p>
                                {project.highlights && (
                                    <ul className="mt-5 space-y-2 border-t border-line/60 pt-4">
                                        {project.highlights.slice(0, preview ? 1 : 2).map((highlight) => (
                                            <li key={highlight} className="type-body-xs flex gap-2 text-fg-subtle">
                                                <Check size={14} className="mt-0.5 shrink-0" />
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                <div className="mt-6 flex items-center justify-between border-t border-line/60 pt-4">
                                    <Button asChild variant="link" className="text-sm font-semibold">
                                        <Link href={`/projects/${project.slug}`}>
                                            View case study <ArrowUpRight size={15} />
                                        </Link>
                                    </Button>
                                    <button
                                        type="button"
                                        onClick={(event) => openProject(project, event)}
                                        aria-label={`Quick view ${project.title}`}
                                        title="Quick view"
                                        className={cn(
                                            "p-2 text-fg-subtle transition-colors duration-base ease-out",
                                            "hover:bg-surface-muted hover:text-fg",
                                        )}
                                    >
                                        <Eye size={18} />
                                    </button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {preview && (
                    <div className="mt-10 flex justify-end">
                        <Button asChild>
                            <Link href="/projects">
                                View all {projects.length} projects <ArrowUpRight size={16} />
                            </Link>
                        </Button>
                    </div>
                )}
            </Container>

            {/* Portalled to the body so no ancestor can become its containing block. */}
            {mounted ? createPortal(modal, document.body) : null}
        </Section>
    );
};

export default Projects;
