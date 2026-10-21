import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/AnimatedSection";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" dark labelledBy="skills-title">
      <SectionHeading
        eyebrow="03 — Toolkit"
        title="Technical skills"
        id="skills-title"
        dark
        intro="Languages and tools I’ve used in my projects."
      />

      <div className="grid gap-px border border-neutral-800 bg-neutral-800 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, items], i) => (
          <Reveal key={category} delay={i * 0.04} className="bg-black p-6 md:p-8">
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-neutral-400">{category}</h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <li key={skill} className="border border-neutral-700 px-2.5 py-1 text-sm text-white">
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
