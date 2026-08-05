import Link from "next/link";
import {
    ArrowUpRight,
    Braces,
    Code2,
    Database,
    GitBranch,
    Layers3,
    Network,
    Radio,
    Server,
    Smartphone,
    Sparkles,
} from "lucide-react";
import SectionHeader from "@/components/layout/SectionHeader";
import { skills } from "@/data/portfolio";
import type { Skill } from "@/types";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const capabilityGroups: Array<{
    id: Skill["category"];
    label: string;
    description: string;
}> = [
    { id: "language", label: "Languages", description: "Programming and query languages used across backend, frontend, data, and automation work." },
    { id: "backend", label: "Backend Development", description: "API design, authentication, application services, queues, and server-side frameworks." },
    { id: "frontend", label: "Frontend Development", description: "Responsive interfaces and production web applications across modern JavaScript frameworks." },
    { id: "architecture", label: "Architecture & Integration", description: "Maintainable system design, access control, and integration with external business services." },
    { id: "database", label: "Databases & Caching", description: "Relational data modeling, ORM workflows, caching, and high-volume query optimization." },
    { id: "realtime", label: "Real-Time & Messaging", description: "Live application events, private communication, background delivery, and push notifications." },
    { id: "mobile", label: "Mobile Development", description: "Backend integration and cross-platform delivery for rider, driver, marketplace, and product apps." },
    { id: "devops", label: "DevOps & Tools", description: "Containerized delivery, automated pipelines, cloud infrastructure, and production operations." },
    { id: "ai", label: "AI & Automation", description: "Retrieval workflows, vector search, conversational systems, and AI-assisted product automation." },
];

const coreExpertise = [
    {
        title: "Laravel Engineering",
        description: "API-first applications, Sanctum, Eloquent, queues, Horizon, and reusable administration systems.",
    },
    {
        title: "Full Stack Products",
        description: "Next.js, React, Vue, Inertia, and responsive interfaces connected to production backends.",
    },
    {
        title: "Architecture & Performance",
        description: "Clean architecture, SOLID principles, role-based systems, caching, and query optimization.",
    },
    {
        title: "Production Delivery",
        description: "Docker, Nginx, GitHub Actions, CI/CD, cloud platforms, monitoring, and server operations.",
    },
];

const featuredSkillNames = [
    "Laravel",
    "Next.js",
    "React",
    "Vue.js",
    "MySQL",
    "Redis",
    "Docker",
    "FastAPI",
];

const categoryLabel = (category: Skill["category"]) =>
    capabilityGroups.find((group) => group.id === category)?.label || category;

const CategoryIcon = ({ category }: { category: Skill["category"] }) => {
    const className = "h-5 w-5";

    if (category === "language") return <Braces className={className} />;
    if (category === "backend") return <Server className={className} />;
    if (category === "frontend") return <Code2 className={className} />;
    if (category === "architecture") return <Network className={className} />;
    if (category === "database") return <Database className={className} />;
    if (category === "realtime") return <Radio className={className} />;
    if (category === "mobile") return <Smartphone className={className} />;
    if (category === "devops") return <GitBranch className={className} />;
    return <Sparkles className={className} />;
};

