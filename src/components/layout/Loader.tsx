"use client";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isLoading: boolean;
}

const letters = "Gaurav Ganesh Teegulla".split("");

export default function Loader({ isLoading }: Props) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, delay: 0.3 } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0d0d1a] overflow-hidden"
        >
          {/* Radial glow */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 3, opacity: 0.15 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute w-96 h-96 rounded-full bg-violet-600 blur-3xl pointer-events-none"
          />

          {/* Welcome line */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-mono text-violet-400 text-xs tracking-[0.4em] uppercase mb-6"
          >
            Welcome to my portfolio
          </motion.p>

          {/* Animated name — each letter staggers in */}
          <div className="flex flex-wrap justify-center gap-0 mb-8 px-6">
            {letters.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: 0.4 + i * 0.05,
                  duration: 0.4,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-tight ${
                  char === " " ? "w-4" : ""
                } ${i < 6 ? "text-white" : "text-violet-400"}`}
              >
                {char === " " ? " " : char}
              </motion.span>
            ))}
          </div>

          {/* Animated progress bar */}
          <motion.div className="w-48 h-px bg-violet-900 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.3, duration: 1.4, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-violet-600 to-violet-400"
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1.2, duration: 0.4 }}
            className="font-mono text-[var(--text-muted)] text-xs mt-4 tracking-widest"
          >
            Full-Stack Developer & AI/ML Engineer
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
