"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { personalInfo } from "@/data/portfolio";
import { GithubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const isEmailValid = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const errors = {
    name:    touched.name    && !form.name.trim()          ? "Name is required"             : "",
    email:   touched.email   && !isEmailValid(form.email)  ? "Valid email is required"      : "",
    message: touched.message && !form.message.trim()       ? "Message cannot be empty"      : "",
  };

  const isValid = form.name.trim() && isEmailValid(form.email) && form.message.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Touch all fields to show errors
    setTouched({ name: true, email: true, message: true });
    if (!isValid) return;

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTouched({});
      setTimeout(() => setStatus("idle"), 8000);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setStatus("error");
      setErrorMsg(message + " — or email me directly at " + personalInfo.email);
      setTimeout(() => setStatus("idle"), 10000);
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 bg-[var(--bg-primary)] border rounded-xl text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-1 transition-all disabled:opacity-50 ${
      errors[field as keyof typeof errors]
        ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/20"
        : "border-[var(--border)] focus:border-violet-500 focus:ring-violet-500/20"
    }`;

  return (
    <AnimatedSection id="contact" className="py-28 px-6 max-w-6xl mx-auto">
      <SectionHeading number="07" title="Get In Touch" />

      <div className="grid lg:grid-cols-2 gap-16 max-w-5xl">

        {/* ── Left — info ── */}
        <div>
          <p className="font-mono text-violet-400 text-xs tracking-[0.25em] uppercase mb-3">
            What&apos;s Next?
          </p>
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6 leading-tight">
            Let&apos;s Build Something{" "}
            <span className="text-violet-400">Together.</span>
          </h3>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-8 text-base">
            I&apos;m currently open to new opportunities — whether it&apos;s a full-time role,
            internship, freelance project, or a great idea you&apos;d like to build together.
            My inbox is always open!
          </p>

          {/* Contact details */}
          <div className="space-y-3 mb-8">
            {[
              { icon: Mail,  label: "Email",    text: personalInfo.email,    href: `mailto:${personalInfo.email}` },
              { icon: Phone, label: "Phone",    text: personalInfo.phone,    href: `tel:${personalInfo.phone}`    },
              { icon: MapPin,label: "Location", text: personalInfo.location, href: null                           },
            ].map(({ icon: Icon, label, text, href }) => (
              <div key={label} className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/20 transition-colors">
                  <Icon size={15} className="text-violet-400" />
                </div>
                {href ? (
                  <a href={href} className="text-sm text-[var(--text-secondary)] hover:text-violet-400 transition-colors break-all">
                    {text}
                  </a>
                ) : (
                  <span className="text-sm text-[var(--text-secondary)]">{text}</span>
                )}
              </div>
            ))}
          </div>

          {/* Social buttons */}
          <div className="flex gap-3 flex-wrap">
            {[
              { href: "https://github.com/Gaurav06120714",                             label: "GitHub",   icon: <GithubIcon size={15} />   },
              { href: "https://www.linkedin.com/in/teegulla-gaurav-ganesh-6882b2380/", label: "LinkedIn", icon: <LinkedInIcon size={15} /> },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl text-sm text-[var(--text-secondary)] hover:text-violet-400 hover:border-violet-500/50 transition-all duration-200"
              >
                {s.icon}
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Right — form ── */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          noValidate
          className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 md:p-8 space-y-5 hover:border-violet-500/20 transition-colors"
        >
          {/* Name + Email row */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "name",  label: "Name",  type: "text",  placeholder: "Your full name" },
              { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
            ].map((f) => (
              <div key={f.name}>
                <label className="block text-xs font-mono text-[var(--text-muted)] mb-1.5 uppercase tracking-wider">
                  {f.label} <span className="text-violet-400">*</span>
                </label>
                <input
                  type={f.type}
                  name={f.name}
                  value={form[f.name as keyof typeof form]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={f.placeholder}
                  disabled={status === "sending"}
                  className={inputClass(f.name)}
                />
                {errors[f.name as keyof typeof errors] && (
                  <p className="text-red-400 text-xs mt-1 font-mono">
                    {errors[f.name as keyof typeof errors]}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-mono text-[var(--text-muted)] mb-1.5 uppercase tracking-wider">
              Message <span className="text-violet-400">*</span>
            </label>
            <textarea
              name="message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Tell me about your project, opportunity, or just say hi..."
              disabled={status === "sending"}
              className={`${inputClass("message")} resize-none`}
            />
            <div className="flex justify-between items-center mt-1">
              {errors.message ? (
                <p className="text-red-400 text-xs font-mono">{errors.message}</p>
              ) : <span />}
              <span className={`text-xs font-mono ${form.message.length > 800 ? "text-orange-400" : "text-[var(--text-muted)]"}`}>
                {form.message.length}/1000
              </span>
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-violet-600 hover:bg-violet-500 disabled:opacity-70 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5 disabled:hover:translate-y-0 text-sm cursor-pointer disabled:cursor-not-allowed"
          >
            {status === "sending" ? (
              <><Loader2 size={16} className="animate-spin" /> Sending your message...</>
            ) : status === "sent" ? (
              <><CheckCircle size={16} /> Message Sent Successfully!</>
            ) : (
              <><Send size={16} /> Send Message</>
            )}
          </button>

          {/* Success / Error banners */}
          <AnimatePresence>
            {status === "sent" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/25 rounded-xl"
              >
                <CheckCircle size={16} className="text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-green-300">Message delivered! 🚀</p>
                  <p className="text-xs text-green-400/70 mt-0.5">
                    I&apos;ll get back to you at <strong>{personalInfo.email}</strong> as soon as possible.
                  </p>
                </div>
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/25 rounded-xl"
              >
                <AlertCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-300">{errorMsg}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </AnimatedSection>
  );
}
