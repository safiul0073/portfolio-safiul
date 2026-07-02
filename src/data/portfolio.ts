/** @format */

import comvest from "../../public/comvest.png";
import ighotokImage from "../../public/ighotok.png";
import itsholyday from "../../public/itsholyday.png";
import lottery from "../../public/lottery.png";
import quiz from "../../public/quiz.png";
import investra from "../../public/investra.png";
import sagorstore from "../../public/sagorstore.png";
import { Education, Experience, Project, Skill, SocialLink } from "../types";

export const personalInfo = {
    name: "Md Safiullah",
    title: "Senior Full Stack Developer",
    email: "mdsafiul0073@gmail.com",
    location: "Uttara, Dhaka, Bangladesh",
    bio: "Full stack developer with 4+ years of experience building reliable web applications with Laravel, Next.js, React, Vue, MySQL, and Docker. I focus on backend architecture, clean user experiences, and production-ready systems that are easy to maintain and scale.",
};

export const projects: Project[] = [
    {
        id: 14,
        title: "TaskerHub - AI Task Marketplace",
        description:
            "A CodeCanyon-approved AI-powered task marketplace with admin panel, web app, REST API, and Expo mobile app.",
        longDescription:
            "Built a complete AI-powered task marketplace platform for clients, taskers, freelancers, and service providers. The package includes a Laravel admin/backend, Next.js web application, REST API, and Expo-based mobile app. It supports task posting, bidding, assignment, real-time chat, wallet and payments, withdrawals, KYC, reviews, support tickets, reports, multi-currency, multi-language, and AI assistance for proposal writing, comment writing, and tasker selection.",
        highlights: [
            "Accepted and published on CodeCanyon as a complete marketplace product package.",
            "Built admin panel, web app, REST API, and Expo mobile app for Android and iOS workflows.",
            "Implemented client and tasker flows for task posting, bidding, assignment, completion, reviews, and ratings.",
            "Added AI proposal writing, AI comment writing, and AI-assisted tasker selection features.",
            "Integrated wallet, deposits, withdrawals, commissions, reports, KYC, support tickets, and real-time chat.",
            "Supported multiple payment gateways, multi-currency, multi-language, Firebase push notifications, and email notifications.",
        ],
        image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        technologies: ["Laravel", "Next.js", "Expo", "MySQL", "REST API", "Firebase", "AI"],
        github: "#",
        live: "https://codecanyon.net/item/taskerhub-ondemand-service-marketplace-mobile-app-with-admin-panel/63500652?s_rank=1",
        featured: true,
    },
    {
        id: 1,
        title: "Property Management System",
        description: "A multi-role property platform for listings, rentals, investments, auctions, furniture sales, and service providers.",
        longDescription:
            "Led development of a property management platform that supports property sales, rentals, investments, auctions, furniture marketplace features, and handyman service providers. The system includes authentication, payment processing, role-based dashboards, listing management, and workflows for Property Owners, Agents, Customers, Providers, and Admins.",
        image: comvest.src,
        technologies: ["Laravel", "Next.js", "MySQL", "Tailwind CSS", "DocuSign"],
        github: "#",
        live: "https://comvst.com",
        featured: true,
    },
    {
        id: 2,
        title: "Micro Investment Platform for Property",
        description: "A property investment platform that lets users invest smaller amounts through multiple investment models.",
        longDescription:
            "Built a property investment platform where users can invest in real estate through fixed, renewable, and infinite investment models. The application includes Investor and Admin roles, portfolio workflows, and a companion mobile application built for the same product ecosystem.",
        image: investra.src,
        technologies: ["Laravel", "Next.js", "MySQL", "Tailwind CSS", "React Native"],
        github: "#",
        live: "https://investra.softivus.com",
        featured: true,
    },
    {
        id: 3,
        title: "E-commerce Platform (Regal Furniture)",
        description: "A furniture e-commerce platform with catalog management, cart, checkout, and order workflows.",
        longDescription:
            "Built a full e-commerce solution using Laravel for the backend API and Vue.js/Nuxt.js for the frontend. Implemented authentication, product catalog management, shopping cart, SSLCommerz checkout, and order management workflows.",
        image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        technologies: ["Laravel", "Nuxt.js", "MySQL"],
        github: "#",
        live: "https://regalfurniturebd.com/",
        featured: true,
    },
    {
        id: 4,
        title: "Quiz Platform",
        description: "A quiz and learning platform with custom quizzes, timed sessions, scoring, and leaderboard features.",
        longDescription:
            "Developed a quiz platform that lets users create and take custom quizzes with timed sessions, instant feedback, real-time scoring, and leaderboard features that support competitive learning experiences.",
        image: quiz.src,
        technologies: ["Laravel", "Next.js", "MySQL", "Blade", "Tailwind CSS"],
        github: "#",
        live: "https://quiz.softivus.com/",
        featured: true,
    },
    {
        id: 5,
        title: "Yacht Management System",
        description: "A yacht booking and sales platform with listing management, booking flows, and admin controls.",
        longDescription:
            "Developed a yacht management system for browsing available yachts, booking rentals, and managing yacht sales. The platform includes authentication, payment workflows, listing management, and an admin dashboard, built as a commercial CodeCanyon product.",
        image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        technologies: ["Laravel", "MySQL", "Blade", "Tailwind CSS"],
        github: "#",
        live: "https://boativus.pxlaxis.com/",
        featured: true,
    },
    {
        id: 6,
        title: "ERP System",
        description: "An ERP frontend modernization project covering inventory, sales, purchase, accounts, CRM, and role management.",
        longDescription:
            "Contributed to a large ERP system by converting Laravel Blade screens into a Laravel API and Vue.js frontend experience. The backend used a monolithic architecture, while the frontend followed a micro-frontend approach with a primary dashboard for login, user role management, and access to modules such as Inventory, Sales, Purchase, Accounts, and CRM. Delivered the work within 4 months as a part-time developer at Arrowhead IT Solution.",
        image: "https://t3.ftcdn.net/jpg/04/57/96/56/240_F_457965647_3j4wXKgbQbRADc15roCsxUQG6ikA5FZ3.jpg",
        technologies: ["Laravel", "Vue.js", "MySQL", "Bootstrap", "Vuex"],
        github: "#",
        live: "#",
        featured: true,
    },
    {
        id: 7,
        title: "Travel & Flight Booking System",
        description: "A travel booking application with flight search, hotel booking, itinerary management, and API integrations.",
        longDescription:
            "Developed a travel booking application that allows users to search flights, book hotels, and manage itineraries. The application integrates third-party APIs for flight and hotel data, giving users real-time availability and pricing. This work is part of my commercial marketplace product experience.",
        image: itsholyday.src,
        technologies: ["Laravel", "Next.js", "MySQL", "Tailwind CSS"],
        github: "#",
        live: "https://www.itsholidaysltd.com/",
    },
    {
        id: 8,
        title: "Lead Management System",
        description: "A lead tracking platform for capturing inquiries, managing follow-ups, and reviewing sales activity.",
        longDescription:
            "Developed a lead management system that helps businesses capture, track, and manage customer interactions. The system includes lead capture forms, email notifications, follow-up workflows, and reporting dashboards for improving sales operations.",
        image: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        technologies: ["Next.js", "Node.js", "Tailwind CSS", "Prisma"],
        github: "#",
        live: "#",
    },
    {
        id: 9,
        title: "Courier Management System",
        description: "A courier operations platform for shipment scheduling, delivery tracking, and multi-role management.",
        longDescription:
            "Developed a courier management system that allows users to schedule and track deliveries. The platform includes delivery notifications, operational dashboards, order management, and role-based workflows for Agents, Shops, Merchants, and Admins.",
        image: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        technologies: ["Laravel", "Next.js", "Postgresql", "Docker", "Tailwind CSS"],
        github: "#",
        live: "#",
    },
    {
        id: 10,
        title: "Multi-Level Marketing System",
        description: "A marketing management platform with binary and unilevel structures, commissions, and reporting.",
        longDescription:
            "Developed a multi-level marketing system with binary and unilevel structures. The platform includes user registration, commission tracking, member management, and reporting dashboards for monitoring business performance.",
        image: "https://images.pexels.com/photos/210606/pexels-photo-210606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        technologies: ["Laravel", "Blade", "MySQL", "Tailwind CSS"],
        github: "https://github.com/safiul0073/multilevel-marketing-application",
        live: "#",
    },
    {
        id: 11,
        title: "Matrimony Application",
        description: "A matrimony platform with profile management, partner search, matching, and communication features.",
        longDescription:
            "Developed a matrimony application that allows users to create profiles, search for potential matches, and communicate with each other. The application includes authentication, profile management, match discovery, and messaging functionality.",
        image: ighotokImage.src,
        technologies: ["Laravel", "Next.js", "Firebase", "Mysql", "Tailwind CSS"],
        github: "#",
        live: "https://www.ighotok.com",
    },
    {
        id: 12,
        title: "Online Lottery System",
        description: "An online lottery platform for ticket creation, draw management, and participant workflows.",
        longDescription:
            "Developed an online lottery system that allows users to create lottery tickets and participate in draws. The platform includes authentication, ticket management, participant workflows, and draw management features.",
        image: lottery.src,
        technologies: ["Laravel", "Next.js", "Firebase", "Mysql", "Tailwind CSS"],
        github: "#",
        live: "https://rifa-frontend-six.vercel.app/",
    },
    {
        id: 13,
        title: "Dealer Management System",
        description: "A production dealer management system for sales, staff, inventory, transactions, and profit tracking.",
        longDescription:
            "Built a dealer management system for a live client in Khulna. The application helps the business owner manage workers, managers, customers, products, sales, salary and duty records, daily transactions, and profit/loss reporting. This was my first production application, developed in 2021, and it continues to run reliably for the client.",
        image: sagorstore.src,
        technologies: ["Laravel", "JQuery", "Tailwind CSS"],
        github: "#",
        live: "https://sagorstore.com",
    }
];

