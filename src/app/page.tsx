/** @format */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link from Next.js

import profilePic from "../profile.png"; // Add your profile image in the public folder
import Image from "next/image";

const fadeInUp = {
    hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
export default function Home() {
    return (
        <div className="bg-gray-100 text-gray-900">
            <header className="bg-gray-900 text-white p-8">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl font-bold">Md Safiullah</h1>
                        <p className="text-2xl">Full Stack Developer</p>
                    </div>
                    <nav>
                        <Link className="text-lg mx-2 hover:underline" href="#about">
                            About
                        </Link>
                        <Link className="text-lg mx-2 hover:underline" href="#skills">
                            Skills
                        </Link>
                        <Link className="text-lg mx-2 hover:underline" href="#experience">
                            Experience
                        </Link>
                        <Link className="text-lg mx-2 hover:underline" href="#projects">
                            Projects
                        </Link>
                        <Link className="text-lg mx-2 hover:underline" href="#contact">
                            Contact
                        </Link>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto mt-12 p-6">
                <motion.section id="about" className="mb-12" initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 0.5 }}>
                    <div className="flex items-center">
                        <Image src={profilePic} alt="Profile" className="w-48 h-48 rounded-full mr-8" />
                        <div>
                            <h2 className="text-3xl font-bold mb-4 border-b-4 border-blue-600 inline-block">Professional Summary</h2>
                            <p className="text-lg leading-relaxed">
                                I am a highly skilled Software Engineer with over 3 years of experience specializing in web development using a diverse set of technologies
                                including Laravel, Node.js, React, Vue, and Next.js. My expertise lies in creating efficient, scalable, and user-friendly applications that meet the
                                needs of both clients and end-users. I have a proven track record of delivering high-quality projects on time and within budget, while continually
                                learning and adapting to new technologies and industry trends.
                                <br />
                                <br />
                                Throughout my career, I have demonstrated strong problem-solving skills and the ability to work effectively both independently and as part of a
                                team. I am proficient in designing and implementing complex web applications, optimizing performance, and ensuring security best practices. My
                                experience includes working on a variety of projects, from small startups to large enterprise systems, allowing me to understand and navigate the
                                unique challenges of different development environments.
                                <br /> <br />I am passionate about continuous improvement and always strive to enhance my skill set through ongoing education and hands-on
                                experience. My goal is to leverage my technical abilities and creative problem-solving skills to contribute to innovative projects that drive
                                business success and deliver exceptional user experiences.
                            </p>
                        </div>
                    </div>
                </motion.section>

                <motion.section id="skills" className="mb-12">
                    <h2 className="text-3xl font-bold mb-4 border-b-4 border-blue-600 inline-block">Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">Laravel</h3>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">Node.js</h3>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">Nest.js</h3>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">Express.js</h3>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">React</h3>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">Vue.js</h3>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">Next.js</h3>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">HTML5 & CSS3</h3>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">TailwindCSS</h3>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">JavaScript & TypeScript</h3>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">RESTful API Development</h3>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">Database Management</h3>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">Version Control (Git)</h3>
                        </div>
                    </div>
                </motion.section>

                <motion.section id="experience" className="mb-12">
                    <h2 className="text-3xl font-bold mb-4 border-b-4 border-blue-600 inline-block">Experience</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h3 className="text-2xl font-semibold">Full Stack Developer(Part Time)</h3>
                        <p className="text-gray-700">Arrowhead It Solution | Sep 2023 - Present</p>
                        <ul className="list-disc list-inside ml-6 mt-2 text-lg leading-relaxed">
                            <li>Developed and maintained web applications using Laravel and Vue.js, React.js, and Next.js.</li>
                            <li>Designed and implemented RESTful APIs for various services.</li>
                            <li>Collaborated with frontend developers to integrate React components into existing projects.</li>
                            <li>Improved application performance and scalability.</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h3 className="text-2xl font-semibold">Full Stack Developer</h3>
                        <p className="text-gray-700">Ilegecy | Nov 2021 - Aug 2023</p>
                        <ul className="list-disc list-inside ml-6 mt-2 text-lg leading-relaxed">
                            <li>Built full-stack web applications using Laravel, Node.js and React.</li>
                            <li>Integrated third-party APIs and services to enhance application functionality.</li>
                            <li>Implemented user authentication and authorization systems.</li>
                            <li>Worked closely with designers to create responsive and user-friendly interfaces using TailwindCSS.</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h3 className="text-2xl font-semibold">Full Stack Developer (Part Time)</h3>
                        <p className="text-gray-700">ZsTechnology | Nov 2021 - Aug 2023</p>
                        <ul className="list-disc list-inside ml-6 mt-2 text-lg leading-relaxed">
                            <li>Boosted the productivity of administrative work by various type of application.</li>
                            <li>
                                writing clean and reusable code for School Management, Briks Management, Dealership Management etc using Laravel to manage their all facilities and
                                digitalize their manual process.
                            </li>
                            <li>Fixing bugs also optimize older code</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h3 className="text-2xl font-semibold">Backend Developer</h3>
                        <p className="text-gray-700">ActiveSoftwareLtd | Jan 2021 - Nov 2023</p>
                        <ul className="list-disc list-inside ml-6 mt-2 text-lg leading-relaxed">
                            <li>Worked with senior developers to develop and maintain web applications using Laravel, Node.js, and Next.js.</li>
                            <li>Assisted in designing and implementing database structures using MySQL and MongoDB</li>
                            <li>Gained experience with version control systems, primarily Git, for epicene code collaboration.</li>
                        </ul>
                    </div>
                </motion.section>

                <motion.section id="projects" className="mb-12">
                    <h2 className="text-3xl font-bold mb-4 border-b-4 border-blue-600 inline-block">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold">E-commerce Platform</h3>
                            <p className="text-gray-700">A fully-featured e-commerce platform built with Laravel and Nuxt.</p>
                            <ul className="list-disc list-inside ml-6 mt-2 text-lg leading-relaxed">
                                <li>Developed backend services with Laravel to handle product listings, orders, and payments.</li>
                                <li>Created admin dashboard with blade Engin to manage this web site.</li>
                                <li>Integrated payment gateways such as SSLCOMMERZ.</li>
                            </ul>
                            <div className="mt-4">
                                <p className="text-gray-700">Technologies used: Laravel, Nuxt, blade Engine, Mysql and SSLCOMMERZ.</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold">Real-Time Lead Management System</h3>
                            <p className="text-gray-700">A real-time lead management application built with Node.js and Next.js.</p>
                            <ul className="list-disc list-inside ml-6 mt-2 text-lg leading-relaxed">
                                <li>Implemented WebSocket for real-time lead management.</li>
                                <li>Designed the frontend interface with Next.js and TailwindCSS.</li>
                                <li>Set up user authentication and WebSocket to handle lead.</li>
                            </ul>
                            <div className="mt-4">
                                <p className="text-gray-700">Technologies used: Node.js, Next.js, TailwindCSS, WebSocket and Postgresql with Prisma.</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold">Multilevel Marketing (MLM)</h3>
                            <p className="text-gray-700">A multilevel marketing application built with Laravel and React.js.</p>
                            <ul className="list-disc list-inside ml-6 mt-2 text-lg leading-relaxed">
                                <li>Developed backend services with Laravel to handle users, Binary Tree, Packages, Product and payments.</li>
                                <li>Created admin dashboard with React to manage this web site.</li>
                                <li>Implement package purchase with user registration and user Binary Tree and Unary Tree</li>
                            </ul>
                            <div className="mt-4">
                                <p className="text-gray-700">Technologies used: Laravel, React.js, TailwindCSS, Mysql</p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                <motion.section id="education" className="mb-12 ">
                    <h2 className="text-3xl font-bold mb-4 border-b-4 border-blue-600 inline-block">Education</h2>
                    <div className="flex flex-col gap-3">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold">Bachelor of Science in Computer Science</h3>
                            <p className="text-gray-700">Green University of Bangladesh | 2019 - 2022</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold">Diploma in Computer Science</h3>
                            <p className="text-gray-700">Brahmmanbaria Polytechnic Institute | 2014 - 2018</p>
                        </div>
                    </div>
                </motion.section>

                <motion.section id="contact" className="mb-12">
                    <h2 className="text-3xl font-bold mb-4 border-b-4 border-blue-600 inline-block">Contact</h2>
                    <p className="text-lg leading-relaxed">
                        Email:{" "}
                        <a href="mailto:safiul7303@gmail.com" className="text-blue-600 hover:underline">
                            safiul7303@gmail.com
                        </a>
                    </p>
                    <p className="text-lg leading-relaxed">
                        Phone:{" "}
                        <a href="tel:+88016-76413972" className="text-blue-600 hover:underline">
                            +88016-76413972
                        </a>
                    </p>
                    <p className="text-lg leading-relaxed">
                        LinkedIn:{" "}
                        <a href="https://www.linkedin.com/in/safiul0073/" target="_blank" className="text-blue-600 hover:underline">
                            linkedin.com/in/safiul0073
                        </a>
                    </p>
                    <p className="text-lg leading-relaxed">
                        GitHub:{" "}
                        <a href="https://github.com/safiul0073" target="_blank" className="text-blue-600 hover:underline">
                            github.com/safiul0073
                        </a>
                    </p>
                </motion.section>
            </main>

            <footer className="bg-gray-900 text-white p-6 mt-12">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Md Safiullah. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
