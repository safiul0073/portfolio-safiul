import Link from "next/link";
import { ArrowUpRight, Calendar, Download, Mail, MapPin } from "lucide-react";
import SectionHeader from "@/components/layout/SectionHeader";
import { personalInfo } from "@/data/portfolio";

const strengths = [
    { label: "Backend Architecture", description: "APIs, service boundaries, authentication, and scalable application workflows." },
    { label: "Full Stack Delivery", description: "End-to-end product development across Laravel, Next.js, React, and Vue." },
    { label: "Data & Reporting", description: "Relational data modeling, query optimization, dashboards, and operational reporting." },
    { label: "Deployment & CI/CD", description: "Docker-based environments, automated delivery, and production operations." },
];

const About = ({ preview = false, showHeader = true }: { preview?: boolean; showHeader?: boolean }) => (
    <section data-gsap-section id="about" className="bg-white py-20 dark:bg-neutral-950 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {showHeader && (
                <SectionHeader
                    index="01 / PROFILE"
                    title={preview ? "Engineering with ownership" : "Professional journey"}
                    description="A practical look at how I build, lead, and ship full stack web products."
                />
            )}
            <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                    <p className="text-xl leading-9 text-neutral-700 dark:text-neutral-300">
                        I&apos;m a full stack developer with a backend-first mindset and 4+ years of experience delivering production applications for clients and product teams.
                    </p>
                    <p className="mt-5 leading-8 text-neutral-600 dark:text-neutral-400">
                        My work spans property platforms, ERP systems, e-commerce, booking products, lead management tools, commercial marketplaces, and custom business dashboards.
                    </p>
                    {!preview && (
                        <p className="mt-5 leading-8 text-neutral-600 dark:text-neutral-400">
                            I specialize in Laravel, Next.js, React, Vue, APIs, database design, and deployment workflows. I care about clean architecture, maintainable code, clear communication, and systems that remain dependable after launch.
                        </p>
                    )}
                    <div data-gsap-stagger className="mt-8 grid gap-3 text-sm text-neutral-600 sm:grid-cols-2 dark:text-neutral-400">
                        <a data-gsap-item href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 border-t border-neutral-200 py-4 hover:text-neutral-950 dark:border-neutral-800 dark:hover:text-white">
                            <Mail size={18} /> {personalInfo.email}
                        </a>
                        <div data-gsap-item className="flex items-center gap-3 border-t border-neutral-200 py-4 dark:border-neutral-800">
                            <MapPin size={18} /> {personalInfo.location}
                        </div>
                        <div data-gsap-item className="flex items-center gap-3 border-t border-neutral-200 py-4 dark:border-neutral-800">
                            <Calendar size={18} /> Available for new projects
                        </div>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                        {preview ? (
                            <Link href="/about" className="inline-flex items-center gap-2 bg-neutral-950 px-5 py-3 text-sm font-medium text-white dark:bg-white dark:text-neutral-950">
                                Read full profile <ArrowUpRight size={17} />
                            </Link>
                        ) : (
                            <a href="/safiul_cv.pdf" className="inline-flex items-center gap-2 bg-neutral-950 px-5 py-3 text-sm font-medium text-white dark:bg-white dark:text-neutral-950">
                                Download resume <Download size={17} />
                            </a>
                        )}
                    </div>
                </div>
                <div className="border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900 sm:p-8">
                    <p className="font-mono text-xs uppercase text-neutral-500">Delivery strengths</p>
                    <div data-gsap-stagger className="mt-7 space-y-7">
                        {strengths.map((strength) => (
                            <div data-gsap-item key={strength.label}>
                                <p className="font-medium text-neutral-800 dark:text-neutral-200">{strength.label}</p>
                                <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{strength.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About;
