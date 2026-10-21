import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "gauravganeshteegulla@gmail.com";
const FROM_EMAIL = "onboarding@resend.dev"; // use a verified domain once one exists

const LIMITS = { name: 100, email: 200, message: 1000 };

// Visitor input goes into an HTML email — escape it so nobody can inject markup.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  // Created per request so the build doesn't fail when RESEND_API_KEY is unset.
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "The contact form isn’t configured yet." }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, message } = (body ?? {}) as Record<string, unknown>;
  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const clean = { name: name.trim(), email: email.trim(), message: message.trim() };
  if (!clean.name || !clean.email || !clean.message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }
  if (
    clean.name.length > LIMITS.name ||
    clean.email.length > LIMITS.email ||
    clean.message.length > LIMITS.message
  ) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const safe = {
    name: escapeHtml(clean.name),
    email: escapeHtml(clean.email),
    message: escapeHtml(clean.message).replace(/\n/g, "<br />"),
  };

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: `Portfolio Contact <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: clean.email,
      subject: `New message from ${clean.name.replace(/[\r\n]+/g, " ")} — Portfolio`,
      text: `From: ${clean.name} <${clean.email}>\n\n${clean.message}`,
      html: `<!DOCTYPE html>
<html><body style="margin:0;padding:24px;background:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#000000;">
  <div style="max-width:560px;margin:0 auto;border:1px solid #000000;">
    <div style="background:#000000;color:#ffffff;padding:20px 24px;font-size:16px;font-weight:600;">New portfolio message</div>
    <div style="padding:24px;font-size:14px;line-height:1.6;">
      <p style="margin:0 0 4px;"><strong>From:</strong> ${safe.name}</p>
      <p style="margin:0 0 20px;"><strong>Email:</strong> <a href="mailto:${safe.email}" style="color:#000000;">${safe.email}</a></p>
      <div style="border-top:1px solid #dddddd;padding-top:16px;">${safe.message}</div>
    </div>
  </div>
</body></html>`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "The message couldn’t be sent." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "The message couldn’t be sent." }, { status: 500 });
  }
}
