"use client";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <AnimatedSection id="education" className="py-28 px-6 max-w-6xl mx-auto">
      <SectionHeading number="05" title="Education" />

      <div className="space-y-6 max-w-3xl">
        {education.map((edu, i) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 md:p-8 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/20 transition-colors">
                <GraduationCap size={22} className="text-violet-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-[var(--text-primary)] mb-1">
                  {edu.degree}
                </h3>
                <p className="text-violet-400 font-medium mb-3">{edu.institution}</p>
                <div className="flex flex-wrap gap-4 text-sm text-[var(--text-muted)] mb-4">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    {edu.duration}
                  </span>
                  {edu.cgpa && (
                    <span className="font-mono text-violet-400/70">
                      CGPA: {edu.cgpa}
                    </span>
                  )}
                </div>
                <ul className="space-y-1.5">
                  {edu.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-sm text-[var(--text-secondary)] flex items-start gap-2"
                    >
                      <span className="text-violet-400 mt-0.5">▹</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
