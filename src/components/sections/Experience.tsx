"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { experience } from "@/data/portfolio";

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const job = experience[activeTab];

  return (
    <AnimatedSection id="experience" className="py-28 px-6 max-w-6xl mx-auto">
      <SectionHeading number="03" title="Where I've Worked" />

      <div className="flex flex-col md:flex-row gap-0 max-w-3xl">
        {/* Tab list */}
        <div className="relative flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l-2 border-[var(--border)] mb-8 md:mb-0 md:mr-10 md:min-w-[160px]">
          {experience.map((job, i) => (
            <button
              key={job.company}
              onClick={() => setActiveTab(i)}
              className={`relative px-4 md:px-5 py-3 text-sm font-mono whitespace-nowrap text-left transition-all duration-200 ${
                activeTab === i
                  ? "text-violet-400 bg-violet-500/10"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]"
              }`}
            >
              {/* Active indicator */}
              <span
                className={`absolute bottom-0 md:bottom-auto md:left-0 left-0 right-0 md:right-auto md:top-0 h-0.5 md:h-full md:w-0.5 bg-violet-400 transition-all duration-300 ${
                  activeTab === i ? "opacity-100" : "opacity-0"
                }`}
              />
              {job.company}
            </button>
          ))}
        </div>

        {/* Tab panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="flex-1"
          >
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-1">
              <span>{job.title}</span>{" "}
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:underline inline-flex items-center gap-1"
              >
                @ {job.company}
                <ExternalLink size={13} />
              </a>
            </h3>
            <p className="font-mono text-xs text-[var(--text-muted)] mb-6 tracking-wider">
              {job.duration}
            </p>
            <ul className="space-y-3">
              {job.bullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-3 text-[var(--text-secondary)] text-sm leading-relaxed"
                >
                  <ChevronRight
                    size={16}
                    className="text-violet-400 flex-shrink-0 mt-0.5"
                  />
                  {bullet}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}
