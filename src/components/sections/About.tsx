import Link from "next/link";
import { ArrowUpRight, Calendar, Download, Mail, MapPin } from "lucide-react";
import SectionHeader from "@/components/layout/SectionHeader";
import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const strengths = [
    { label: "Backend Architecture", description: "APIs, service boundaries, authentication, and scalable application workflows." },
    { label: "Full Stack Delivery", description: "End-to-end product development across Laravel, Next.js, React, and Vue." },
    { label: "Data & Reporting", description: "Relational data modeling, query optimization, dashboards, and operational reporting." },
    { label: "Deployment & CI/CD", description: "Docker-based environments, automated delivery, and production operations." },
];

const About = ({ preview = false, showHeader = true }: { preview?: boolean; showHeader?: boolean }) => (
    <Section id="about">
        <Container>
            {showHeader && (
                <SectionHeader
                    index="01 / PROFILE"
                    title={preview ? "Engineering with ownership" : "Professional journey"}
                    description="A practical look at how I build, lead, and ship full stack web products."
                />
            )}
            <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                <div>
                    <p className="type-lead max-w-2xl text-fg">
                        I&apos;m a full stack developer with a backend-first mindset and 4+ years of experience
                        delivering production applications for clients and product teams.
                    </p>
                    <p className="type-body mt-5">
                        My work spans property platforms, ERP systems, e-commerce, booking products, lead management
                        tools, commercial marketplaces, and custom business dashboards.
                    </p>
                    {!preview && (
                        <p className="type-body mt-5">
                            I specialize in Laravel, Next.js, React, Vue, APIs, database design, and deployment
                            workflows. I care about clean architecture, maintainable code, clear communication, and
                            systems that remain dependable after launch.
                        </p>
                    )}

                    <div data-reveal-group className="type-body-sm mt-8 grid sm:grid-cols-2">
                        <a
                            data-reveal
                            href={`mailto:${personalInfo.email}`}
                            className="flex min-w-0 items-center gap-3 border-y border-line/60 py-4 transition-colors duration-base ease-out hover:text-fg sm:pr-5"
                        >
                            <Mail size={18} className="shrink-0" />
                            <span className="break-all">{personalInfo.email}</span>
                        </a>
                        <div data-reveal className="flex items-center gap-3 border-b border-line/60 py-4 sm:border-y sm:pl-5">
                            <MapPin size={18} className="shrink-0" /> {personalInfo.location}
                        </div>
                        <div data-reveal className="flex items-center gap-3 border-b border-line/60 py-4">
                            <Calendar size={18} className="shrink-0" /> Available for new projects
                        </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        {preview ? (
                            <Button asChild>
                                <Link href="/about">
                                    Read full profile <ArrowUpRight size={17} />
                                </Link>
                            </Button>
                        ) : (
                            <Button asChild>
                                <a href="/safiul_cv.pdf">
                                    Download resume <Download size={17} />
                                </a>
                            </Button>
                        )}
                    </div>
                </div>

                <div className="rounded-lg bg-surface-muted p-6 ring-1 ring-line/50 sm:p-8">
                    <p className="type-eyebrow">Delivery strengths</p>
                    <div data-reveal-group className="mt-6">
                        {strengths.map((strength, index) => (
                            <div
                                data-reveal
                                key={strength.label}
                                className="grid grid-cols-[32px_1fr] gap-3 border-t border-line/60 py-5 first:border-0 first:pt-0"
                            >
                                <span className="type-label pt-1">{String(index + 1).padStart(2, "0")}</span>
                                <div>
                                    <p className="font-medium text-fg">{strength.label}</p>
                                    <p className="type-body-sm mt-2">{strength.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    </Section>
);

export default About;