const Skills = ({ preview = false, showHeader = true }: { preview?: boolean; showHeader?: boolean }) => {
    const featuredSkills = featuredSkillNames
        .map((name) => skills.find((skill) => skill.name === name))
        .filter((skill): skill is Skill => Boolean(skill));

    if (preview) {
        return (
            <Section id="skills">
                <Container>
                    {showHeader && (
                        <SectionHeader
                            index="04 / CAPABILITIES"
                            title="A production-focused toolkit"
                            description="Backend-first engineering supported by modern frontend, data, infrastructure, mobile, and AI capabilities."
                        />
                    )}
                    <div data-reveal-group className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {featuredSkills.map((skill, index) => (
                            <div
                                data-reveal
                                key={skill.name}
                                className="flex min-h-32 flex-col justify-between rounded-lg bg-surface-muted p-5 transition-shadow duration-base ease-out hover:shadow-md"
                            >
                                <div className="flex items-center justify-between gap-3">
                                    <CategoryIcon category={skill.category} />
                                    <span className="type-label">{String(index + 1).padStart(2, "0")}</span>
                                </div>
                                <div className="mt-6">
                                    <p className="font-semibold text-fg">{skill.name}</p>
                                    <p className="type-body-xs mt-1.5 text-fg-subtle">{categoryLabel(skill.category)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line/60 pt-8">
                        <p className="type-body-sm inline-flex items-center gap-2 text-fg-subtle">
                            <Layers3 size={16} className="shrink-0" />
                            {capabilityGroups.length} capability areas and {skills.length} documented skills
                        </p>
                        <Button asChild variant="link" className="text-sm font-semibold">
                            <Link href="/skills">
                                View complete skill set <ArrowUpRight size={16} />
                            </Link>
                        </Button>
                    </div>
                </Container>
            </Section>
        );
    }

    return (
        <Section id="skills">
            <Container>
                {showHeader && (
                    <SectionHeader
                        index="04 / CAPABILITIES"
                        title="Skills and technologies"
                        description="The engineering capabilities I use to design, build, optimize, and operate production applications."
                    />
                )}

                <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
                    <div className="py-2">
                        <p className="type-eyebrow">Core expertise</p>
                        <h2 className="type-h2 mt-4 max-w-md">Backend depth with complete product delivery.</h2>
                        <p className="type-body-sm mt-4 max-w-md">
                            My strongest work sits at the intersection of application architecture, reliable APIs,
                            usable interfaces, and production operations.
                        </p>
                        <div className="mt-8 flex gap-10">
                            <div>
                                <p className="type-stat">{capabilityGroups.length}</p>
                                <p className="type-body-xs mt-1.5 text-fg-subtle">Capability areas</p>
                            </div>
                            <div>
                                <p className="type-stat">{skills.length}</p>
                                <p className="type-body-xs mt-1.5 text-fg-subtle">Skills documented</p>
                            </div>
                        </div>
                    </div>
                    <div data-reveal-group className="grid gap-4 sm:grid-cols-2 lg:pl-12">
                        {coreExpertise.map((item, index) => (
                            <div data-reveal key={item.title} className="rounded-lg bg-surface-muted p-6 sm:p-7">
                                <span className="type-label">{String(index + 1).padStart(2, "0")}</span>
                                <h3 className="type-card-title mt-5">{item.title}</h3>
                                <p className="type-body-sm mt-2">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <nav aria-label="Skill categories" className="mt-14 flex flex-wrap gap-x-5 gap-y-3 border-b border-line/60 pb-5">
                    {capabilityGroups.map((group, index) => (
                        <a
                            key={group.id}
                            href={`#skills-${group.id}`}
                            className="inline-flex items-center gap-2 text-xs text-fg-subtle transition-colors duration-base ease-out hover:text-fg"
                        >
                            <span className="type-label">{String(index + 1).padStart(2, "0")}</span>
                            {group.label}
                        </a>
                    ))}
                </nav>

                <div>
                    {capabilityGroups.map((group, index) => {
                        const groupSkills = skills.filter((skill) => skill.category === group.id);

                        return (
                            <article
                                id={`skills-${group.id}`}
                                key={group.id}
                                data-reveal-group
                                className="border-b border-line/60 py-10 lg:grid lg:grid-cols-[minmax(200px,260px)_1fr] lg:gap-12"
                            >
                                <div data-reveal>
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-muted text-fg-muted ring-1 ring-line/60">
                                            <CategoryIcon category={group.id} />
                                        </span>
                                        <span className="type-label">{String(index + 1).padStart(2, "0")}</span>
                                    </div>
                                    <h2 className="type-h3 mt-5">{group.label}</h2>
                                    <p className="type-body-sm mt-3">{group.description}</p>
                                </div>
                                <div className="mt-6 flex flex-wrap content-start gap-2 lg:mt-0">
                                    {groupSkills.map((skill) => (
                                        <span
                                            data-reveal
                                            key={skill.name}
                                            className="inline-flex min-h-11 items-center rounded-full bg-surface-muted px-4 py-2 text-sm font-medium text-fg ring-1 ring-line/50"
                                        >
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        );
                    })}
                </div>

                <div className="mt-14 flex flex-col justify-between gap-6 border-t border-line/60 pt-10 sm:flex-row sm:items-center">
                    <div>
                        <p className="type-eyebrow">Current professional profile</p>
                        <p className="type-body-sm mt-3 max-w-2xl">
                            These capabilities are aligned with my current CV and applied across production platforms,
                            client systems, and commercial products.
                        </p>
                    </div>
                    <Button asChild variant="link" className="shrink-0 text-sm font-semibold">
                        <a href="/safiul_cv.pdf">
                            View resume <ArrowUpRight size={16} />
                        </a>
                    </Button>
                </div>
            </Container>
        </Section>
    );
};

export default Skills;
