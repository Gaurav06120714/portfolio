"use client";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { certifications, achievements } from "@/data/portfolio";

export default function Certifications() {
  return (
    <AnimatedSection id="certifications" className="py-28 px-6 max-w-6xl mx-auto">
      <SectionHeading number="06" title="Certifications & Achievements" />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Certifications */}
        <div>
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6 font-mono">
            📜 Certifications
          </h3>
          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group flex items-start gap-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-4 hover:border-violet-500/50 hover:shadow-md hover:shadow-violet-500/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                  <Award size={18} className="text-violet-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-violet-400 transition-colors">
                    {cert.title}
                  </h4>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs text-[var(--text-muted)]">{cert.issuer}</p>
                    <span className="font-mono text-xs text-violet-400/60">{cert.year}</span>
                  </div>
                </div>
                {cert.url && cert.url !== "#" && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-muted)] hover:text-violet-400 transition-colors flex-shrink-0"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6 font-mono">
            🏆 Achievements
          </h3>
          <div className="space-y-3">
            {achievements.map((ach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex gap-3 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-4 hover:border-violet-500/50 transition-all duration-300"
              >
                <span className="text-violet-400 text-sm mt-0.5 flex-shrink-0">▹</span>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{ach}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
