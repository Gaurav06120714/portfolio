import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  id: string;
  children: ReactNode;
  /** Black background with white text. */
  dark?: boolean;
  className?: string;
  /** id of the heading that labels this section (for screen readers). */
  labelledBy?: string;
}

/** Page section with consistent width, gutters and vertical rhythm. */
export default function Section({ id, children, dark, className, labelledBy }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(dark ? "section-dark bg-black text-white" : "bg-white text-black", className)}
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">{children}</div>
    </section>
  );
}
