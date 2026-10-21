import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/AnimatedSection";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <Section id="education" labelledBy="education-title" className="border-t border-neutral-200">
      <SectionHeading eyebrow="05 — Education" title="Education" id="education-title" />

      <div className="border-t border-neutral-200">
        {education.map((edu) => (
          <Reveal key={edu.institution}>
            <article className="grid gap-4 border-b border-neutral-200 py-8 md:grid-cols-12">
              <div className="md:col-span-8">
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{edu.degree}</h3>
                <p className="mt-2 text-neutral-600">
                  {edu.institution} · {edu.location}
                </p>
              </div>
              <dl className="flex gap-10 md:col-span-4 md:justify-end">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500">Years</dt>
                  <dd className="mt-1 font-medium">{edu.duration}</dd>
                </div>
                {edu.cgpa && (
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500">CGPA</dt>
                    <dd className="mt-1 font-medium">{edu.cgpa}</dd>
                  </div>
                )}
              </dl>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
