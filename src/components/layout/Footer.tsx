import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolio";

const Footer = () => (
    <footer className="border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
        <div className="container mx-auto grid gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto] md:items-end lg:px-8">
            <div>
                <p className="text-lg font-semibold text-neutral-950 dark:text-white">{personalInfo.name}</p>
                <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                    Senior full stack developer building maintainable web products, APIs, and business platforms.
                </p>
                <p className="mt-5 text-xs text-neutral-400 dark:text-neutral-500">
                    © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js and Tailwind CSS.
                </p>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-3">
                {socialLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-neutral-600 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                    >
                        {link.name}
                        <ArrowUpRight size={14} />
                    </a>
                ))}
                <Link href="/contact" className="text-sm font-medium text-neutral-950 dark:text-white">
                    Contact
                </Link>
            </div>
        </div>
    </footer>
);

export default Footer;
