import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { projects } from "@/data/portfolio";
import PageHeader from "@/components/layout/PageHeader";
import ProjectLinks from "@/components/projects/ProjectLinks";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";

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
            <PageHeader
                index={`PROJECT ${String(project.id).padStart(2, "0")}`}
                eyebrow="Case study"
                title={project.title}
                description={project.description}
                breadcrumb={
                    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-fg-subtle">
                        <Link href="/" className="transition-colors duration-base ease-out hover:text-fg">
                            Home
                        </Link>
                        <span aria-hidden>/</span>
                        <Link href="/projects" className="transition-colors duration-base ease-out hover:text-fg">
                            Projects
                        </Link>
                        <span aria-hidden>/</span>
                        <span className="text-fg">{project.title}</span>
                    </nav>
                }
                meta={project.featured ? <Chip>Featured</Chip> : undefined}
                actions={<ProjectLinks project={project} />}
            />

            <Container className="py-8 md:py-10">
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-surface-sunken shadow-lg md:aspect-[16/8]">
                    <Image src={project.image} alt={project.title} fill priority sizes="100vw" className="object-cover" />
                </div>
            </Container>

            <Section divider="y">
                <Container className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
                    <aside>
                        <Eyebrow>Technology stack</Eyebrow>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {project.technologies.map((technology) => (
                                <Chip key={technology}>{technology}</Chip>
                            ))}
                        </div>
                    </aside>
                    <div>
                        <Eyebrow>Project overview</Eyebrow>
                        <p className="type-lead mt-5">{project.longDescription || project.description}</p>
                        {project.highlights && (
                            <div className="mt-10">
                                <h2 className="type-h3">Key highlights</h2>
                                <ul data-reveal-group className="mt-6 grid gap-4 sm:grid-cols-2">
                                    {project.highlights.map((highlight) => (
                                        <li
                                            data-reveal
                                            key={highlight}
                                            className="type-body-sm flex gap-3 border-t border-line/60 pt-4"
                                        >
                                            <Check size={17} className="mt-1 shrink-0" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </Container>
            </Section>

            {relatedProjects.length > 0 && (
                <Section band="muted">
                    <Container>
                        <div className="flex items-end justify-between gap-6 pb-2">
                            <div>
                                <Eyebrow>Related work</Eyebrow>
                                <h2 className="type-h2 mt-3">Similar projects</h2>
                            </div>
                            <Button asChild variant="link" className="hidden shrink-0 text-sm font-semibold sm:inline-flex">
                                <Link href="/projects">
                                    All projects <ArrowUpRight size={16} />
                                </Link>
                            </Button>
                        </div>
                        <div data-reveal-group className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {relatedProjects.map((related) => (
                                <Card data-reveal as="article" interactive padding="sm" key={related.id}>
                                    <p className="type-label">Project {String(related.id).padStart(2, "0")}</p>
                                    <h3 className="type-card-title mt-3">
                                        <Link
                                            href={`/projects/${related.slug}`}
                                            className="decoration-1 underline-offset-4 hover:underline"
                                        >
                                            {related.title}
                                        </Link>
                                    </h3>
                                    <p className="type-body-sm mt-3">{related.description}</p>
                                </Card>
                            ))}
                        </div>
                    </Container>
                </Section>
            )}

            <nav aria-label="Project pagination" className="border-y border-line/60 bg-surface">
                <Container className="grid sm:grid-cols-2">
                    <div className="border-b border-line/60 py-6 sm:border-b-0 sm:border-r sm:pr-6">
                        {previousProject ? (
                            <Link href={`/projects/${previousProject.slug}`} className="group block">
                                <span className="type-label inline-flex items-center gap-2">
                                    <ArrowLeft size={14} />
                                    Previous project
                                </span>
                                <p className="type-card-title mt-2 group-hover:underline">{previousProject.title}</p>
                            </Link>
                        ) : (
                            <span className="type-body-sm text-fg-faint">First project</span>
                        )}
                    </div>
                    <div className="py-6 sm:pl-6 sm:text-right">
                        {nextProject ? (
                            <Link href={`/projects/${nextProject.slug}`} className="group block">
                                <span className="type-label inline-flex items-center gap-2">
                                    Next project
                                    <ArrowRight size={14} />
                                </span>
                                <p className="type-card-title mt-2 group-hover:underline">{nextProject.title}</p>
                            </Link>
                        ) : (
                            <span className="type-body-sm text-fg-faint">Last project</span>
                        )}
                    </div>
                </Container>
            </nav>

            <Section band="inverse">
                <Container className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
                    <div>
                        <Eyebrow>Build something useful</Eyebrow>
                        <h2 className="type-h2 mt-3">Planning a similar product?</h2>
                    </div>
                    <Button asChild size="lg">
                        <Link href="/contact">
                            Discuss your project <ArrowUpRight size={18} />
                        </Link>
                    </Button>
                </Container>
            </Section>
        </>
    );
}
