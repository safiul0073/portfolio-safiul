/** @format */
"use client";
import React from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/layout/Navbar";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-950 text-dark-800 dark:text-white overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <footer className="py-6 bg-dark-100 dark:bg-dark-900 text-center text-dark-600 dark:text-dark-400 text-sm">
          <div className="container mx-auto px-4">
            <p>© {new Date().getFullYear()} Md Safiullah. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
