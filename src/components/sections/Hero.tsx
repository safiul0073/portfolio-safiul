import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import { experiences, personalInfo, projects } from "@/data/portfolio";
import profileImage from "@/profile.png";
import GridBackdrop from "@/components/motion/GridBackdrop";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const Hero = () => {
    const metrics = [
        { value: "4+", label: "Years of experience" },
        { value: String(projects.length), label: "Projects documented" },
        { value: "12", label: "Team members led" },
    ];

    return (
        <section id="hero" className="relative isolate overflow-hidden border-b border-line/60 bg-surface pt-nav">
            <GridBackdrop />
            <Container className="relative z-10 grid items-center gap-10 py-12 sm:py-16 lg:min-h-[calc(100svh-var(--nav-h))] lg:grid-cols-[minmax(0,1.5fr)_minmax(220px,0.5fr)] lg:gap-12 lg:py-20">
                <div className="max-w-4xl">
                    <div className="flex items-center gap-4">
                        <div className="group relative h-20 w-20 shrink-0 rounded-full bg-surface-sunken p-1 shadow-md ring-1 ring-line/70 lg:hidden">
                            <div className="relative h-full w-full overflow-hidden rounded-full">
                                <Image
                                    src={profileImage}
                                    alt={`${personalInfo.name} profile photo`}
                                    priority
                                    fill
                                    sizes="80px"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-surface/85 px-4 py-2 text-xs font-medium text-fg-muted shadow-sm ring-1 ring-line/60 backdrop-blur sm:text-sm">
                            <span className="h-2 w-2 rounded-full bg-fg" />
                            Available for selected opportunities
                        </div>
                    </div>

                    <p className="type-eyebrow mt-7">Hello, I&apos;m {personalInfo.name}</p>
                    <h1 className="type-display mt-4 max-w-4xl">I build reliable web products, end to end.</h1>
                    <p className="type-lead mt-6 max-w-3xl">
                        Senior full stack developer with 4+ years of experience building maintainable products with
                        Laravel, Next.js, React, Vue, and MySQL.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-fg-subtle">
                        <span className="inline-flex items-center gap-2">
                            <MapPin size={16} className="shrink-0" />
                            {personalInfo.location}
                        </span>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="inline-flex min-w-0 items-center gap-2 transition-colors duration-base ease-out hover:text-fg"
                        >
                            <Mail size={16} className="shrink-0" />
                            <span className="break-all">{personalInfo.email}</span>
                        </a>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Button asChild size="lg">
                            <Link href="/projects">
                                Explore projects <ArrowUpRight size={18} />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <a href="/safiul_cv.pdf">
                                Resume <Download size={18} />
                            </a>
                        </Button>
                    </div>

                    <div
                        data-reveal-group
                        className="mt-12 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3"
                    >
                        {metrics.map((metric) => (
                            <div
                                data-reveal
                                key={metric.label}
                                className="rounded-lg bg-surface-muted px-5 py-5"
                            >
                                <p className="type-stat">{metric.value}</p>
                                <p className="type-body-sm mt-1.5 text-fg-subtle">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-self-end">
                    <div className="group relative h-56 w-56 rounded-full xl:h-60 xl:w-60">
                        <div className="absolute -inset-5 rounded-full border border-line-strong/80" />
                        <div className="absolute -inset-10 rounded-full border border-line/70" />
                        <div className="relative h-full w-full overflow-hidden rounded-full bg-surface-sunken p-1.5 shadow-lg ring-1 ring-line/70">
                            <div className="relative h-full w-full overflow-hidden rounded-full">
                                <Image
                                    src={profileImage}
                                    alt={`${personalInfo.name} profile photo`}
                                    priority
                                    fill
                                    sizes="240px"
                                    className="object-cover transition-transform duration-reveal ease-out group-hover:scale-[1.025]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 text-center">
                        <p className="type-card-title">{personalInfo.name}</p>
                        <p className="type-body-sm mt-1.5 text-fg-subtle">{experiences[0].position}</p>
                        <span className="type-label mt-3 block">DHAKA / BD</span>
                    </div>
                </div>
            </Container>
            <Link
                href="/about"
                aria-label="Continue to about page"
                className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-fg-faint transition-colors duration-base ease-out hover:text-fg xl:block"
            >
                <ArrowDown size={20} />
            </Link>
        </section>
    );
};

export default Hero;
