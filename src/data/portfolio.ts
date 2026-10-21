// ─────────────────────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file to update the site —
// components only read from it. Keep claims factual: if something isn't
// finished or tested on real hardware, say so in the text.
// ─────────────────────────────────────────────────────────────────────────────

export type SocialIcon = "github" | "linkedin" | "leetcode" | "hackerrank" | "instagram";

export interface SocialLink {
  name: string;
  url: string;
  icon: SocialIcon;
  handle?: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface FeaturedProject {
  title: string;
  /** One-line summary shown under the title. */
  summary: string;
  /** Longer, factual description. */
  description: string;
  /** Short factual points. Omit rather than guess. */
  highlights?: string[];
  tech: string[];
  /** e.g. "In development". Leave undefined when unknown. */
  status?: string;
  github?: string;
  links?: ProjectLink[];
  /** Path under /public. Leave undefined when there is no real screenshot. */
  image?: string;
  imageAlt?: string;
}

export interface OtherProject {
  title: string;
  description: string;
  tech: string[];
  status?: string;
  github?: string;
  external?: string;
}

export interface Experience {
  company: string;
  title: string;
  url?: string;
  duration: string;
  bullets: string[];
}

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://gauravganeshportfolio.netlify.app";

export const personalInfo = {
  name: "Gaurav Ganesh Teegulla",
  shortName: "Gaurav Teegulla",
  title: "Software Developer | Data Science Student | Product Builder",
  roles: ["Software Developer", "Data Science Student", "Product Builder"],
  intro:
    "I’m a Computer Science student specializing in Data Science, passionate about building software products, AI-powered applications, and practical technology solutions.",
  email: "gauravganeshteegulla@gmail.com",
  phone: "+91 9515081562",
  location: "Hyderabad, India",
  github: "https://github.com/Gaurav06120714",
  bio: [
    "I’m a B.Tech student in Computer Science and Engineering (Data Science) at Sreenidhi Institute of Science and Technology, Hyderabad.",
    "I like taking an idea all the way to something people can use — desktop apps, mobile apps, web platforms and machine-learning projects. Recently that has meant an Electron browser with a local AI assistant, an offline Bluetooth messenger with a Rust core, and ML projects built around real sensor data.",
    "I care about building things that work, explaining honestly what is finished and what isn’t, and learning whatever a project needs along the way.",
  ],
  resumePath: "/resume.pdf",
  availability: "Open to internships, full-time roles and freelance projects.",
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/Gaurav06120714", icon: "github", handle: "Gaurav06120714" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/teegulla-gaurav-ganesh-6882b2380/", icon: "linkedin" },
  { name: "LeetCode", url: "https://leetcode.com/u/gauravganesh/", icon: "leetcode", handle: "gauravganesh" },
  { name: "HackerRank", url: "https://www.hackerrank.com/profile/gannu1214", icon: "hackerrank", handle: "gannu1214" },
  { name: "Instagram", url: "https://www.instagram.com/gaurav_1207_", icon: "instagram" },
];

