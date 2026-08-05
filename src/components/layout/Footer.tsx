import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { Container } from "@/components/ui/container";

const footerLinkClass =
    "inline-flex items-center gap-1 text-sm text-fg-muted transition-colors duration-base ease-out hover:text-fg";

const Footer = () => (
    <footer className="border-t border-line/60 bg-surface">
        <Container className="grid gap-8 py-12 md:grid-cols-[1fr_auto] md:items-end">
            <div>
                <p className="type-label">Designed and developed by</p>
                <p className="type-card-title mt-3">{personalInfo.name}</p>
                <p className="type-body-sm mt-3 max-w-xl">
                    Senior full stack developer building maintainable web products, APIs, and business platforms.
                </p>
                <p className="type-body-xs mt-5 text-fg-faint">
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
                        className={footerLinkClass}
                    >
                        {link.name}
                        <ArrowUpRight size={14} />
                    </a>
                ))}
                <Link href="/tools" className={footerLinkClass}>
                    Tools
                </Link>
                <Link href="/contact" className="text-sm font-medium text-fg underline-offset-4 transition-colors duration-base ease-out hover:underline">
                    Contact
                </Link>
            </div>
        </Container>
    </footer>
);

export default Footer;
