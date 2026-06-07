"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { personalInfo } from "@/data/portfolio";

const techStack = [
  "Python", "TypeScript / JavaScript",
  "React 18 + Vite", "Node.js + Socket.io",
  "FastAPI / Flask", "PostgreSQL / SQLite",
  "Machine Learning / OpenCV", "C / C++ / Assembly",
];

export default function About() {
  return (
    <AnimatedSection id="about" className="py-28 px-6 max-w-6xl mx-auto">
      <SectionHeading number="01" title="About Me" />

      <div className="grid lg:grid-cols-[3fr_2fr] gap-16 items-start">
        {/* Text */}
        <div className="space-y-5">
          {personalInfo.bio.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-[var(--text-secondary)] leading-relaxed text-base md:text-[17px]"
            >
              {para}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <p className="text-[var(--text-secondary)] mb-4 text-base md:text-[17px]">
              Here are a few technologies I&apos;ve been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {techStack.map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-2 text-sm font-mono text-[var(--text-secondary)]"
                >
                  <ChevronRight size={14} className="text-violet-400 flex-shrink-0" />
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Avatar — clean gradient card, no box/monogram */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative mx-auto max-w-[280px] lg:max-w-full"
        >
          {/* Decorative offset border */}
          <div className="absolute inset-0 rounded-2xl border border-violet-500/40 translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />

          {/* Main card */}
          <div className="relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-[#1a1040] via-[#0f0b2a] to-[#0d0d1a] border border-violet-500/20">

            {/* Animated background blobs */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-violet-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-600/20 rounded-full blur-2xl" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4 p-8">
              {/* Initials circle */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-xl shadow-violet-500/30">
                <span className="text-4xl font-bold text-white">GG</span>
              </div>

              <div className="text-center space-y-1">
                <p className="text-white font-semibold text-base">Gaurav Ganesh</p>
                <p className="text-violet-400 text-xs font-mono tracking-widest">Full-Stack · AI/ML</p>
              </div>

              {/* Stats row */}
              <div className="flex gap-6 mt-2">
                {[
                  { label: "Projects", value: "15+" },
                  { label: "Repos", value: "27" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-violet-400 font-bold text-lg">{s.value}</p>
                    <p className="text-[var(--text-muted)] text-xs font-mono">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
