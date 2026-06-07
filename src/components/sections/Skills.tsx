"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { skills } from "@/data/portfolio";

const categoryMeta: Record<string, { icon: string; gradient: string; border: string }> = {
  "Languages":      { icon: "⌨️", gradient: "from-blue-500/10 to-indigo-500/5",    border: "border-blue-500/20"   },
  "Frontend":       { icon: "🎨", gradient: "from-pink-500/10 to-rose-500/5",       border: "border-pink-500/20"   },
  "Backend":        { icon: "⚙️", gradient: "from-green-500/10 to-emerald-500/5",   border: "border-green-500/20"  },
  "AI / ML":        { icon: "🤖", gradient: "from-orange-500/10 to-amber-500/5",    border: "border-orange-500/20" },
  "Databases":      { icon: "🗄️", gradient: "from-cyan-500/10 to-teal-500/5",       border: "border-cyan-500/20"   },
  "Tools & DevOps": { icon: "🛠️", gradient: "from-violet-500/10 to-purple-500/5",  border: "border-violet-500/20" },
};

const tagColors: Record<string, string> = {
  "Languages":      "bg-blue-500/10   text-blue-300   border-blue-500/20",
  "Frontend":       "bg-pink-500/10   text-pink-300   border-pink-500/20",
  "Backend":        "bg-green-500/10  text-green-300  border-green-500/20",
  "AI / ML":        "bg-orange-500/10 text-orange-300 border-orange-500/20",
  "Databases":      "bg-cyan-500/10   text-cyan-300   border-cyan-500/20",
  "Tools & DevOps": "bg-violet-500/10 text-violet-300 border-violet-500/20",
};

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="py-28 px-6 max-w-6xl mx-auto">
      <SectionHeading number="02" title="Skills & Technologies" />

      {/* Summary bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex flex-wrap gap-3 mb-10"
      >
        {Object.entries(skills).map(([cat, items]) => (
          <span
            key={cat}
            className={`px-3 py-1 rounded-full text-xs font-mono border ${tagColors[cat] ?? "bg-violet-500/10 text-violet-300 border-violet-500/20"}`}
          >
            {categoryMeta[cat]?.icon} {cat} · {items.length}
          </span>
        ))}
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(skills).map(([category, items], catIdx) => {
          const meta = categoryMeta[category] ?? { icon: "💡", gradient: "from-violet-500/10 to-purple-500/5", border: "border-violet-500/20" };
          const tagColor = tagColors[category] ?? "bg-violet-500/10 text-violet-300 border-violet-500/20";
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.07, duration: 0.45 }}
              className={`group relative bg-gradient-to-br ${meta.gradient} bg-[var(--bg-card)] border ${meta.border} rounded-2xl p-6 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)] flex items-center justify-center text-xl shadow-sm">
                  {meta.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] text-sm tracking-wide uppercase">
                    {category}
                  </h3>
                  <p className="text-[var(--text-muted)] text-xs">{items.length} technologies</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className={`px-2.5 py-1 text-xs font-mono rounded-lg border transition-colors ${tagColor}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Decorative corner glow */}
              <div className="absolute bottom-0 right-0 w-20 h-20 rounded-tl-3xl rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-tl from-white/5 to-transparent pointer-events-none" />
            </motion.div>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
