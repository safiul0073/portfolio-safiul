import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { hasValidProjectUrl } from "@/lib/portfolio";

interface ProjectPageProps {
    params: { slug: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
    const project = projects.find((item) => item.slug === params.slug);
    if (!project) return {};

    return {
        title: `${project.title} | Md Safiullah`,
        description: project.description,
        openGraph: {
            title: `${project.title} | Md Safiullah`,
            description: project.description,
            images: [project.image],
            type: "article",
        },
    };
}

export default function ProjectCaseStudyPage({ params }: ProjectPageProps) {
    const projectIndex = projects.findIndex((item) => item.slug === params.slug);
    if (projectIndex === -1) notFound();

    const project = projects[projectIndex];
    const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
    const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;
    const relatedProjects = projects
        .filter((item) => item.id !== project.id && item.technologies.some((technology) => project.technologies.includes(technology)))
        .slice(0, 3);

    return (
        <>
            <header data-gsap-page-header className="border-b border-neutral-200 bg-neutral-50 pt-32 dark:border-neutral-800 dark:bg-neutral-900">
                <div className="container mx-auto px-4 pb-14 sm:px-6 lg:px-8">
                    <nav className="flex flex-wrap items-center gap-2 text-sm text-neutral-500">
                        <Link href="/" className="hover:text-neutral-950 dark:hover:text-white">Home</Link><span>/</span>
                        <Link href="/projects" className="hover:text-neutral-950 dark:hover:text-white">Projects</Link><span>/</span>
                        <span className="text-neutral-800 dark:text-neutral-200">{project.title}</span>
                    </nav>
                    <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                        <div className="max-w-4xl">
                            <div className="flex flex-wrap items-center gap-3">
                                <p className="font-mono text-xs text-neutral-500">PROJECT {String(project.id).padStart(2, "0")}</p>
                                {project.featured && <span className="border border-neutral-300 px-2 py-1 font-mono text-[10px] dark:border-neutral-700">FEATURED</span>}
                            </div>
                            <h1 className="mt-5 text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl lg:text-6xl dark:text-white">{project.title}</h1>
                            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">{project.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {hasValidProjectUrl(project.github) ? (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-neutral-300 bg-white px-4 py-2.5 text-sm font-medium dark:border-neutral-700 dark:bg-neutral-950"><Github size={17} />View code</a>
                            ) : (
                                <span className="inline-flex items-center gap-2 border border-neutral-200 px-4 py-2.5 text-sm text-neutral-400 dark:border-neutral-800"><Github size={17} />Private repository</span>
                            )}
                            {hasValidProjectUrl(project.live) ? (
                                <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-neutral-950 px-4 py-2.5 text-sm font-medium text-white dark:bg-white dark:text-neutral-950"><ExternalLink size={17} />Live demo</a>
                            ) : (
                                <span className="inline-flex items-center gap-2 border border-neutral-200 px-4 py-2.5 text-sm text-neutral-400 dark:border-neutral-800"><ExternalLink size={17} />Demo unavailable</span>
                            )}
                            {hasValidProjectUrl(project.codecanyon) && (
                                <a href={project.codecanyon} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-neutral-300 bg-white px-4 py-2.5 text-sm font-medium dark:border-neutral-700 dark:bg-neutral-950"><ExternalLink size={17} />CodeCanyon</a>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            <div data-gsap-section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="relative aspect-[16/8] overflow-hidden border border-neutral-200 bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-800">
                    <Image src={project.image} alt={project.title} fill priority sizes="100vw" className="object-cover" />
                </div>
            </div>

            <section data-gsap-section className="border-y border-neutral-200 bg-white py-16 dark:border-neutral-800 dark:bg-neutral-950 md:py-24">
                <div className="container mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
                    <aside>
                        <p className="font-mono text-xs uppercase text-neutral-500">Technology stack</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {project.technologies.map((technology) => <span key={technology} className="border border-neutral-200 px-3 py-1.5 text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">{technology}</span>)}
                        </div>
                    </aside>
                    <div>
                        <p className="font-mono text-xs uppercase text-neutral-500">Project overview</p>
                        <p className="mt-5 text-xl leading-9 text-neutral-700 dark:text-neutral-300">{project.longDescription || project.description}</p>
                        {project.highlights && (
                            <div className="mt-10">
                                <h2 className="text-2xl font-semibold text-neutral-950 dark:text-white">Key highlights</h2>
                                <ul data-gsap-stagger className="mt-6 grid gap-4 sm:grid-cols-2">
                                    {project.highlights.map((highlight) => <li data-gsap-item key={highlight} className="flex gap-3 border-t border-neutral-200 pt-4 text-sm leading-6 text-neutral-600 dark:border-neutral-800 dark:text-neutral-400"><Check size={17} className="mt-1 shrink-0" />{highlight}</li>)}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {relatedProjects.length > 0 && (
                <section data-gsap-section className="bg-neutral-50 py-16 dark:bg-neutral-900 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-end justify-between gap-6 border-b border-neutral-200 pb-6 dark:border-neutral-800">
                            <div><p className="font-mono text-xs text-neutral-500">RELATED WORK</p><h2 className="mt-3 text-3xl font-semibold">Similar projects</h2></div>
                            <Link href="/projects" className="hidden items-center gap-2 text-sm font-semibold sm:inline-flex">All projects <ArrowUpRight size={16} /></Link>
                        </div>
                        <div data-gsap-stagger className="mt-8 grid gap-6 md:grid-cols-3">
                            {relatedProjects.map((related) => (
                                <Link data-gsap-item key={related.id} href={`/projects/${related.slug}`} className="group border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-950">
                                    <p className="font-mono text-[10px] text-neutral-400">PROJECT {String(related.id).padStart(2, "0")}</p>
                                    <h3 className="mt-3 font-semibold group-hover:underline">{related.title}</h3>
                                    <p className="mt-3 text-sm leading-6 text-neutral-500">{related.description}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <nav className="border-y border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
                <div className="container mx-auto grid sm:grid-cols-2">
                    <div className="border-b border-neutral-200 p-6 sm:border-b-0 sm:border-r dark:border-neutral-800">
                        {previousProject ? <Link href={`/projects/${previousProject.slug}`} className="group block"><span className="inline-flex items-center gap-2 text-xs text-neutral-500"><ArrowLeft size={14} />Previous project</span><p className="mt-2 font-semibold group-hover:underline">{previousProject.title}</p></Link> : <span className="text-sm text-neutral-400">First project</span>}
                    </div>
                    <div className="p-6 text-right">
                        {nextProject ? <Link href={`/projects/${nextProject.slug}`} className="group block"><span className="inline-flex items-center gap-2 text-xs text-neutral-500">Next project<ArrowRight size={14} /></span><p className="mt-2 font-semibold group-hover:underline">{nextProject.title}</p></Link> : <span className="text-sm text-neutral-400">Last project</span>}
                    </div>
                </div>
            </nav>

            <section data-gsap-section className="bg-neutral-950 py-16 text-white md:py-20">
                <div className="container mx-auto flex flex-col justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
                    <div><p className="font-mono text-xs text-neutral-400">BUILD SOMETHING USEFUL</p><h2 className="mt-3 text-3xl font-semibold">Planning a similar product?</h2></div>
                    <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white px-6 py-3 font-medium text-neutral-950">Discuss your project <ArrowUpRight size={18} /></Link>
                </div>
            </section>
        </>
    );
}
