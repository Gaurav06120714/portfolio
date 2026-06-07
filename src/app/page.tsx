"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/layout/Loader";
import Nav from "@/components/layout/Nav";
import SocialSidebar from "@/components/layout/SocialSidebar";
import EmailSidebar from "@/components/layout/EmailSidebar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />

      {!isLoading && (
        <>
          {/* Skip to content link for accessibility */}
          <a
            href="#hero"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-violet-600 focus:text-white focus:rounded-lg"
          >
            Skip to Content
          </a>

          <Nav />
          <SocialSidebar />
          <EmailSidebar />

          <main className="px-0">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Certifications />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </>
  );
}
