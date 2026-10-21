import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/AnimatedSection";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <Section id="certifications" labelledBy="certifications-title" className="border-t border-neutral-200">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">06 — Learning</p>
          <h2 id="certifications-title" className="text-3xl font-semibold tracking-tight md:text-4xl">
            Certifications
          </h2>
        </div>
        <Reveal className="lg:col-span-8">
          <ul className="border-t border-neutral-200">
            {certifications.map((c) => (
              <li
                key={c.title}
                className="grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-neutral-200 py-5"
              >
                <div>
                  <p className="font-medium">{c.title}</p>
                  <p className="mt-1 text-sm text-neutral-500">{c.issuer}</p>
                </div>
                <span className="font-mono text-sm text-neutral-500">{c.year}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
