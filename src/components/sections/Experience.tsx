/** @format */

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experiences, education } from "@/data/portfolio";

const Experience: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="experience" className="py-20 bg-white dark:bg-dark-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-2">Experience & Education</h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
                    <p className="text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">My professional journey and educational background.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Work Experience */}
                    <div>
                        <div className="flex items-center mb-8">
                            <Briefcase size={24} className="text-primary-600 mr-3" />
                            <h3 className="text-2xl font-bold text-dark-900 dark:text-white">Work Experience</h3>
                        </div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-900 space-y-10"
                        >
                            {experiences.map((exp) => (
                                <motion.div key={exp.id} variants={itemVariants} className="relative">
                                    <div className="absolute w-4 h-4 bg-primary-500 rounded-full -left-[1.15rem] top-1.5 ring-4 ring-primary-100 dark:ring-primary-900/30"></div>
                                    <div className="bg-dark-50 dark:bg-dark-800 p-6 rounded-lg shadow-md">
                                        <h4 className="text-xl font-semibold text-dark-900 dark:text-white mb-1">{exp.position}</h4>
                                        <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{exp.company}</p>
                                        <p className="text-dark-500 dark:text-dark-400 text-sm mb-4">{exp.duration}</p>

                                        <ul className="space-y-2 mb-4">
                                            {exp.description.map((desc: string, index: number) => (
                                                <li key={index} className="text-dark-600 dark:text-dark-300 flex items-start">
                                                    <span className="text-primary-600 mr-2">•</span>
                                                    <span>{desc}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech: string, index: number) => (
                                                <span key={index} className="text-xs px-2 py-1 bg-dark-200 dark:bg-dark-700 text-dark-700 dark:text-dark-300 rounded-full">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Education */}
                    <div>
                        <div className="flex items-center mb-8">
                            <GraduationCap size={24} className="text-primary-600 mr-3" />
                            <h3 className="text-2xl font-bold text-dark-900 dark:text-white">Education</h3>
                        </div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-900 space-y-10"
                        >
                            {education.map((edu) => (
                                <motion.div key={edu.id} variants={itemVariants} className="relative">
                                    <div className="absolute w-4 h-4 bg-primary-500 rounded-full -left-[1.15rem] top-1.5 ring-4 ring-primary-100 dark:ring-primary-900/30"></div>
                                    <div className="bg-dark-50 dark:bg-dark-800 p-6 rounded-lg shadow-md">
                                        <h4 className="text-xl font-semibold text-dark-900 dark:text-white mb-1">{edu.degree}</h4>
                                        <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{edu.institution}</p>
                                        <p className="text-dark-500 dark:text-dark-400 text-sm mb-4">{edu.duration}</p>

                                        {edu.description && <p className="text-dark-600 dark:text-dark-300">{edu.description}</p>}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Skills Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-12 bg-gradient-to-br from-primary-500 to-secondary-500 p-[1px] rounded-lg"
                        >
                            <div className="bg-white dark:bg-dark-800 p-6 rounded-lg">
                                <h4 className="text-xl font-semibold text-dark-900 dark:text-white mb-4">Additional Skills</h4>

                                <div className="space-y-2">
                                    <p className="text-dark-600 dark:text-dark-300">
                                        <span className="font-medium text-primary-600">Problem Solving:</span> Strong analytical thinking and creative approach to technical
                                        challenges.
                                    </p>
                                    <p className="text-dark-600 dark:text-dark-300">
                                        <span className="font-medium text-primary-600">Collaboration:</span> Excellent team player with experience in agile environments.
                                    </p>
                                    <p className="text-dark-600 dark:text-dark-300">
                                        <span className="font-medium text-primary-600">Project Management:</span> Experienced in leading projects from conception to delivery.
                                    </p>
                                    <p className="text-dark-600 dark:text-dark-300">
                                        <span className="font-medium text-primary-600">Communication:</span> Clear and effective communication with team members and clients.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
