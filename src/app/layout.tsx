import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/layout/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gaurav Ganesh Teegulla | Full-Stack Developer & AI/ML Engineer",
  description:
    "Portfolio of Gaurav Ganesh Teegulla — Computer Science undergraduate at SNIST, Hyderabad. Full-Stack Developer and AI/ML Engineer specializing in React, Node.js, Python, and Machine Learning.",
  keywords: [
    "Gaurav Ganesh Teegulla",
    "Full Stack Developer",
    "AI ML Engineer",
    "React Developer",
    "Python Developer",
    "Portfolio",
    "SNIST",
    "Hyderabad",
  ],
  authors: [{ name: "Gaurav Ganesh Teegulla" }],
  creator: "Gaurav Ganesh Teegulla",
  openGraph: {
    title: "Gaurav Ganesh Teegulla | Full-Stack Developer & AI/ML Engineer",
    description:
      "Computer Science undergraduate building full-stack apps, AI systems, and low-level software. Check out VyroOS, VyroBrowser, and more.",
    url: "https://gauravganesh.dev",
    siteName: "Gaurav Ganesh Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Ganesh Teegulla | Full-Stack Developer & AI/ML Engineer",
    description: "Computer Science undergraduate building full-stack apps, AI systems, and low-level software.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d0d1a" },
    { media: "(prefers-color-scheme: light)", color: "#f8f8ff" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-mesh">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
