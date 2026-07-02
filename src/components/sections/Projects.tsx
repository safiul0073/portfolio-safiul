/** @format */

import { projects } from "@/data/portfolio";
import { Project } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ExternalLink, Github, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const hasValidUrl = (url?: string) => Boolean(url && url !== "#");

    const openProject = (project: Project) => {
        setSelectedProject(project);
        document.body.style.overflow = "hidden";
    };

    const closeProject = () => {
        setSelectedProject(null);
        document.body.style.overflow = "auto";
    };

    useEffect(() => {
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <section id="projects" className="py-20 bg-dark-50 dark:bg-dark-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-2">Portfolio Projects</h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                    <p className="text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
                        A selection of real applications I have built, maintained, or contributed to across client work, business systems, and commercial products.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                            onClick={() => openProject(project)}
                        >
                            <div className="flex h-full cursor-pointer flex-col overflow-hidden rounded-lg border border-dark-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-dark-700 dark:bg-dark-900">
                                <div className="relative overflow-hidden h-60">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/85 via-dark-900/20 to-transparent flex items-end">
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
                                                    <span key={techIndex} className="rounded-md bg-white/15 px-2 py-1 text-xs text-white ring-1 ring-white/20 backdrop-blur">
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.technologies.length > 3 && (
                                                    <span className="rounded-md bg-dark-900/70 px-2 py-1 text-xs text-white ring-1 ring-white/10">+{project.technologies.length - 3}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <p className="mb-5 flex-1 leading-7 text-dark-600 dark:text-dark-300">{project.description}</p>
                                    {project.highlights && (
                                        <ul className="mb-5 space-y-2">
                                            {project.highlights.slice(0, 2).map((highlight) => (
                                                <li key={highlight} className="flex gap-2 text-sm leading-6 text-dark-600 dark:text-dark-300">
                                                    <CheckCircle2 size={16} className="mt-1 shrink-0 text-primary-600" />
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="text-sm font-semibold text-primary-600">View details</span>
                                        {project.featured && (
                                            <span className="rounded-md bg-accent-100 px-2 py-1 text-xs font-medium text-accent-800 dark:bg-accent-900/30 dark:text-accent-300">
                                                Featured
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeProject}
                    >
                        <motion.div
                            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-2xl dark:bg-dark-800"
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute right-4 top-4 z-10 rounded-md bg-white/90 p-2 text-dark-700 shadow-md transition-colors hover:bg-white dark:bg-dark-800/90 dark:text-dark-200 dark:hover:bg-dark-700"
                                onClick={closeProject}
                                aria-label="Close project details"
                            >
                                <X size={20} />
                            </button>

                            <div className="overflow-auto max-h-[90vh]">
                                <div className="h-60 sm:h-72 md:h-80 overflow-hidden relative">
                                    <Image
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        fill
                                        sizes="(min-width: 768px) 896px, 100vw"
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/85 via-dark-900/30 to-transparent flex items-end">
                                        <div className="p-6">
                                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                                            <p className="max-w-2xl text-sm leading-6 text-white/80">{selectedProject.description}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 sm:p-8">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {selectedProject.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="text-sm px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <h4 className="text-xl font-semibold text-dark-900 dark:text-white mb-3">Project Details</h4>
                                    <p className="text-dark-600 dark:text-dark-300 mb-6 leading-relaxed">{selectedProject.longDescription || selectedProject.description}</p>

                                    {selectedProject.highlights && (
                                        <div className="mb-6 rounded-lg border border-dark-200 bg-dark-50 p-5 dark:border-dark-700 dark:bg-dark-900">
                                            <h5 className="mb-4 text-base font-semibold text-dark-900 dark:text-white">Key Highlights</h5>
                                            <ul className="grid gap-3 md:grid-cols-2">
                                                {selectedProject.highlights.map((highlight) => (
                                                    <li key={highlight} className="flex gap-2 text-sm leading-6 text-dark-600 dark:text-dark-300">
                                                        <CheckCircle2 size={16} className="mt-1 shrink-0 text-primary-600" />
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap gap-4">
                                        {hasValidUrl(selectedProject.github) ? (
                                            <a
                                                href={selectedProject.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center rounded-md bg-dark-800 px-4 py-2 text-white transition-colors hover:bg-dark-700 dark:bg-dark-700 dark:hover:bg-dark-600"
                                            >
                                                <Github size={18} className="mr-2" />
                                                View Code
                                            </a>
                                        ) : (
                                            <span className="inline-flex items-center rounded-md bg-dark-200 px-4 py-2 text-dark-600 dark:bg-dark-700 dark:text-dark-300">
                                                <Github size={18} className="mr-2" />
                                                Private Repository
                                            </span>
                                        )}

                                        {hasValidUrl(selectedProject.live) ? (
                                            <a
                                                href={selectedProject.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors"
                                            >
                                                <ExternalLink size={18} className="mr-2" />
                                                Live Demo
                                            </a>
                                        ) : (
                                            <span className="inline-flex items-center rounded-md bg-primary-100 px-4 py-2 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">
                                                <ExternalLink size={18} className="mr-2" />
                                                Demo Unavailable
                                            </span>
                                        )}
                                    </div>
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
