import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "gauravganeshteegulla@gmail.com";
const FROM_EMAIL = "onboarding@resend.dev"; // Use this until you verify a domain

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `📬 New message from ${name} — Portfolio Contact`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body style="margin:0;padding:0;background:#0d0d1a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
          <div style="max-width:560px;margin:40px auto;background:#14142a;border-radius:16px;overflow:hidden;border:1px solid #1e1e3f;">

            <!-- Header -->
            <div style="background:linear-gradient(135deg,#7c3aed,#6d28d9);padding:32px 32px 24px;">
              <div style="width:40px;height:40px;background:rgba(255,255,255,0.2);border-radius:10px;display:inline-flex;align-items:center;justify-content:center;margin-bottom:12px;">
                <span style="color:white;font-weight:700;font-size:18px;font-family:monospace;">G</span>
              </div>
              <h1 style="margin:0;color:white;font-size:22px;font-weight:700;letter-spacing:-0.3px;">
                New Portfolio Message
              </h1>
              <p style="margin:6px 0 0;color:rgba(255,255,255,0.7);font-size:14px;">
                Someone reached out via your portfolio contact form
              </p>
            </div>

            <!-- Body -->
            <div style="padding:28px 32px;">

              <!-- Sender info -->
              <div style="background:#0d0d1a;border-radius:12px;padding:20px;margin-bottom:20px;border:1px solid #1e1e3f;">
                <table style="width:100%;border-collapse:collapse;">
                  <tr>
                    <td style="padding:6px 0;width:70px;vertical-align:top;">
                      <span style="color:#6060a0;font-size:12px;font-family:monospace;text-transform:uppercase;letter-spacing:0.08em;">From</span>
                    </td>
                    <td style="padding:6px 0;">
                      <span style="color:#e8e8f0;font-size:14px;font-weight:600;">${name}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;vertical-align:top;">
                      <span style="color:#6060a0;font-size:12px;font-family:monospace;text-transform:uppercase;letter-spacing:0.08em;">Email</span>
                    </td>
                    <td style="padding:6px 0;">
                      <a href="mailto:${email}" style="color:#a78bfa;font-size:14px;text-decoration:none;">${email}</a>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Message -->
              <div style="margin-bottom:24px;">
                <p style="margin:0 0 10px;color:#6060a0;font-size:12px;font-family:monospace;text-transform:uppercase;letter-spacing:0.08em;">Message</p>
                <div style="background:#0d0d1a;border-radius:12px;padding:20px;border:1px solid #1e1e3f;border-left:3px solid #7c3aed;">
                  <p style="margin:0;color:#a0a0c0;font-size:15px;line-height:1.7;white-space:pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
                </div>
              </div>

              <!-- Reply CTA -->
              <a href="mailto:${email}?subject=Re: Your message to Gaurav Ganesh"
                 style="display:block;text-align:center;background:#7c3aed;color:white;padding:14px 24px;border-radius:10px;text-decoration:none;font-weight:600;font-size:14px;letter-spacing:0.02em;">
                ↩ Reply to ${name}
              </a>
            </div>

            <!-- Footer -->
            <div style="padding:16px 32px 24px;border-top:1px solid #1e1e3f;text-align:center;">
              <p style="margin:0;color:#6060a0;font-size:12px;font-family:monospace;">
                Sent from your portfolio · gauravganesh.dev
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("API route error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
