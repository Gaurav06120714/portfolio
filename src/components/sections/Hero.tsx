"use client";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12 + 0.3, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 max-w-6xl mx-auto pt-20"
    >
      <div className="w-full">
        <motion.p
          custom={0}
          initial="hidden"
          animate="show"
          variants={variants}
          className="font-mono text-violet-400 text-sm md:text-base mb-4 tracking-widest"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={variants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[var(--text-primary)] leading-none mb-3"
        >
          {personalInfo.name.split(" ")[0]}{" "}
          <span className="text-[var(--text-secondary)]">
            {personalInfo.name.split(" ").slice(1).join(" ")}.
          </span>
        </motion.h1>

        <motion.h2
          custom={2}
          initial="hidden"
          animate="show"
          variants={variants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-muted)] leading-none mb-8"
        >
          {personalInfo.tagline}
        </motion.h2>

        <motion.p
          custom={3}
          initial="hidden"
          animate="show"
          variants={variants}
          className="max-w-xl text-[var(--text-secondary)] text-base md:text-lg leading-relaxed mb-10"
        >
          I&apos;m a Computer Science undergraduate specializing in{" "}
          <span className="text-violet-400 font-medium">Data Science</span> — passionate about building
          full-stack applications, AI/ML systems, and low-level software. From custom operating systems
          to real-time multiplayer platforms, I turn ambitious ideas into working products.
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={variants}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5"
          >
            View My Work
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 border border-violet-400 text-violet-400 font-medium rounded-lg hover:bg-violet-400/10 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Download size={16} />
            Download CV
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="show"
          variants={variants}
          className="mt-20 flex flex-col items-start gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 ml-1"
          >
            <div className="w-px h-12 bg-gradient-to-b from-violet-400 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
