import { ArrowDown, ArrowUpRight } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { SocialIcon } from "@/components/ui/SocialIcons";
import Reveal from "@/components/ui/AnimatedSection";

export default function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="bg-white">
      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8">
        <Reveal>
          <ul className="mb-8 flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
            {personalInfo.roles.map((role, i) => (
              <li key={role} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true">/</span>}
                {role}
              </li>
            ))}
          </ul>

          <h1 className="max-w-4xl text-[2.75rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            {personalInfo.name}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600 md:text-xl">
            {personalInfo.intro}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-black bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
            >
              View projects <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-black px-6 py-3 text-sm font-medium transition-colors hover:bg-black hover:text-white"
            >
              Résumé <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="link ml-1 px-2 py-3 text-sm font-medium"
            >
              Get in touch
            </a>
          </div>

          <ul className="mt-14 flex items-center gap-5 text-neutral-500" aria-label="Profiles">
            {socialLinks
              .filter((s) => s.icon !== "instagram")
              .map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="block transition-colors hover:text-black"
                  >
                    <SocialIcon name={s.icon} size={20} />
                  </a>
                </li>
              ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
