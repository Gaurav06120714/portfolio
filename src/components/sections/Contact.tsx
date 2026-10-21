"use client";
import { useState } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { SocialIcon } from "@/components/ui/SocialIcons";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "sent" | "error";
type Field = "name" | "email" | "message";

const MAX_MESSAGE = 1000;
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function Contact() {
  const [form, setForm] = useState<Record<Field, string>>({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const errors: Record<Field, string> = {
    name: touched.name && !form.name.trim() ? "Please enter your name." : "",
    email: touched.email && !isEmail(form.email) ? "Please enter a valid email address." : "",
    message: touched.message && !form.message.trim() ? "Please write a message." : "",
  };
  const isValid = form.name.trim() && isEmail(form.email) && form.message.trim();

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const blur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setTouched((t) => ({ ...t, [e.target.name]: true }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
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
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error || "The message couldn’t be sent.");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTouched({});
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "The message couldn’t be sent.");
    }
  }

  const inputClass = (field: Field) =>
    cn(
      "w-full border bg-black px-4 py-3 text-sm text-white placeholder:text-neutral-500",
      "focus:border-white focus:outline-none disabled:opacity-50",
      errors[field] ? "border-white" : "border-neutral-700",
    );

  return (
    <Section id="contact" dark labelledBy="contact-title">
      <SectionHeading
        eyebrow="07 — Contact"
        title="Let’s work together"
        id="contact-title"
        dark
        intro={`${personalInfo.availability} The quickest way to reach me is email.`}
      />

      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <a
            href={`mailto:${personalInfo.email}`}
            className="link block break-all text-xl font-medium md:text-2xl"
          >
            {personalInfo.email}
          </a>

          <dl className="mt-10 divide-y divide-neutral-800 border-y border-neutral-800 text-sm">
            <div className="flex justify-between gap-4 py-4">
              <dt className="text-neutral-400">Phone</dt>
              <dd>
                <a href={`tel:${personalInfo.phone.replace(/\s/g, "")}`} className="link">
                  {personalInfo.phone}
                </a>
              </dd>
            </div>
            <div className="flex justify-between gap-4 py-4">
              <dt className="text-neutral-400">Location</dt>
              <dd>{personalInfo.location}</dd>
            </div>
          </dl>

          <ul className="mt-10 space-y-3">
            {socialLinks.map((s) => (
              <li key={s.name}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-neutral-800 pb-3 text-sm"
                >
                  <span className="flex items-center gap-3">
                    <SocialIcon name={s.icon} size={16} />
                    {s.name}
                    {s.handle && <span className="text-neutral-500">{s.handle}</span>}
                  </span>
                  <ArrowUpRight size={16} aria-hidden="true" className="text-neutral-500 transition-colors group-hover:text-white" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={submit} noValidate className="space-y-6 lg:col-span-7" aria-describedby="form-status">
          <div className="grid gap-6 sm:grid-cols-2">
            {(
              [
                { name: "name", label: "Name", type: "text", autoComplete: "name", placeholder: "Your name" },
                { name: "email", label: "Email", type: "email", autoComplete: "email", placeholder: "you@example.com" },
              ] as const
            ).map((f) => (
              <div key={f.name}>
                <label htmlFor={`contact-${f.name}`} className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-neutral-400">
                  {f.label}
                </label>
                <input
                  id={`contact-${f.name}`}
                  name={f.name}
                  type={f.type}
                  autoComplete={f.autoComplete}
                  placeholder={f.placeholder}
                  value={form[f.name]}
                  onChange={update}
                  onBlur={blur}
                  required
                  maxLength={f.name === "name" ? 100 : 200}
                  disabled={status === "sending"}
                  aria-invalid={Boolean(errors[f.name])}
                  aria-describedby={errors[f.name] ? `contact-${f.name}-error` : undefined}
                  className={inputClass(f.name)}
                />
                {errors[f.name] && (
                  <p id={`contact-${f.name}-error`} className="mt-2 text-xs text-neutral-300">
                    {errors[f.name]}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div>
            <label htmlFor="contact-message" className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-neutral-400">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={6}
              placeholder="Tell me about the role, project or idea."
              value={form.message}
              onChange={update}
              onBlur={blur}
              required
              maxLength={MAX_MESSAGE}
              disabled={status === "sending"}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "contact-message-error" : "contact-message-count"}
              className={cn(inputClass("message"), "resize-y")}
            />
            <div className="mt-2 flex justify-between gap-4 text-xs text-neutral-400">
              <span id="contact-message-error">{errors.message}</span>
              <span id="contact-message-count">
                {form.message.length}/{MAX_MESSAGE}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" && <Loader2 size={16} className="animate-spin" aria-hidden="true" />}
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            <p id="form-status" role="status" aria-live="polite" className="text-sm text-neutral-300">
              {status === "sent" && "Thanks — your message was sent. I’ll reply by email."}
              {status === "error" && (
                <>
                  {errorMsg} You can also email me at{" "}
                  <a href={`mailto:${personalInfo.email}`} className="link">
                    {personalInfo.email}
                  </a>
                  .
                </>
              )}
            </p>
          </div>
        </form>
      </div>
    </Section>
  );
}
