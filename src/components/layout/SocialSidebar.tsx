"use client";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { GithubIcon, LinkedInIcon, InstagramIcon, LeetCodeIcon } from "@/components/ui/SocialIcons";
import { socialLinks } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  github: GithubIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  code: LeetCodeIcon,
  terminal: Terminal,
};

export default function SocialSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed bottom-0 left-6 z-40 hidden lg:flex flex-col items-center gap-5 after:content-[''] after:w-px after:h-24 after:bg-[var(--text-muted)]"
    >
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon] ?? Terminal;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="text-[var(--text-muted)] hover:text-violet-400 hover:-translate-y-1 transition-all duration-200"
          >
            <Icon size={20} strokeWidth={1.5} />
          </a>
        );
      })}
    </motion.div>
  );
}
