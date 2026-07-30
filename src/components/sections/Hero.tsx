import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import { experiences, personalInfo, projects } from "@/data/portfolio";
import profileImage from "@/profile.png";
import HeroBackground from "@/components/sections/HeroBackground";

const Hero = () => {
    const metrics = [
        { value: "4+", label: "Years of experience" },
        { value: String(projects.length), label: "Projects documented" },
        { value: "12", label: "Team members led" },
    ];

    return (
        <section id="hero" className="relative isolate overflow-hidden border-b border-neutral-200 bg-white pt-20 dark:border-neutral-800 dark:bg-neutral-950 lg:pt-24">
            <HeroBackground />
            <div data-gsap-page-header className="container relative z-10 mx-auto grid items-center gap-10 px-4 pb-12 sm:px-6 lg:min-h-[calc(92vh-6rem)] lg:grid-cols-[minmax(0,1.35fr)_minmax(240px,0.65fr)] lg:gap-20 lg:px-8 lg:pb-10">
                <div className="max-w-4xl">
                    <div className="flex items-center gap-4">
                        <div data-hero-avatar className="group relative h-20 w-20 shrink-0 rounded-full border border-neutral-300 bg-neutral-100 p-1 shadow-lg shadow-neutral-950/10 dark:border-neutral-700 dark:bg-neutral-900 lg:hidden">
                            <div className="relative h-full w-full overflow-hidden rounded-full">
                                <Image src={profileImage} alt={`${personalInfo.name} profile photo`} priority fill sizes="80px" className="object-cover transition duration-700 ease-out" />
                            </div>
                        </div>
                        <div className="inline-flex items-center gap-2 border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300 sm:text-sm">
                            <span className="h-2 w-2 bg-neutral-950 dark:bg-white" />
                            Available for selected opportunities
                        </div>
                    </div>
                    <p className="mt-6 font-mono text-xs uppercase text-neutral-500 sm:text-sm dark:text-neutral-400">{personalInfo.title}</p>
                    <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] text-neutral-950 sm:text-6xl 2xl:text-7xl dark:text-white">
                        Md Safiullah builds dependable digital products.
                    </h1>
                    <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8 dark:text-neutral-300">{personalInfo.bio}</p>

                    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-xs text-neutral-500 sm:text-sm dark:text-neutral-400">
                        <span className="inline-flex items-center gap-2"><MapPin size={16} />{personalInfo.location}</span>
                        <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-neutral-950 dark:hover:text-white">
                            <Mail size={16} />{personalInfo.email}
                        </a>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                        <Link href="/projects" className="inline-flex items-center gap-2 bg-neutral-950 px-6 py-3 font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200">
                            Explore projects <ArrowUpRight size={18} />
                        </Link>
                        <a href="/safiul_cv.pdf" className="inline-flex items-center gap-2 border border-neutral-300 bg-white px-6 py-3 font-medium text-neutral-900 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-950 dark:text-white dark:hover:bg-neutral-900">
                            Resume <Download size={18} />
                        </a>
                    </div>

                    <div data-gsap-stagger className="mt-8 grid max-w-2xl grid-cols-3 border-y border-neutral-200 sm:mt-10 dark:border-neutral-800">
                        {metrics.map((metric) => (
                            <div data-gsap-item key={metric.label} className="border-r border-neutral-200 px-3 py-4 first:pl-0 last:border-0 dark:border-neutral-800">
                                <p className="text-2xl font-semibold text-neutral-950 sm:text-3xl dark:text-white">{metric.value}</p>
                                <p className="mt-1 text-xs leading-5 text-neutral-500 sm:text-sm dark:text-neutral-400">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-self-end">
                    <div data-hero-avatar className="group relative h-60 w-60 rounded-full">
                        <div className="absolute -inset-5 rounded-full border border-neutral-300/80 dark:border-neutral-700/80" />
                        <div className="absolute -inset-10 rounded-full border border-neutral-200/70 dark:border-neutral-800/70" />
                        <div className="relative h-full w-full overflow-hidden rounded-full border border-neutral-300 bg-neutral-100 p-1.5 shadow-2xl shadow-neutral-950/15 dark:border-neutral-700 dark:bg-neutral-900">
                            <div className="relative h-full w-full overflow-hidden rounded-full">
                                <Image
                                    src={profileImage}
                                    alt={`${personalInfo.name} profile photo`}
                                    priority
                                    fill
                                    sizes="240px"
                                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <p className="font-semibold text-neutral-950 dark:text-white">{personalInfo.name}</p>
                        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{experiences[0].position}</p>
                        <span className="mt-3 block font-mono text-[11px] text-neutral-400">DHAKA / BD</span>
                    </div>
                </div>
            </div>
            <Link href="/about" aria-label="Continue to about page" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-neutral-400 transition-colors hover:text-neutral-950 md:block dark:hover:text-white">
                <ArrowDown size={20} />
            </Link>
        </section>
    );
};

export default Hero;
