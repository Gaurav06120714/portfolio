"use client";
import { motion } from "framer-motion";

interface Props {
  number: string;
  title: string;
  light?: boolean;
}

export default function SectionHeading({ number, title, light }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4 mb-12"
    >
      <span className="font-mono text-sm text-violet-400 font-semibold">
        {number}.
      </span>
      <h2
        className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)]"
      >
        {title}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-violet-500/40 to-transparent" />
    </motion.div>
  );
}
