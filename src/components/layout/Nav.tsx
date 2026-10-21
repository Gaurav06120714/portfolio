"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Border once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    // Includes the hero (#top) so nothing is highlighted while it's in view.
    const sections = ["#top", ...navLinks.map((l) => l.href)]
      .map((href) => document.querySelector<HTMLElement>(href))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id === "top" ? "" : `#${e.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Mobile menu: close on Escape, lock page scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm transition-[border-color] duration-200",
        "border-b",
        scrolled || open ? "border-neutral-200" : "border-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#top" className="text-sm font-semibold tracking-tight" onClick={() => setOpen(false)}>
          {personalInfo.shortName}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? "true" : undefined}
                className={cn(
                  "text-sm transition-colors hover:text-black",
                  active === link.href ? "text-black underline underline-offset-8" : "text-neutral-500",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black bg-black px-4 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            >
              Résumé
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 p-2 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="h-[calc(100dvh-4rem)] overflow-y-auto bg-white px-5 pb-10 sm:px-8 md:hidden">
          <ul className="flex flex-col border-t border-neutral-200">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-neutral-200">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-5 text-2xl font-medium tracking-tight"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block border border-black bg-black px-5 py-3 text-sm text-white"
          >
            View résumé
          </a>
        </div>
      )}
    </header>
  );
}
