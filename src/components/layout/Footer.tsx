"use client";
import { Terminal } from "lucide-react";
import { GithubIcon, LinkedInIcon, InstagramIcon, LeetCodeIcon } from "@/components/ui/SocialIcons";
import { socialLinks, personalInfo } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  github: GithubIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  code: LeetCodeIcon,
  terminal: Terminal,
};

export default function Footer() {
  return (
    <footer className="py-8 px-6 flex flex-col items-center gap-4">
      {/* Mobile social links */}
      <div className="flex items-center gap-6 lg:hidden">
        {socialLinks.map((link) => {
          const Icon = iconMap[link.icon] ?? Terminal;
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-[var(--text-muted)] hover:text-violet-400 transition-colors"
            >
              <Icon size={20} strokeWidth={1.5} />
            </a>
          );
        })}
      </div>

      <a
        href="https://github.com/Gaurav06120714"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-xs text-[var(--text-muted)] hover:text-violet-400 transition-colors text-center"
      >
        <span>Designed &amp; Built by </span>
        <span className="text-violet-400">Gaurav Ganesh Teegulla</span>
      </a>
    </footer>
  );
}