export const experiences: Experience[] = [
    {
        id: 1,
        company: "Softivus",
        position: "Senior Full Stack Developer",
        duration: "July 2024 - Present",
        description: [
            "Lead a team of 12 developers building and maintaining client applications and commercial marketplace products",
            "Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 40%",
            "Developed reusable dashboards, components, and templates to improve team delivery speed",
            "Build and maintain notification systems for email, SMS, and Firebase push notifications",
            "Mentored junior developers through code reviews and pair programming sessions",
        ],
        technologies: ["Laravel", "Next.js", "MySQL", "Docker", "Tailwind CSS"],
    },
    {
        id: 2,
        company: "Arrowhead It Solution",
        position: "Full Stack Developer (Part-Time)",
        duration: "Sep 2023 - Apr 2025",
        description: [
            "Developed and maintained ERP modules using Laravel and Vue.js",
            "Guided junior developers in best practices and code optimization",
            "Collaborated with cross-functional teams to gather requirements and deliver solutions",
        ],
        technologies: ["Vue.js", "Laravel", "Next.js", "MySQL", "Tailwind CSS"],
    },
    {
        id: 3,
        company: "Ilegecy",
        position: "Junior Backend Developer",
        duration: "Nov 2021 - Aug 2023",
        description: [
            "Worked on various projects using Laravel and Node.js, focusing on backend development",
            "Collaborated with frontend developers to integrate APIs and ensure seamless user experience",
            "Participated in code reviews and contributed to team knowledge sharing sessions",
        ],
        technologies: ["Laravel", "Node.js", "MySQL", "Docker"],
    },
];