export const featuredProjects: FeaturedProject[] = [
  {
    title: "VyroBrowser",
    summary: "Desktop browser with a local AI assistant.",
    description:
      "A desktop browser built with Electron, React, TypeScript and Tailwind CSS that explores modern browsing features alongside local AI. The assistant runs through Ollama on the user’s own machine, so prompts aren’t sent to a cloud service.",
    highlights: [
      "Tabs, command palette, reader mode, bookmarks, history and downloads",
      "Network-level ad-blocking with a per-site toggle",
      "Context isolation and an IPC allowlist between the UI and Node.js",
      "Installers for macOS, Windows and Linux on GitHub Releases (not yet code-signed)",
    ],
    tech: ["Electron", "React", "TypeScript", "Tailwind CSS", "Vite", "Ollama"],
    github: "https://github.com/Gaurav06120714/VyroBrowser",
    links: [{ label: "Releases", url: "https://github.com/Gaurav06120714/VyroBrowser/releases" }],
  },
  {
    title: "VyroLink",
    summary: "Offline-first, end-to-end encrypted messaging.",
    description:
      "An offline-first messaging app that sends end-to-end encrypted messages phone to phone over Bluetooth — no internet or servers. When the recipient is out of range, nearby devices can relay a message they cannot read. Built on a Rust core with Swift and Kotlin native layers; Wi-Fi Aware is being explored as an additional transport.",
    highlights: [
      "Store-and-forward relaying between nearby devices",
      "Rust core with an automated test suite, including malicious-relay tests",
      "Tested on the iOS simulator and Android emulator — real-device Bluetooth testing is still to come",
    ],
    tech: ["Rust", "Swift", "Kotlin", "Flutter", "Bluetooth LE", "Wi-Fi Aware", "E2E encryption"],
    status: "In development",
    github: "https://github.com/Gaurav06120714/vyrolink",
    links: [{ label: "Website", url: "https://vyrolink.netlify.app" }],
    image: "/projects/vyrolink.png",
    imageAlt: "VyroLink project website showing a message delivery timeline on a phone",
  },
  {
    title: "Ksheera Setu",
    summary: "AI-assisted bovine mastitis forecasting and monitoring.",
    description:
      "A project that uses sensor data and machine learning to help forecast and monitor bovine mastitis, an udder infection in dairy cattle.",
    tech: ["Machine Learning", "Sensor Data", "Forecasting"],
  },
  {
    title: "SafeRoute",
    summary: "Women’s safety application.",
    description:
      "A women’s safety application with its own backend and an administrative dashboard, built with FastAPI and related technologies.",
    tech: ["Python", "FastAPI", "Admin Dashboard"],
  },
  {
    title: "ATTENDO",
    summary: "Smart attendance system.",
    description:
      "A smart attendance-system project exploring several ways to verify check-ins: dynamic QR codes, facial recognition, device authentication and Wi-Fi verification.",
    tech: ["Dynamic QR Codes", "Facial Recognition", "Device Authentication", "Wi-Fi Verification"],
  },
];

export const otherProjects: OtherProject[] = [
  {
    title: "CodeVault",
    description:
      "One dashboard for competitive-programming platforms that publishes accepted solutions to a searchable GitHub repo. Next.js + Express + Prisma monorepo with a browser extension and mobile app; built by a 2-person team.",
    tech: ["Next.js", "TypeScript", "Express", "PostgreSQL", "Redis"],
    github: "https://github.com/Gaurav06120714/CodeVault",
  },
  {
    title: "VyroOS",
    description:
      "A from-scratch x86_64 OS in C and Assembly with a GUI, a networking stack and a hand-written TLS 1.3 client. Runs in QEMU.",
    tech: ["C", "x86 Assembly", "NASM", "QEMU"],
    github: "https://github.com/Gaurav06120714/VyroOS",
  },
  {
    title: "ClubAI",
    description:
      "AI operations platform for a student club: Next.js admin dashboard, Express API, SMS messaging and an intent pipeline that confirms event attendance from free-text replies. 40+ tests.",
    tech: ["Next.js", "Express", "Drizzle", "PostgreSQL", "Ollama"],
  },
  {
    title: "ExamShield",
    description:
      "Offline evaluator for handwritten answer sheets. I owned ingestion, TrOCR handwriting OCR and question segmentation in a 3-person team.",
    tech: ["Python", "PyTorch", "TrOCR", "FastAPI"],
  },
  {
    title: "Shift",
    description:
      "macOS menu-bar utility that copies highlighted text automatically, using the macOS Accessibility APIs.",
    tech: ["Swift", "SwiftUI", "AppKit"],
  },
  {
    title: "FaceLock",
    description:
      "Windows face-unlock app. Face matching and liveness checks are done in C#/.NET 8; the Windows login integration is still being built.",
    tech: ["C#", ".NET 8", "ONNX"],
    status: "In progress",
  },
  {
    title: "VyroAgent",
    description:
      "Local voice agent for macOS: Whisper speech-to-text and an Ollama LLM mapped to system actions, fully offline.",
    tech: ["Python", "Whisper", "Ollama"],
    github: "https://github.com/Gaurav06120714/VyroAgent",
  },
  {
    title: "AI Sign Language Recognition",
    description:
      "Real-time hand-gesture recognition that converts sign language into readable text using computer vision.",
    tech: ["Python", "OpenCV", "MediaPipe"],
    github: "https://github.com/Gaurav06120714/AI-Sign-Language-Recognition-System",
  },
  {
    title: "IPL Fantasy Auction",
    description:
      "Real-time multiplayer IPL auction: up to 7 players bid on 100 players with live timers and room management.",
    tech: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    github: "https://github.com/Gaurav06120714/IPL-Auction",
  },
  {
    title: "GitHubDashboard",
    description:
      "Native macOS dashboard for GitHub contributions, streaks and activity, with one-click repo creation.",
    tech: ["Swift", "SwiftUI", "GitHub API"],
    github: "https://github.com/Gaurav06120714/GitHubDashboard",
  },
  {
    title: "VyroCoding",
    description:
      "Coding platform with shared real-time rooms, code execution in 7 languages, contests and a problem library.",
    tech: ["Next.js", "TypeScript", "WebSockets"],
    github: "https://github.com/Gaurav06120714/VyroCoding",
  },
  {
    title: "VyroMusic",
    description: "Music web app with search, playlists and recommendations.",
    tech: ["React", "TypeScript", "Node.js"],
    github: "https://github.com/Gaurav06120714/VyroMusic",
  },
  {
    title: "VyroPortify",
    description:
      "Portfolio generator: upload a resume and it drafts the copy, picks a layout and deploys a site.",
    tech: ["Next.js", "FastAPI", "Python"],
    github: "https://github.com/Gaurav06120714/VyroPortify",
  },
];

