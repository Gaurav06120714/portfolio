import { cn } from "@/lib/utils";

interface Props {
  /** Small label above the title, e.g. "02 — Work". */
  eyebrow: string;
  title: string;
  intro?: string;
  dark?: boolean;
  id?: string;
}

export default function SectionHeading({ eyebrow, title, intro, dark, id }: Props) {
  return (
    <header className="mb-12 md:mb-16">
      <p
        className={cn(
          "mb-4 font-mono text-xs uppercase tracking-[0.2em]",
          dark ? "text-neutral-400" : "text-neutral-500",
        )}
      >
        {eyebrow}
      </p>
      <h2 id={id} className="text-3xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed md:text-lg",
            dark ? "text-neutral-300" : "text-neutral-600",
          )}
        >
          {intro}
        </p>
      )}
    </header>
  );
}
