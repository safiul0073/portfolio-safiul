/** @format */

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Calendar, Download } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const About: React.FC = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * i,
                duration: 0.5,
                ease: "easeOut",
            },
        }),
    };

    return (
        <section id="about" className="py-20 bg-white dark:bg-dark-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-2">About Me</h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                    <p className="text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
                        A practical look at how I build, lead, and ship full stack web products.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }}>
                        <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                            Professional <span className="text-primary-600">Journey</span>
                        </h3>
                        <p className="text-dark-600 dark:text-dark-300 mb-4 leading-relaxed">
                            I&apos;m a full stack developer with a backend-first mindset and 4+ years of experience delivering production applications for clients and product
                            teams. My work spans property platforms, ERP systems, e-commerce, booking products, lead management tools, and custom business dashboards.
                        </p>
                        <p className="text-dark-600 dark:text-dark-300 mb-6 leading-relaxed">
                            I specialize in Laravel, Next.js, React, Vue, APIs, database design, and deployment workflows. I care about clean architecture, maintainable code,
                            clear communication, and building systems that keep working after launch.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <motion.div
                                className="flex items-center"
                                custom={1}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <Mail size={20} className="text-primary-600 mr-2" />
                                <span className="text-dark-700 dark:text-dark-300">{personalInfo.email}</span>
                            </motion.div>
                            <motion.div
                                className="flex items-center"
                                custom={2}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <MapPin size={20} className="text-primary-600 mr-2" />
                                <span className="text-dark-700 dark:text-dark-300">{personalInfo.location}</span>
                            </motion.div>
                            <motion.div
                                className="flex items-center"
                                custom={3}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <Calendar size={20} className="text-primary-600 mr-2" />
                                <span className="text-dark-700 dark:text-dark-300">Available for new projects</span>
                            </motion.div>
                        </div>

                        <motion.a
                            href="/safiul_cv.pdf"
                            className="inline-flex items-center rounded-md bg-primary-600 px-6 py-3 font-medium text-white shadow-md transition-all hover:bg-primary-700 hover:shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download size={18} className="mr-2" />
                            Download Resume
                        </motion.a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 transform rotate-3 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500"></div>
                            <div className="relative z-10 rounded-lg bg-dark-100 p-6 shadow-xl dark:bg-dark-800">
                                <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                                    Delivery <span className="text-primary-600">Strengths</span>
                                </h3>

                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-dark-700 dark:text-dark-300">Backend Architecture</span>
                                            <span className="text-primary-600 font-medium">90%</span>
                                        </div>
                                        <div className="w-full bg-dark-200 dark:bg-dark-700 rounded-full h-2">
                                            <motion.div
                                                className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "90%" }}
                                                viewport={{ once: true, margin: "-100px" }}
                                                transition={{ duration: 1, delay: 0.3 }}
                                            ></motion.div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-dark-700 dark:text-dark-300">Full Stack Development</span>
                                            <span className="text-primary-600 font-medium">95%</span>
                                        </div>
                                        <div className="w-full bg-dark-200 dark:bg-dark-700 rounded-full h-2">
                                            <motion.div
                                                className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "95%" }}
                                                viewport={{ once: true, margin: "-100px" }}
                                                transition={{ duration: 1, delay: 0.4 }}
                                            ></motion.div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-dark-700 dark:text-dark-300">Database & Reporting</span>
                                            <span className="text-primary-600 font-medium">85%</span>
                                        </div>
                                        <div className="w-full bg-dark-200 dark:bg-dark-700 rounded-full h-2">
                                            <motion.div
                                                className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "85%" }}
                                                viewport={{ once: true, margin: "-100px" }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                            ></motion.div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-dark-700 dark:text-dark-300">Deployment & CI/CD</span>
                                            <span className="text-primary-600 font-medium">80%</span>
                                        </div>
                                        <div className="w-full bg-dark-200 dark:bg-dark-700 rounded-full h-2">
                                            <motion.div
                                                className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "80%" }}
                                                viewport={{ once: true, margin: "-100px" }}
                                                transition={{ duration: 1, delay: 0.6 }}
                                            ></motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
