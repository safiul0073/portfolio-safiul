"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import SectionHeader from "@/components/layout/SectionHeader";
import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";

const serviceAreas = [
    "Full stack web applications",
    "Admin dashboards and business systems",
    "E-commerce, booking, ERP, and lead platforms",
    "REST APIs and third-party integrations",
];

const inputClass =
    "w-full rounded-md bg-surface-muted px-4 py-3 text-fg ring-1 ring-line-strong/60 transition-[background-color,box-shadow] duration-base ease-out " +
    "placeholder:text-fg-faint hover:ring-line-strong focus:bg-surface focus:ring-2 focus:ring-fg/50";

const Contact = ({ preview = false, showHeader = true }: { preview?: boolean; showHeader?: boolean }) => {
    const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
    const [website, setWebsite] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormState((current) => ({ ...current, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitting(true);
        setError("");
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formState, website }),
            });
            const result = (await response.json().catch(() => null)) as { message?: string } | null;

            if (!response.ok) {
                throw new Error(result?.message || "The message could not be delivered.");
            }

            setSubmitted(true);
            setFormState({ name: "", email: "", subject: "", message: "" });
            setWebsite("");
        } catch (submitError) {
            setError(
                submitError instanceof Error
                    ? submitError.message
                    : "Something went wrong. Please try again later.",
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    if (preview) {
        return (
            <Section id="contact" band="inverse" divider="top">
                <Container>
                    <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
                        <div>
                            <Eyebrow>06 / Contact</Eyebrow>
                            <h2 className="type-h2 mt-5 max-w-4xl">
                                Have a role, product, or technical challenge to discuss?
                            </h2>
                            <p className="type-lead mt-5 max-w-2xl">
                                I&apos;m open to full-time roles, freelance work, and focused technical collaboration.
                            </p>
                        </div>
                        <Button asChild size="lg">
                            <Link href="/contact">
                                Start a conversation <ArrowUpRight size={18} />
                            </Link>
                        </Button>
                    </div>
                </Container>
            </Section>
        );
    }

    return (
        <Section id="contact">
            <Container>
                {showHeader && (
                    <SectionHeader
                        index="06 / CONTACT"
                        title="Start a conversation"
                        description="Share the role, project scope, or technical challenge, and I will respond with availability and useful next steps."
                    />
                )}
                <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
                    <div>
                        <div data-reveal-group className="divide-y divide-line/60 border-y border-line/60">
                            <a
                                data-reveal
                                href={`mailto:${personalInfo.email}`}
                                className="flex min-w-0 items-start gap-4 py-5 transition-colors duration-base ease-out hover:text-fg"
                            >
                                <Mail size={20} className="mt-0.5 shrink-0 text-fg-subtle" />
                                <div className="min-w-0">
                                    <p className="text-sm font-semibold text-fg">Email</p>
                                    <p className="type-body-sm mt-1 break-all">{personalInfo.email}</p>
                                </div>
                            </a>
                            <div data-reveal className="flex items-start gap-4 py-5">
                                <MapPin size={20} className="mt-0.5 shrink-0 text-fg-subtle" />
                                <div>
                                    <p className="text-sm font-semibold text-fg">Location</p>
                                    <p className="type-body-sm mt-1">{personalInfo.location}</p>
                                </div>
                            </div>
                            <div data-reveal className="flex items-start gap-4 py-5">
                                <Phone size={20} className="mt-0.5 shrink-0 text-fg-subtle" />
                                <div>
                                    <p className="text-sm font-semibold text-fg">Phone</p>
                                    <p className="type-body-sm mt-1">Available upon request</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 rounded-lg bg-surface-muted p-6 ring-1 ring-line/50">
                            <h3 className="type-card-title">Areas I work with</h3>
                            <ul className="mt-4 space-y-3">
                                {serviceAreas.map((area) => (
                                    <li key={area} className="type-body-sm flex gap-3">
                                        <span className="mt-2 h-1 w-1 shrink-0 bg-fg-subtle" />
                                        {area}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div>
                        {submitted ? (
                            <div className="rounded-lg bg-surface-muted p-8 text-center ring-1 ring-line/50">
                                <Send size={28} className="mx-auto text-fg-subtle" />
                                <h3 className="type-h3 mt-5">Message sent</h3>
                                <p className="type-body mt-3">
                                    Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                                </p>
                                <Button type="button" onClick={() => setSubmitted(false)} className="mt-6">
                                    Send another message
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="relative">
                                {/* Honeypot. `relative` on the form keeps this positioned against
                                    the form rather than an arbitrary ancestor. */}
                                <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                                    <label>
                                        Website
                                        <input
                                            name="website"
                                            value={website}
                                            onChange={(event) => setWebsite(event.target.value)}
                                            tabIndex={-1}
                                            autoComplete="off"
                                        />
                                    </label>
                                </div>

                                <div className="mb-6 flex items-end justify-between gap-4">
                                    <div>
                                        <p className="type-eyebrow">Project inquiry</p>
                                        <h3 className="type-h3 mt-2">Tell me what you&apos;re building</h3>
                                    </div>
                                    <span className="type-body-xs hidden shrink-0 text-fg-faint sm:block">
                                        All fields are required
                                    </span>
                                </div>

                                <div className="space-y-5">
                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <label className="block text-sm font-medium text-fg">
                                            Name
                                            <input
                                                required
                                                minLength={2}
                                                maxLength={80}
                                                autoComplete="name"
                                                name="name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                className={`${inputClass} mt-2`}
                                                placeholder="Your name"
                                            />
                                        </label>
                                        <label className="block text-sm font-medium text-fg">
                                            Email
                                            <input
                                                required
                                                maxLength={254}
                                                autoComplete="email"
                                                type="email"
                                                name="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                className={`${inputClass} mt-2`}
                                                placeholder="you@example.com"
                                            />
                                        </label>
                                    </div>
                                    <label className="block text-sm font-medium text-fg">
                                        Subject
                                        <input
                                            required
                                            minLength={3}
                                            maxLength={120}
                                            name="subject"
                                            value={formState.subject}
                                            onChange={handleChange}
                                            className={`${inputClass} mt-2`}
                                            placeholder="Project inquiry"
                                        />
                                    </label>
                                    <label className="block text-sm font-medium text-fg">
                                        Message
                                        <textarea
                                            required
                                            minLength={20}
                                            maxLength={5000}
                                            name="message"
                                            rows={6}
                                            value={formState.message}
                                            onChange={handleChange}
                                            className={`${inputClass} mt-2 resize-none`}
                                            placeholder="Tell me about the project, timeline, and what you need help with..."
                                        />
                                    </label>
                                    {error && (
                                        <div
                                            role="alert"
                                            aria-live="polite"
                                            className="rounded-md bg-surface-muted p-3 text-sm text-fg ring-1 ring-line-strong/60"
                                        >
                                            {error}
                                        </div>
                                    )}
                                    <Button type="submit" size="lg" block disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 size={19} className="animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={19} />
                                                Send message
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Contact;
