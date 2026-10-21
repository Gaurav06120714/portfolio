import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/AnimatedSection";
import { education, personalInfo } from "@/data/portfolio";

export default function About() {
  const edu = education[0];
  const facts = [
    { label: "Studying", value: edu.degree },
    { label: "At", value: edu.institution },
    { label: "Based in", value: personalInfo.location },
    { label: "Focus", value: "Software products, AI applications, desktop & mobile apps" },
  ];

  return (
    <Section id="about" labelledBy="about-title" className="border-t border-neutral-200">
      <SectionHeading eyebrow="01 — About" title="About me" id="about-title" />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="space-y-5 lg:col-span-7">
          {personalInfo.bio.map((p) => (
            <p key={p} className="text-base leading-relaxed text-neutral-700 md:text-lg">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5">
          <dl className="divide-y divide-neutral-200 border-y border-neutral-200">
            {facts.map((f) => (
              <div key={f.label} className="grid grid-cols-3 gap-4 py-4">
                <dt className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500">{f.label}</dt>
                <dd className="col-span-2 text-sm leading-relaxed">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