export const skills: Skill[] = [
    // Frontend
    { name: "React", icon: "react", proficiency: 90, category: "frontend" },
    { name: "Vue.js", icon: "vue", proficiency: 85, category: "frontend" },
    { name: "Next.js", icon: "nextjs", proficiency: 80, category: "frontend" },
    { name: "TypeScript", icon: "typescript", proficiency: 85, category: "frontend" },
    { name: "Tailwind CSS", icon: "tailwind", proficiency: 90, category: "frontend" },

    // Backend
    { name: "Laravel", icon: "laravel", proficiency: 95, category: "backend" },
    { name: "Node.js", icon: "nodejs", proficiency: 80, category: "backend" },
    { name: "Express", icon: "express", proficiency: 85, category: "backend" },
    { name: "NestJS", icon: "nestjs", proficiency: 75, category: "backend" },
    { name: "PHP", icon: "php", proficiency: 90, category: "backend" },

    // Database
    { name: "MySQL", icon: "mysql", proficiency: 85, category: "database" },
    { name: "PostgreSQL", icon: "postgresql", proficiency: 80, category: "database" },
    { name: "MongoDB", icon: "mongodb", proficiency: 75, category: "database" },
    { name: "Redis", icon: "redis", proficiency: 70, category: "database" },

    // DevOps
    { name: "Docker", icon: "docker", proficiency: 85, category: "devops" },
    { name: "AWS", icon: "aws", proficiency: 75, category: "devops" },
    { name: "CI/CD", icon: "cicd", proficiency: 80, category: "devops" },

    // Other
    { name: "Git", icon: "git", proficiency: 90, category: "other" },
    { name: "RESTful APIs", icon: "api", proficiency: 95, category: "other" },
    { name: "GraphQL", icon: "graphql", proficiency: 70, category: "other" },
];

export const education: Education[] = [
    {
        id: 1,
        institution: "Green University of Bangladesh",
        degree: "Bachelor of Science in Computer Science",
        duration: "2018 - 2022",
        description: "Focused on software engineering, databases, and web development. Graduated with honors.",
    },
];

export const socialLinks: SocialLink[] = [
    {
        name: "GitHub",
        url: "https://github.com/safiul0073",
        icon: "github",
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/safiul0073",
        icon: "linkedin",
    },
    {
        name: "Facebook",
        url: "https://facebook.com/safiullah0073",
        icon: "facebook",
    },
];
