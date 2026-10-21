import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/AnimatedSection";
import { GithubIcon } from "@/components/ui/SocialIcons";
import OtherProjectsGrid from "@/components/sections/OtherProjectsGrid";
import { featuredProjects, otherProjects, type FeaturedProject } from "@/data/portfolio";

function TechList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {items.map((t) => (
        <li key={t} className="border border-neutral-300 px-2.5 py-1 font-mono text-xs text-neutral-700">
          {t}
        </li>
      ))}
    </ul>
  );
}

function ProjectLinks({ project }: { project: FeaturedProject }) {
  if (!project.github && !project.links?.length) return null;
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium"
          aria-label={`${project.title} source code on GitHub`}
        >
          <GithubIcon size={16} />
          <span className="link">Source</span>
        </a>
      )}
      {project.links?.map((l) => (
        <a
          key={l.url}
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium"
          aria-label={`${project.title} — ${l.label}`}
        >
          <span className="link">{l.label}</span>
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

function FeaturedRow({ project, index }: { project: FeaturedProject; index: number }) {
  const hasImage = Boolean(project.image);
  return (
    <article className="grid gap-8 border-t border-neutral-200 py-12 md:py-16 lg:grid-cols-12 lg:gap-12">
      <div className={hasImage ? "lg:col-span-6" : "lg:col-span-8"}>
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs text-neutral-500">{String(index + 1).padStart(2, "0")}</span>
          {project.status && (
            <span className="border border-black px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.12em]">
              {project.status}
            </span>
          )}
        </div>
        <h3 className="text-2xl font-semibold tracking-tight md:text-4xl">{project.title}</h3>
        <p className="mt-2 text-base font-medium text-neutral-500 md:text-lg">{project.summary}</p>
        <p className="mt-5 max-w-2xl leading-relaxed text-neutral-700">{project.description}</p>

        {project.highlights && (
          <ul className="mt-5 max-w-2xl space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed text-neutral-700">
                <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-black" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6">
          <TechList items={project.tech} />
        </div>
        <div className="mt-6">
          <ProjectLinks project={project} />
        </div>
      </div>

      {hasImage && (
        <div className="lg:col-span-6">
          <div className="overflow-hidden border border-neutral-200 bg-neutral-100">
            <Image
              src={project.image!}
              alt={project.imageAlt ?? `${project.title} screenshot`}
              width={1440}
              height={900}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="h-auto w-full grayscale"
            />
          </div>
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" labelledBy="projects-title" className="border-t border-neutral-200">
      <SectionHeading
        eyebrow="02 — Work"
        title="Featured projects"
        id="projects-title"
        intro="A selection of things I’ve built or am building. Status labels are honest — where something is still in development, it says so."
      />

      <div className="border-b border-neutral-200">
        {featuredProjects.map((p, i) => (
          <Reveal key={p.title}>
            <FeaturedRow project={p} index={i} />
          </Reveal>
        ))}
      </div>

      <div className="mt-24">
        <h3 className="mb-8 text-xl font-semibold tracking-tight md:text-2xl">Other projects</h3>
        <OtherProjectsGrid projects={otherProjects} />
      </div>
    </Section>
  );
}