export const skills: Record<string, string[]> = {
  Languages: ["TypeScript", "JavaScript", "Python", "Rust", "Swift", "Kotlin", "Dart", "C", "C++", "C#", "Java", "SQL"],
  "Frontend & Desktop": ["React", "Next.js", "Tailwind CSS", "Electron", "Flutter", "SwiftUI"],
  Backend: ["Node.js", "Express", "FastAPI", "Prisma", "Socket.IO", "BullMQ", "REST APIs", "JWT auth"],
  "AI / ML & Data": ["scikit-learn", "Pandas", "OpenCV", "MediaPipe", "PyTorch", "Ollama", "Whisper"],
  Databases: ["PostgreSQL", "Redis", "SQLite"],
  "Tools & DevOps": ["Git", "GitHub Actions", "Docker", "Netlify", "Render", "QEMU"],
};

export const experience: Experience[] = [
  {
    company: "SkillCraft Technology",
    title: "Data Science Intern",
    duration: "2024",
    bullets: [
      "Completed 4 data science tasks: population analytics, Titanic survival EDA, Decision Tree classification and US road-accident pattern analysis.",
      "Built visualisations and analytical reports with Python, Pandas, Matplotlib and Seaborn on real-world datasets.",
      "Trained a Decision Tree classifier on the UCI Bank Marketing dataset to predict customer subscription.",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering (Data Science)",
    institution: "Sreenidhi Institute of Science and Technology",
    location: "Hyderabad, India",
    duration: "2022 – 2026",
    cgpa: "8.6",
  },
];

export const certifications = [
  { title: "Python for Data Science / Programming", issuer: "NPTEL", year: "2026" },
  { title: "Python Programming", issuer: "Udemy", year: "2025" },
  { title: "C and C++ Programming", issuer: "Coursera", year: "2024" },
];

export const achievements = [
  "Built VyroOS, an x86_64 OS from scratch with its own TLS 1.3 stack that loads real HTTPS websites",
  "Built VyroLink, an offline end-to-end encrypted Bluetooth messenger with a Rust core and 150+ automated tests",
  "Co-built CodeVault, a multi-service platform that syncs competitive-programming solutions to GitHub",
  "Active on LeetCode (gauravganesh), Codeforces and HackerRank (gannu1214)",
];
