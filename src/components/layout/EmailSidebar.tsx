"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function EmailSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed bottom-0 right-6 z-40 hidden lg:flex flex-col items-center gap-5 before:content-[''] before:w-px before:h-24 before:bg-[var(--text-muted)]"
    >
      <a
        href={`mailto:${personalInfo.email}`}
        className="font-mono text-xs text-[var(--text-muted)] hover:text-violet-400 hover:-translate-y-1 transition-all duration-200 [writing-mode:vertical-rl] tracking-widest"
      >
        {personalInfo.email}
      </a>
    </motion.div>
  );
}
