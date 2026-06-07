"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about", num: "01" },
  { label: "Skills", href: "#skills", num: "02" },
  { label: "Experience", href: "#experience", num: "03" },
  { label: "Projects", href: "#projects", num: "04" },
  { label: "Contact", href: "#contact", num: "05" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setHidden(y > lastY && y > 100);
      setLastY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--bg-primary)]/90 backdrop-blur-md shadow-lg shadow-black/20 border-b border-[var(--border)]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-9 h-9 bg-violet-600 rounded-lg flex items-center justify-center text-white font-bold font-mono text-lg shadow-lg shadow-violet-500/30">
              G
            </div>
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <ol className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="group px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-violet-400 transition-colors duration-200"
                  >
                    <span className="font-mono text-violet-400 text-xs mr-1">{link.num}.</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ol>

            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="ml-2 p-2 rounded-lg text-[var(--text-secondary)] hover:text-violet-400 hover:bg-violet-500/10 transition-all duration-200"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            {/* Resume button */}
            <a
              href="/resume.pdf"
              download
              className="ml-3 flex items-center gap-2 px-4 py-2 text-sm font-mono font-medium text-violet-400 border border-violet-400 rounded-lg hover:bg-violet-400/10 transition-all duration-200"
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-[var(--text-secondary)] hover:text-violet-400 transition-colors"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-[var(--text-secondary)] hover:text-violet-400 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed right-0 top-0 h-full w-72 z-50 bg-[var(--bg-card)] border-l border-[var(--border)] shadow-2xl md:hidden flex flex-col"
            >
              <div className="flex justify-end p-5">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-[var(--text-secondary)] hover:text-violet-400"
                >
                  <X size={22} />
                </button>
              </div>
              <nav className="flex flex-col items-center justify-center flex-1 gap-6 pb-16">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => handleNavClick(link.href)}
                    className="flex flex-col items-center gap-1 text-[var(--text-primary)] hover:text-violet-400 transition-colors"
                  >
                    <span className="font-mono text-violet-400 text-xs">{link.num}.</span>
                    <span className="text-lg font-semibold">{link.label}</span>
                  </motion.button>
                ))}
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  href="/resume.pdf"
                  download
                  className="mt-4 flex items-center gap-2 px-6 py-3 text-sm font-mono text-violet-400 border border-violet-400 rounded-lg hover:bg-violet-400/10 transition-all"
                >
                  <Download size={14} />
                  Resume
                </motion.a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
