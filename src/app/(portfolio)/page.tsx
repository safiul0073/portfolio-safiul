import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Tools from "@/components/sections/Tools";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
    title: "Md Safiullah | Senior Full Stack Developer",
    description: "Portfolio of Md Safiullah, a senior full stack developer building Laravel, Next.js, React, Vue, API, ERP, marketplace, and business applications.",
};

export default function HomePage() {
    return (
        <>
            <Hero />
            <About preview />
            <Projects preview />
            <Experience preview />
            <Skills preview />
            <Tools preview />
            <Contact preview />
        </>
    );
}
