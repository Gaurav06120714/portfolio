import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/layout/Providers";
import { personalInfo, siteUrl, socialLinks } from "@/data/portfolio";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

const title = `${personalInfo.name} — ${personalInfo.roles[0]}`;
const description =
  "Portfolio of Gaurav Ganesh Teegulla, a Computer Science and Engineering (Data Science) student building software products, AI-powered applications and practical technology solutions.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s — ${personalInfo.name}` },
  description,
  keywords: [
    "Gaurav Ganesh Teegulla",
    "Software Developer",
    "Data Science Student",
    "Product Builder",
    "Portfolio",
    "SNIST",
    "Hyderabad",
  ],
  authors: [{ name: personalInfo.name, url: personalInfo.github }],
  creator: personalInfo.name,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: personalInfo.name,
    locale: "en_US",
    type: "profile",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  jobTitle: personalInfo.roles[0],
  url: siteUrl,
  email: `mailto:${personalInfo.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" },
  alumniOf: "Sreenidhi Institute of Science and Technology",
  sameAs: socialLinks.map((s) => s.url),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-white text-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
