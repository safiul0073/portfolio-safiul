/** @format */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            // Simulate form submission
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setSubmitted(true);
            setFormState({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (err) {
            setError("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-white dark:bg-dark-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-2">Get In Touch</h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                    <p className="text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">Have a project in mind or want to collaborate? Feel free to reach out!</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }}>
                        <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                            Contact <span className="text-primary-600">Information</span>
                        </h3>

                        <div className="space-y-6 mb-8">
                            <motion.div
                                className="flex items-start"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                            >
                                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                                    <Mail size={20} className="text-primary-600" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-dark-800 dark:text-white mb-1">Email</h4>
                                    <a
                                        href={`mailto:${personalInfo.email}`}
                                        className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
                                    >
                                        {personalInfo.email}
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                                    <MapPin size={20} className="text-primary-600" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-dark-800 dark:text-white mb-1">Location</h4>
                                    <p className="text-dark-600 dark:text-dark-300">{personalInfo.location}</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                                    <Phone size={20} className="text-primary-600" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-dark-800 dark:text-white mb-1">Phone</h4>
                                    <p className="text-dark-600 dark:text-dark-300">Available upon request</p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="bg-dark-50 dark:bg-dark-800 p-6 rounded-lg">
                            <h4 className="text-xl font-semibold text-dark-900 dark:text-white mb-4">Let&apos;s Build Something Amazing Together</h4>
                            <p className="text-dark-600 dark:text-dark-300 mb-4">
                                I&apos;m currently available for freelance work and full-time positions. If you have a project that needs attention or are looking to add a
                                dedicated developer to your team, I&apos;d love to hear from you.
                            </p>
                            <p className="text-dark-600 dark:text-dark-300">
                                I specialize in building:
                                <br />
                                • Full-stack web applications
                                <br />
                                • E-commerce solutions
                                <br />
                                • Content management systems
                                <br />• RESTful APIs and integrations
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                            Send Me a <span className="text-primary-600">Message</span>
                        </h3>

                        {submitted ? (
                            <motion.div
                                className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full inline-flex justify-center mb-4">
                                    <Send size={24} className="text-green-600 dark:text-green-400" />
                                </div>
                                <h4 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">Message Sent!</h4>
                                <p className="text-dark-600 dark:text-dark-300">Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-6 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-colors"
                                >
                                    Send Another Message
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-dark-700 dark:text-dark-300 mb-2 font-medium">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-dark-700 dark:text-dark-300 mb-2 font-medium">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                            placeholder="johndoe@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-dark-700 dark:text-dark-300 mb-2 font-medium">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formState.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-dark-700 dark:text-dark-300 mb-2 font-medium">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                                        placeholder="I'd like to discuss a project..."
                                    ></textarea>
                                </div>

                                {error && <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-md">{error}</div>}

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all flex items-center justify-center"
                                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={20} className="mr-2 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} className="mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
