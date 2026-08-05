import Link from "next/link";
import { ArrowUpRight, Briefcase, GraduationCap } from "lucide-react";
import SectionHeader from "@/components/layout/SectionHeader";
import { education, experiences } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const Experience = ({ preview = false, showHeader = true }: { preview?: boolean; showHeader?: boolean }) => {
    const visibleExperiences = preview ? experiences.slice(0, 2) : experiences;

    return (
        <Section id="experience" band="muted" divider="y">
            <Container>
                {showHeader && (
                    <SectionHeader
                        index="03 / EXPERIENCE"
                        title="Work shaped by real delivery"
                        description="Roles, responsibilities, and education that shaped my backend-focused full stack practice."
                    />
                )}
                <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <Briefcase size={20} className="text-fg-subtle" />
                            <h3 className="type-h3">Work experience</h3>
                        </div>
                        <div data-reveal-group className="border-l border-line pl-8 sm:pl-10">
                            {visibleExperiences.map((experience) => (
                                <article
                                    data-reveal
                                    key={experience.id}
                                    className="relative border-b border-line/60 py-7 first:pt-0 last:border-0"
                                >
                                    <span className="absolute -left-[33px] top-2.5 h-2 w-2 rounded-full bg-fg sm:-left-[41px]" />
                                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                                        <div>
                                            <h4 className="type-card-title">{experience.position}</h4>
                                            <p className="type-body-sm mt-1.5">{experience.company}</p>
                                        </div>
                                        <p className="type-label shrink-0 pt-1">{experience.duration}</p>
                                    </div>
                                    {!preview && (
                                        <ul className="mt-5 space-y-3">
                                            {experience.description.map((item) => (
                                                <li key={item} className="type-body-sm flex gap-3">
                                                    <span className="mt-2 h-1 w-1 shrink-0 bg-fg-subtle" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {experience.technologies.map((technology) => (
                                            <Chip key={technology}>{technology}</Chip>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                        {preview && (
                            <Button asChild variant="link" className="mt-8 text-sm font-semibold">
                                <Link href="/experience">
                                    View complete experience <ArrowUpRight size={16} />
                                </Link>
                            </Button>
                        )}
                    </div>

                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <GraduationCap size={20} className="text-fg-subtle" />
                            <h3 className="type-h3">Education</h3>
                        </div>
                        {education.map((item) => (
                            <article key={item.id} className="border-t border-line/60 py-6">
                                <h4 className="type-card-title">{item.degree}</h4>
                                <p className="type-body-sm mt-2">{item.institution}</p>
                                <p className="type-label mt-3">{item.duration}</p>
                                {!preview && item.description && (
                                    <p className="type-body-sm mt-4">{item.description}</p>
                                )}
                            </article>
                        ))}
                        {!preview && (
                            <div className="mt-10 rounded-lg bg-surface p-6 shadow-sm ring-1 ring-line/50">
                                <p className="type-eyebrow">Additional strengths</p>
                                <ul className="type-body-sm mt-5 space-y-4">
                                    <li>
                                        <strong className="text-fg">Problem solving:</strong> Analytical debugging and
                                        architecture decisions for complex workflows.
                                    </li>
                                    <li>
                                        <strong className="text-fg">Collaboration:</strong> Effective work with
                                        designers, developers, managers, and clients.
                                    </li>
                                    <li>
                                        <strong className="text-fg">Project leadership:</strong> Team guidance, code
                                        review, mentoring, and production delivery.
                                    </li>
                                    <li>
                                        <strong className="text-fg">Communication:</strong> Clear technical and project
                                        communication across teams.
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Experience;
