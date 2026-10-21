"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import type { OtherProject } from "@/data/portfolio";

const INITIAL = 6;

export default function OtherProjectsGrid({ projects }: { projects: OtherProject[] }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL);

  return (
    <>
      <ul id="other-projects" className="grid gap-px border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <li key={p.title} className="flex flex-col bg-white p-6">
            <div className="mb-3 flex items-start justify-between gap-4">
              <h4 className="font-semibold tracking-tight">{p.title}</h4>
              <div className="flex shrink-0 items-center gap-3 text-neutral-500">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} source code on GitHub`}
                    className="transition-colors hover:text-black"
                  >
                    <GithubIcon size={17} />
                  </a>
                )}
                {p.external && (
                  <a
                    href={p.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} live site`}
                    className="transition-colors hover:text-black"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                )}
              </div>
            </div>
            {p.status && (
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">{p.status}</p>
            )}
            <p className="mb-5 flex-1 text-sm leading-relaxed text-neutral-600">{p.description}</p>
            <p className="font-mono text-xs text-neutral-500">{p.tech.join(" · ")}</p>
          </li>
        ))}
      </ul>

      {projects.length > INITIAL && (
        <div className="mt-8">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
            aria-controls="other-projects"
            className="border border-black px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black hover:text-white"
          >
            {showAll ? "Show fewer" : `Show all ${projects.length} projects`}
          </button>
        </div>
      )}
    </>
  );
}
