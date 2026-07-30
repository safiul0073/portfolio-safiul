"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import SectionHeader from "@/components/layout/SectionHeader";
import { personalInfo } from "@/data/portfolio";

const serviceAreas = [
    "Full stack web applications",
    "Admin dashboards and business systems",
    "E-commerce, booking, ERP, and lead platforms",
    "REST APIs and third-party integrations",
];

const Contact = ({ preview = false, showHeader = true }: { preview?: boolean; showHeader?: boolean }) => {
    const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
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
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setSubmitted(true);
            setFormState({ name: "", email: "", subject: "", message: "" });
        } catch {
            setError("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (preview) {
        return (
            <section data-gsap-section id="contact" className="border-t border-neutral-200 bg-neutral-950 py-20 text-white dark:border-neutral-800 md:py-28">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
                        <div>
                            <p className="font-mono text-xs uppercase text-neutral-400">05 / CONTACT</p>
                            <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">Have a role, product, or technical challenge to discuss?</h2>
                            <p className="mt-5 max-w-2xl leading-7 text-neutral-400">I&apos;m open to full-time roles, freelance work, and focused technical collaboration.</p>
                        </div>
                        <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white px-6 py-3 font-medium text-neutral-950 hover:bg-neutral-200">
                            Start a conversation <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        );
    }

    const inputClass = "w-full border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-950 dark:border-neutral-700 dark:bg-neutral-950 dark:text-white dark:focus:border-white";

    return (
        <section data-gsap-section id="contact" className="bg-white py-20 dark:bg-neutral-950 md:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {showHeader && <SectionHeader index="05 / CONTACT" title="Start a conversation" description="Share the role, project scope, or technical challenge, and I will respond with availability and useful next steps." />}
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <div data-gsap-stagger className="divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
                            <a data-gsap-item href={`mailto:${personalInfo.email}`} className="flex items-start gap-4 py-5">
                                <Mail size={20} /><div><p className="text-sm font-semibold">Email</p><p className="mt-1 text-sm text-neutral-500">{personalInfo.email}</p></div>
                            </a>
                            <div data-gsap-item className="flex items-start gap-4 py-5">
                                <MapPin size={20} /><div><p className="text-sm font-semibold">Location</p><p className="mt-1 text-sm text-neutral-500">{personalInfo.location}</p></div>
                            </div>
                            <div data-gsap-item className="flex items-start gap-4 py-5">
                                <Phone size={20} /><div><p className="text-sm font-semibold">Phone</p><p className="mt-1 text-sm text-neutral-500">Available upon request</p></div>
                            </div>
                        </div>
                        <div className="mt-8 border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900">
                            <h3 className="font-semibold">Areas I work with</h3>
                            <ul className="mt-4 space-y-3">
                                {serviceAreas.map((area) => <li key={area} className="flex gap-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400"><span className="mt-2 h-1 w-1 shrink-0 bg-neutral-500" />{area}</li>)}
                            </ul>
                        </div>
                    </div>

                    <div>
                        {submitted ? (
                            <div className="border border-neutral-300 bg-neutral-50 p-8 text-center dark:border-neutral-700 dark:bg-neutral-900">
                                <Send size={28} className="mx-auto" />
                                <h3 className="mt-5 text-2xl font-semibold">Message sent</h3>
                                <p className="mt-3 text-neutral-600 dark:text-neutral-400">Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
                                <button type="button" onClick={() => setSubmitted(false)} className="mt-6 bg-neutral-950 px-5 py-3 text-sm font-medium text-white dark:bg-white dark:text-neutral-950">Send another message</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <label className="text-sm font-medium">Name<input required name="name" value={formState.name} onChange={handleChange} className={`${inputClass} mt-2`} placeholder="Your name" /></label>
                                    <label className="text-sm font-medium">Email<input required type="email" name="email" value={formState.email} onChange={handleChange} className={`${inputClass} mt-2`} placeholder="you@example.com" /></label>
                                </div>
                                <label className="block text-sm font-medium">Subject<input required name="subject" value={formState.subject} onChange={handleChange} className={`${inputClass} mt-2`} placeholder="Project inquiry" /></label>
                                <label className="block text-sm font-medium">Message<textarea required name="message" rows={6} value={formState.message} onChange={handleChange} className={`${inputClass} mt-2 resize-none`} placeholder="Tell me about the project, timeline, and what you need help with..." /></label>
                                {error && <div className="border border-neutral-400 bg-neutral-100 p-3 text-sm dark:border-neutral-600 dark:bg-neutral-900">{error}</div>}
                                <button type="submit" disabled={isSubmitting} className="inline-flex w-full items-center justify-center gap-2 bg-neutral-950 px-6 py-3 font-medium text-white disabled:bg-neutral-500 dark:bg-white dark:text-neutral-950">
                                    {isSubmitting ? <><Loader2 size={19} className="animate-spin" />Sending...</> : <><Send size={19} />Send message</>}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
