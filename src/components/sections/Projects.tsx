"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import Image from "next/image";
import { GithubIcon } from "@/components/ui/SocialIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { featuredProjects, otherProjects } from "@/data/portfolio";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? otherProjects : otherProjects.slice(0, 6);

  return (
    <AnimatedSection id="projects" className="py-28 px-6 max-w-6xl mx-auto">
      <SectionHeading number="04" title="Some Things I've Built" />

      {/* ── Featured projects ── */}
      <div className="space-y-32 mb-32">
        {featuredProjects.map((project, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative grid lg:grid-cols-12 gap-4 items-center"
            >
              {/* Screenshot */}
              <div
                className={`lg:col-span-7 lg:row-start-1 ${
                  isEven ? "lg:col-start-1" : "lg:col-start-6"
                }`}
              >
                <a
                  href={project.github ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative rounded-2xl overflow-hidden border border-[var(--border)] hover:border-violet-500/50 transition-all duration-300 shadow-2xl shadow-black/40"
                >
                  {project.image ? (
                    <>
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={1440}
                        height={900}
                        className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        priority={i === 0}
                      />
                      {/* Violet tint overlay — removes on hover like reference site */}
                      <div className="absolute inset-0 bg-violet-900/40 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300 pointer-events-none rounded-2xl" />
                    </>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-violet-900/20 to-slate-900/40 flex items-center justify-center">
                      <span className="text-6xl font-bold font-mono text-violet-500/20">
                        {project.title.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}
                </a>
              </div>

              {/* Content card — overlaps screenshot */}
              <div
                className={`lg:col-span-6 lg:row-start-1 z-10 ${
                  isEven
                    ? "lg:col-start-7 lg:text-right"
                    : "lg:col-start-1 lg:text-left"
                }`}
              >
                <p className="font-mono text-xs text-violet-400 mb-2 tracking-[0.2em] uppercase">
                  {project.overline}
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-5">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-violet-400 transition-colors"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>

                <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5 md:p-6 shadow-xl shadow-black/30 mb-5 hover:border-violet-500/30 transition-colors">
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <ul className={`flex flex-wrap gap-x-4 gap-y-1 mb-5 ${isEven ? "lg:justify-end" : "justify-start"}`}>
                  {project.tech.map((t) => (
                    <li key={t} className="font-mono text-xs text-[var(--text-muted)]">{t}</li>
                  ))}
                </ul>

                <div className={`flex gap-4 ${isEven ? "lg:justify-end" : "justify-start"}`}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                      className="text-[var(--text-secondary)] hover:text-violet-400 hover:-translate-y-0.5 transition-all duration-200">
                      <GithubIcon size={20} />
                    </a>
                  )}
                  {project.external && (
                    <a href={project.external} target="_blank" rel="noopener noreferrer" aria-label="Live Demo"
                      className="text-[var(--text-secondary)] hover:text-violet-400 hover:-translate-y-0.5 transition-all duration-200">
                      <ExternalLink size={20} strokeWidth={1.5} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── Other projects ── */}
      <div className="text-center mb-10">
        <p className="font-mono text-xs text-violet-400 tracking-[0.2em] uppercase mb-3">Other Noteworthy Projects</p>
        <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">More Things I&apos;ve Built</h3>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence>
          {displayed.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: (i % 3) * 0.07, duration: 0.4 }}
              className="group bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 flex flex-col hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/5 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <Folder size={36} strokeWidth={1} className="text-violet-400 group-hover:text-violet-300 transition-colors" />
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                      className="text-[var(--text-muted)] hover:text-violet-400 transition-colors" onClick={(e) => e.stopPropagation()}>
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {project.external && (
                    <a href={project.external} target="_blank" rel="noopener noreferrer" aria-label="Live Demo"
                      className="text-[var(--text-muted)] hover:text-violet-400 transition-colors" onClick={(e) => e.stopPropagation()}>
                      <ExternalLink size={18} strokeWidth={1.5} />
                    </a>
                  )}
                </div>
              </div>

              <h4 className="text-base font-semibold text-[var(--text-primary)] mb-2 group-hover:text-violet-400 transition-colors">
                {project.title}
              </h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <li key={t} className="font-mono text-[10px] text-[var(--text-muted)] bg-violet-500/5 border border-violet-500/10 px-2 py-0.5 rounded-md">
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {otherProjects.length > 6 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 font-mono text-sm text-violet-400 border border-violet-400 rounded-lg hover:bg-violet-400/10 transition-all duration-200"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </AnimatedSection>
  );
}
