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
            <section data-gsap-section id="skills" className="bg-white py-16 dark:bg-neutral-950 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {showHeader && (
                        <SectionHeader
                            index="04 / CAPABILITIES"
                            title="A production-focused toolkit"
                            description="Backend-first engineering supported by modern frontend, data, infrastructure, mobile, and AI capabilities."
                        />
                    )}
                    <div data-gsap-stagger className="grid gap-px border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4 dark:border-neutral-800 dark:bg-neutral-800">
                        {featuredSkills.map((skill, index) => (
                            <div data-gsap-item key={skill.name} className="flex min-h-28 flex-col justify-between bg-white p-5 transition-colors hover:bg-neutral-50 dark:bg-neutral-950 dark:hover:bg-neutral-900">
                                <div className="flex items-center justify-between gap-3">
                                    <CategoryIcon category={skill.category} />
                                    <span className="font-mono text-[10px] text-neutral-400">{String(index + 1).padStart(2, "0")}</span>
                                </div>
                                <div className="mt-6">
                                    <p className="font-semibold text-neutral-950 dark:text-white">{skill.name}</p>
                                    <p className="mt-1 text-xs text-neutral-500">{categoryLabel(skill.category)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-6 dark:border-neutral-800">
                        <p className="inline-flex items-center gap-2 text-sm text-neutral-500">
                            <Layers3 size={16} />
                            {capabilityGroups.length} capability areas and {skills.length} documented skills
                        </p>
                        <Link href="/skills" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 dark:text-white">
                            View complete skill set <ArrowUpRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section data-gsap-section id="skills" className="bg-white py-16 dark:bg-neutral-950 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {showHeader && (
                    <SectionHeader
                        index="04 / CAPABILITIES"
                        title="Skills and technologies"
                        description="The engineering capabilities I use to design, build, optimize, and operate production applications."
                    />
                )}

                <div className="grid border-y border-neutral-200 dark:border-neutral-800 lg:grid-cols-[0.72fr_1.28fr]">
                    <div className="py-8 lg:border-r lg:border-neutral-200 lg:pr-12 dark:lg:border-neutral-800">
                        <p className="font-mono text-[11px] uppercase text-neutral-500">Core expertise</p>
                        <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight text-neutral-950 dark:text-white">
                            Backend depth with complete product delivery.
                        </h2>
                        <p className="mt-4 max-w-md text-sm leading-7 text-neutral-600 dark:text-neutral-400">
                            My strongest work sits at the intersection of application architecture, reliable APIs, usable interfaces, and production operations.
                        </p>
                        <div className="mt-8 flex gap-8">
                            <div>
                                <p className="text-3xl font-semibold text-neutral-950 dark:text-white">{capabilityGroups.length}</p>
                                <p className="mt-1 text-xs text-neutral-500">Capability areas</p>
                            </div>
                            <div>
                                <p className="text-3xl font-semibold text-neutral-950 dark:text-white">{skills.length}</p>
                                <p className="mt-1 text-xs text-neutral-500">Skills documented</p>
                            </div>
                        </div>
                    </div>
                    <div data-gsap-stagger className="grid gap-px border-t border-neutral-200 bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-800 sm:grid-cols-2 lg:border-t-0">
                        {coreExpertise.map((item, index) => (
                            <div data-gsap-item key={item.title} className="bg-neutral-50 p-6 dark:bg-neutral-900 sm:p-7">
                                <span className="font-mono text-[10px] text-neutral-400">{String(index + 1).padStart(2, "0")}</span>
                                <h3 className="mt-5 font-semibold text-neutral-950 dark:text-white">{item.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <nav aria-label="Skill categories" className="mt-10 flex flex-wrap gap-x-5 gap-y-3 border-b border-neutral-200 pb-5 dark:border-neutral-800">
                    {capabilityGroups.map((group, index) => (
                        <a key={group.id} href={`#skills-${group.id}`} className="inline-flex items-center gap-2 text-xs text-neutral-500 transition-colors hover:text-neutral-950 dark:hover:text-white">
                            <span className="font-mono text-[10px] text-neutral-400">{String(index + 1).padStart(2, "0")}</span>
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
                                data-gsap-stagger
                                className="scroll-mt-24 border-b border-neutral-200 py-9 dark:border-neutral-800 lg:grid lg:grid-cols-[260px_1fr] lg:gap-12"
                            >
                                <div data-gsap-item>
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-10 w-10 items-center justify-center border border-neutral-200 text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
                                            <CategoryIcon category={group.id} />
                                        </span>
                                        <span className="font-mono text-[10px] text-neutral-400">{String(index + 1).padStart(2, "0")}</span>
                                    </div>
                                    <h2 className="mt-5 text-xl font-semibold text-neutral-950 dark:text-white">{group.label}</h2>
                                    <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{group.description}</p>
                                </div>
                                <div className="mt-6 flex content-start flex-wrap gap-2 lg:mt-0">
                                    {groupSkills.map((skill) => (
                                        <span
                                            data-gsap-item
                                            key={skill.name}
                                            className="inline-flex min-h-11 items-center border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-800 transition-colors hover:border-neutral-400 hover:bg-white dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-950"
                                        >
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        );
                    })}
                </div>

                <div className="mt-10 flex flex-col justify-between gap-6 border-t border-neutral-300 pt-8 dark:border-neutral-700 sm:flex-row sm:items-center">
                    <div>
                        <p className="font-mono text-[10px] uppercase text-neutral-500">Current professional profile</p>
                        <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                            These capabilities are aligned with my current CV and applied across production platforms, client systems, and commercial products.
                        </p>
                    </div>
                    <a href="/safiul_cv.pdf" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-neutral-950 dark:text-white">
                        View resume <ArrowUpRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Skills;
