/** @format */
"use client";
import React from "react";
import Head from "next/head";
import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>My Portfolio</title>
          <meta name="description" content="My personal portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer/>
      </div>
    </>
  );
}
