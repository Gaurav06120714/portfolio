import { ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/AnimatedSection";
import { achievements, experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" labelledBy="experience-title">
      <SectionHeading eyebrow="04 — Experience" title="Experience & achievements" id="experience-title" />

      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">Experience</h3>
          <Reveal>
          <ol className="border-t border-neutral-200">
            {experience.map((job) => (
                <li key={job.company} className="border-b border-neutral-200 py-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h4 className="text-xl font-semibold tracking-tight">{job.title}</h4>
                    <span className="font-mono text-sm text-neutral-500">{job.duration}</span>
                  </div>
                  <p className="mt-1 text-neutral-600">
                    {job.url ? (
                      <a href={job.url} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1">
                        {job.company} <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    ) : (
                      job.company
                    )}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm leading-relaxed text-neutral-700">
                        <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-black" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </li>
            ))}
          </ol>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">Achievements</h3>
          <Reveal>
            <ol className="border-t border-neutral-200">
              {achievements.map((a, i) => (
                <li key={a} className="flex gap-4 border-b border-neutral-200 py-5 text-sm leading-relaxed">
                  <span className="font-mono text-xs text-neutral-400">{String(i + 1).padStart(2, "0")}</span>
                  {a}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
