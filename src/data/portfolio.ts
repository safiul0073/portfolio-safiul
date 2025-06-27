/** @format */

import { Project, Experience, Skill, Education, SocialLink } from "../types";
import ighotokImage from "../../public/ighotok.png";
import lottery from "../../public/lottery.png";
import itsholyday from "../../public/itsholyday.png";

export const personalInfo = {
    name: "Md Safiullah",
    title: "Full Stack Developer",
    email: "mdsafiul0073@gmail.com",
    location: "Uttara, Dhaka, Bangladesh",
    bio: "Full stack developer with 4 years of experience building web applications using Laravel, Next.js, React, Vue, and Docker. Passionate about creating clean, efficient, and user-friendly solutions.",
};

export const projects: Project[] = [
    {
        id: 1,
        title: "E-commerce Platform (Regal Furniture)",
        description: "A full-featured e-commerce platform with product management, cart, and checkout functionality",
        longDescription:
            "Built a comprehensive e-commerce solution from scratch using Laravel for the backend API and Vue.js for the frontend. Implemented features like user authentication, product catalog, shopping cart, payment processing via Stripe, and order management.",
        image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        technologies: ["Laravel", "Nuxt.js", "MySQL"],
        github: "#",
        live: "https://regalfurniturebd.com/",
        featured: true,
    },
    {
        id: 2,
        title: "Yacht Management System",
        description: "A comprehensive solution for managing yacht bookings and selling",
        longDescription:
            "Developed a yacht management system that allows users to browse available yachts, make bookings, and manage their rentals. The system includes features like user authentication, payment processing, and an admin dashboard for managing listings and bookings. This application develop for codecanyon.",
        image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        technologies: ["Laravel", "MySQL", "Blade", "Tailwind CSS"],
        github: "#",
        live: "https://boativus.pxlaxis.com/",
        featured: true,
    },
    {
        id: 3,
        title: "Travel & Flight Booking System",
        description: "A travel booking application with flight, hotel booking and itinerary management",
        longDescription:
            "Developed a travel booking application that allows users to search for flights, book hotels, and manage their itineraries. The application integrates with third-party APIs for flight and hotel data, providing users with real-time availability and pricing. This is one of my cadecanyone project. https://codecanyon.net/item/boativus-multivendor-boatyacht-booking-platform/58224658",
        image: itsholyday.src,
        technologies: ["Laravel", "Next.js", "MySQL", "Tailwind CSS"],
        github: "#",
        live: "https://www.itsholidaysltd.com/",
    },
    {
        id: 4,
        title: "Lead Management System",
        description: "A system for managing leads and customer interactions",
        longDescription:
            "Developed a lead management system that allows businesses to track and manage customer interactions. The system includes features like lead capture forms, email notifications, and reporting dashboards to help businesses optimize their sales processes.",
        image: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        technologies: ["Next.js", "Node.js", "Tailwind CSS", "Prisma"],
        github: "#",
        live: "#",
    },
    {
        id: 5,
        title: "Courier Management System",
        description: "A system for managing courier services and deliveries",
        longDescription:
            "Developed a courier management system that allows users to schedule and track deliveries. The system includes features like real-time tracking, delivery notifications, and an admin dashboard for managing orders and drivers. This application have Four different roles: Agent, Shops, Merchant and Admin.",
        image: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        technologies: ["Laravel", "Next.js", "Postgresql", "Docker", "Tailwind CSS"],
        github: "#",
        live: "#",
    },
    {
        id: 6,
        title: "Multi-Label Marketing System",
        description: "A system for managing multi-label marketing campaigns that have Binary and Unilevel system",
        longDescription:
            "Developed a multi-label marketing system that allows users to manage their marketing campaigns. The system includes features like user registration, commission tracking, and reporting dashboards to help businesses optimize their marketing strategies.",
        image: "https://images.pexels.com/photos/210606/pexels-photo-210606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        technologies: ["Laravel", "Blade", "MySQL", "Tailwind CSS"],
        github: "https://github.com/safiul0073/multilevel-marketing-application",
        live: "#",
    },
    {
        id: 7,
        title: "Matrimony Application",
        description: "A matrimony application for connecting individuals for marriage",
        longDescription:
            "Developed a matrimony application that allows users to create profiles, search for potential matches, and communicate with each other. The application includes features like user authentication, profile management, and messaging functionality.",
        image: ighotokImage.src,
        technologies: ["Laravel", "Next.js", "Firebase", "Mysql", "Tailwind CSS"],
        github: "#",
        live: "https://www.ighotok.com",
    },
    {
        id: 8,
        title: "Online Lottery System",
        description: "An online lottery system for managing lottery tickets and draws",
        longDescription:
            "Developed an online lottery system that allows users to create lottery tickets and participate in draws. The system includes features like user authentication, ticket management, and draw management.",
        image: lottery.src,
        technologies: ["Laravel", "Next.js", "Firebase", "Mysql", "Tailwind CSS"],
        github: "#",
        live: "https://rifa-frontend-six.vercel.app/",
    },
];

export const experiences: Experience[] = [
    {
        id: 1,
        company: "Softivus",
        position: "Senior Full Stack Developer",
        duration: "July 2024 - Present",
        description: [
            "Lead a team of 5 developers in building and maintaining multiple client projects and Codecanyone projects",
            "Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 40%",
            "Developed a dashboard for reusable components and templates, improving development efficiency",
            "Build and maintain a Fully functional notification system for Email, SMS, and Firebase notifications",
            "Mentored junior developers through code reviews and pair programming sessions",
        ],
        technologies: ["Laravel", "Next.js", "MySQL", "Docker", "Tailwind CSS"],
    },
    {
        id: 2,
        company: "Arrowhead It Solution",
        position: "Full Stack Developer(Part-Time)",
        duration: "Sep 2023 - Apr 2025",
        description: [
            "Developed and maintained ERP system using Laravel and Vue.js ",
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
