import Link from "next/link";
import { ArrowUpRight, Briefcase, GraduationCap } from "lucide-react";
import SectionHeader from "@/components/layout/SectionHeader";
import { education, experiences } from "@/data/portfolio";

const Experience = ({ preview = false, showHeader = true }: { preview?: boolean; showHeader?: boolean }) => {
    const visibleExperiences = preview ? experiences.slice(0, 2) : experiences;

    return (
        <section data-gsap-section id="experience" className="border-y border-neutral-200 bg-neutral-50 py-16 dark:border-neutral-800 dark:bg-neutral-900 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {showHeader && <SectionHeader index="03 / EXPERIENCE" title="Work shaped by real delivery" description="Roles, responsibilities, and education that shaped my backend-focused full stack practice." />}
                <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
                    <div>
                        <div className="mb-6 flex items-center gap-3"><Briefcase size={20} /><h3 className="text-xl font-semibold">Work experience</h3></div>
                        <div data-gsap-stagger className="border-l border-neutral-300 pl-6 sm:pl-8 dark:border-neutral-700">
                            {visibleExperiences.map((experience) => (
                                <article data-gsap-item key={experience.id} className="relative border-b border-neutral-200 py-7 first:pt-0 last:border-0 dark:border-neutral-800">
                                    <span className="absolute -left-[29px] top-2 h-2 w-2 bg-neutral-950 sm:-left-[37px] dark:bg-white" />
                                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                                        <div>
                                            <h4 className="text-xl font-semibold text-neutral-950 dark:text-white">{experience.position}</h4>
                                            <p className="mt-1 text-neutral-600 dark:text-neutral-400">{experience.company}</p>
                                        </div>
                                        <p className="font-mono text-xs text-neutral-500">{experience.duration}</p>
                                    </div>
                                    {!preview && (
                                        <ul className="mt-5 space-y-3">
                                            {experience.description.map((item) => (
                                                <li key={item} className="flex gap-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                                                    <span className="mt-2 h-1 w-1 shrink-0 bg-neutral-500" />{item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {experience.technologies.map((technology) => (
                                            <span key={technology} className="border border-neutral-200 px-2.5 py-1 text-xs text-neutral-600 dark:border-neutral-700 dark:text-neutral-400">{technology}</span>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                        {preview && (
                            <Link href="/experience" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 dark:text-white">
                                View complete experience <ArrowUpRight size={16} />
                            </Link>
                        )}
                    </div>
                    <div>
                        <div className="mb-6 flex items-center gap-3"><GraduationCap size={20} /><h3 className="text-xl font-semibold">Education</h3></div>
                        {education.map((item) => (
                            <article key={item.id} className="border-t border-neutral-300 py-6 dark:border-neutral-700">
                                <h4 className="font-semibold text-neutral-950 dark:text-white">{item.degree}</h4>
                                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{item.institution}</p>
                                <p className="mt-3 font-mono text-xs text-neutral-500">{item.duration}</p>
                                {!preview && item.description && <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{item.description}</p>}
                            </article>
                        ))}
                        {!preview && (
                            <div className="mt-10 border-t border-neutral-300 bg-white/70 p-6 dark:border-neutral-700 dark:bg-neutral-950/60">
                                <p className="font-mono text-xs uppercase text-neutral-500">Additional strengths</p>
                                <ul className="mt-5 space-y-4 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                                    <li><strong className="text-neutral-900 dark:text-white">Problem solving:</strong> Analytical debugging and architecture decisions for complex workflows.</li>
                                    <li><strong className="text-neutral-900 dark:text-white">Collaboration:</strong> Effective work with designers, developers, managers, and clients.</li>
                                    <li><strong className="text-neutral-900 dark:text-white">Project leadership:</strong> Team guidance, code review, mentoring, and production delivery.</li>
                                    <li><strong className="text-neutral-900 dark:text-white">Communication:</strong> Clear technical and project communication across teams.</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
