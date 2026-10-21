import { ImageResponse } from "next/og";
import { personalInfo } from "@/data/portfolio";

export const alt = `${personalInfo.name} — ${personalInfo.roles[0]}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Black-and-white social preview card, generated at build time.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          color: "#ffffff",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 4, textTransform: "uppercase", color: "#a3a3a3" }}>
          {personalInfo.roles.join("  /  ")}
        </div>
        <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1.02, letterSpacing: -2 }}>{personalInfo.name}</div>
        <div style={{ fontSize: 30, color: "#d4d4d4", maxWidth: 980, lineHeight: 1.4 }}>
          Building software products, AI-powered applications and practical technology solutions.
        </div>
      </div>
    ),
    size,
  );
}
