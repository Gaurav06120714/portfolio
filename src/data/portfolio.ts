export const personalInfo = {
  name: "Gaurav Ganesh Teegulla",
  title: "Full-Stack & Systems Engineer · AI/ML",
  email: "gauravganeshteegulla@gmail.com",
  phone: "+91 9515081562",
  location: "Hyderabad, India",
  tagline: "I build things that matter.",
  bio: [
    "Hello! I'm Gaurav — a Computer Science undergraduate specializing in Data Science at Sreenidhi Institute of Science and Technology, Hyderabad. I like owning a product end to end: from the database and the API down to the bytes on the wire.",
    "On the web I build full-stack TypeScript platforms (Next.js, Express, Prisma, PostgreSQL, Redis, BullMQ). On mobile I pair a Rust core with Flutter through UniFFI, and on macOS I write native Swift utilities against the Accessibility APIs.",
    "I'm drawn to systems work — a from-scratch x86_64 OS with its own TLS 1.3 stack, and an end-to-end encrypted Bluetooth messenger — and to practical AI pipelines: local LLMs with Ollama, Whisper speech-to-text, intent classification with slot-filling, and face embeddings.",
  ],
  resumePath: "/resume.pdf",
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/Gaurav06120714", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/teegulla-gaurav-ganesh-6882b2380/", icon: "linkedin" },
  { name: "LeetCode", url: "https://leetcode.com/u/gauravganesh/", icon: "code" },
  { name: "Instagram", url: "https://www.instagram.com/gaurav_1207_", icon: "instagram" },
  { name: "HackerRank", url: "https://www.hackerrank.com/profile/gannu1214", icon: "terminal" },
];

export const skills = {
  "Languages": ["TypeScript", "JavaScript", "Python", "Rust", "Swift", "Dart", "C", "C++", "C#", "Java", "SQL", "x86 Assembly"],
  "Frontend": ["Next.js 15/16 (App Router)", "React 19", "Tailwind CSS 4", "TanStack Query", "Flutter", "SwiftUI"],
  "Backend": ["Node.js 20", "Express 5", "Prisma", "Drizzle ORM", "Zod", "Socket.IO", "BullMQ", "FastAPI", "JWT auth"],
  "AI / ML": ["Ollama (local LLMs)", "Whisper / mlx-whisper", "Intent classification + slot-filling", "ArcFace face embeddings", "OpenCV", "MediaPipe", "scikit-learn", "Pandas"],
  "Data": ["PostgreSQL 16", "Redis 7", "SQLite", "Row-Level Security"],
  "Systems & Mobile": ["Rust (UniFFI, Pigeon interop)", "BLE", "E2EE (vodozemac / Olm)", "macOS Accessibility APIs", "Core ML", "QEMU", "x86_64 cross-GCC"],
  "DevOps": ["Docker", "Render", "Netlify", "pnpm monorepos", "GitHub Actions", "Git"],
};

export const education = [
  {
    degree: "B.Tech in Computer Science (Data Science)",
    institution: "Sreenidhi Institute of Science and Technology",
    location: "Hyderabad, India",
    duration: "2022 – 2026",
    cgpa: "8.6",
    highlights: [
      "Specialization in Data Science and Machine Learning",
      "Built multiple full-stack and AI/ML projects during coursework",
      "Active competitive programmer on LeetCode, Codeforces, and CodeChef",
    ],
  },
];

export const experience = [
  {
    company: "SkillCraft Technology",
    title: "Data Science Intern",
    url: "#",
    duration: "2024",
    bullets: [
      "Completed 4 structured data science tasks covering population analytics, Titanic survival EDA, Decision Tree classification, and US road accident pattern analysis.",
      "Built comprehensive data visualizations and analytical reports using Python, Pandas, Matplotlib, and Seaborn across multiple real-world datasets.",
      "Applied ML algorithms including Decision Tree classifiers on the UCI Bank Marketing Dataset to predict customer subscription behavior with measurable accuracy.",
      "Delivered all tasks with clean, well-documented code and insightful visual reports.",
    ],
  },
];

export const featuredProjects = [
  {
    id: 1,
    overline: "Featured Project",
    title: "CodeVault",
    description:
      "One dashboard for all your competitive-programming platforms. It automatically publishes accepted solutions to a clean, searchable GitHub repo. Monorepo: Next.js 16 frontend, Express 5 + Prisma backend, a git-sync engine (BullMQ + node-cron) that started as a separate service and is now folded into the backend, an admin console with owner-only Google sign-in, a browser extension and a mobile app. PostgreSQL + Redis, Row-Level Security policies, JWT shared across services. Built by a 2-person team — I owned git-sync, the extension, mobile and contests. Was deployed on Render as 4 Docker services; now runs locally.",
    tech: ["Next.js", "TypeScript", "Express", "Prisma", "PostgreSQL", "Redis", "BullMQ", "Docker"],
    github: "https://github.com/Gaurav06120714/CodeVault",
    external: null,
    image: "/projects/codevault.png",
  },
  {
    id: 2,
    overline: "Featured Project",
    title: "VYRO LINK",
    description:
      "Offline, end-to-end encrypted, store-and-forward messenger over Bluetooth LE — no internet or servers needed. Rust core (151 tests, including a malicious-relay security suite) bridged to a Flutter app through UniFFI + Pigeon native hosts. 1:1 and small-group chat, attachments, QR / 32-char ID pairing, key refresh on re-pair, panic wipe, app lock and an Android relay mode. End-to-end tests pass on the iOS simulator and Android emulator; testing on real BLE devices is still to come.",
    tech: ["Rust", "Flutter", "Dart", "Swift", "Kotlin", "UniFFI", "BLE", "E2EE"],
    github: "https://github.com/Gaurav06120714/vyrolink",
    external: "https://vyrolink.netlify.app",
    image: "/projects/vyrolink.png",
  },
  {
    id: 3,
    overline: "Featured Project",
    title: "VyroOS",
    description:
      "A from-scratch x86_64 microkernel OS in C + Assembly with a GUI, a framebuffer driver and a networking stack (TCP, DNS). It has a hand-written TLS 1.3 client — X25519, ChaCha20-Poly1305 and AES-128-GCM, all checked against RFC/NIST test vectors at boot — so its built-in browser loads real HTTPS pages. Runs in QEMU.",
    tech: ["C", "x86 Assembly", "NASM", "GCC cross-toolchain", "QEMU"],
    github: "https://github.com/Gaurav06120714/VyroOS",
    external: null,
    image: "/projects/vyroos.png",
  },
];

export const otherProjects = [
  {
    title: "ClubAI",
    description:
      "AI operations platform for a student club. pnpm monorepo: Next.js admin dashboard, Express API, Drizzle/Postgres (14 tables). SMS messaging, an AI intent pipeline that confirms event attendance from free-text replies, conversational project-info collection, BullMQ reminder/follow-up automation, a mock AI voice-calling engine and an analytics dashboard. 40+ tests.",
    tech: ["Next.js", "Express", "Drizzle", "PostgreSQL", "Redis", "BullMQ", "Ollama"],
    github: null,
    external: null,
  },
  {
    title: "Shift",
    description:
      "Native macOS menu-bar utility that copies any text you highlight automatically (no ⌘C) and shows a floating \"Copied\" badge. Works across apps using the macOS Accessibility APIs.",
    tech: ["Swift", "SwiftUI", "AppKit", "Accessibility API"],
    github: null,
    external: null,
  },
  {
    title: "FaceLock (in progress)",
    description:
      "Windows face-unlock app. Face matching and 5-cue liveness logic are done in C#/.NET 8; the Windows Credential Provider login integration is still being built.",
    tech: ["C#", ".NET 8", "ONNX", "WinUI 3"],
    github: null,
    external: null,
  },
  {
    title: "ExamShield (E-Shield)",
    description:
      "Offline AI evaluator for handwritten answer sheets: learns from previously corrected scripts, then gives question-wise marks and feedback. I owned ingestion, TrOCR handwriting OCR with confidence scoring, question segmentation and the upload UI in a 3-person team.",
    tech: ["Python", "PyTorch", "TrOCR", "XGBoost", "FastAPI", "Next.js"],
    github: null,
    external: null,
  },
  {
    title: "IPL Fantasy Auction",
    description:
      "Real-time multiplayer IPL auction platform. Up to 7 players bid on 100 IPL players with live countdown timers, room management, and PowerScore ranking algorithm.",
    tech: ["React", "Node.js", "TypeScript", "PostgreSQL", "Socket.io"],
    github: "https://github.com/Gaurav06120714/IPL-Auction",
    external: null,
  },
  {
    title: "AI Sign Language Recognition",
    description:
      "Real-time hand gesture recognition system that translates sign language into readable text using computer vision — helping hearing and speech-impaired individuals communicate.",
    tech: ["Python", "OpenCV", "Machine Learning", "MediaPipe"],
    github: "https://github.com/Gaurav06120714/AI-Sign-Language-Recognition-System",
    external: null,
  },
  {
    title: "VyroAgent",
    description:
      "Local AI voice agent for macOS — speak commands to control your Mac. Whisper STT + Ollama LLM, 25 system actions, zero API keys, 100% offline.",
    tech: ["Python", "Whisper", "Ollama", "LLM"],
    github: "https://github.com/Gaurav06120714/VyroAgent",
    external: null,
  },
  {
    title: "GitHubDashboard",
    description:
      "Native macOS dashboard to track GitHub contributions, streaks, and activity with one-click repo creation. Built natively with Swift and SwiftUI.",
    tech: ["Swift", "SwiftUI", "GitHub API"],
    github: "https://github.com/Gaurav06120714/GitHubDashboard",
    external: null,
  },
  {
    title: "VyroCoding",
    description:
      "Competitive coding platform with shared real-time coding rooms, an AI interviewer that gives feedback, code execution in 7 languages, live contests, a leaderboard and a LeetCode-style problem library.",
    tech: ["Next.js", "TypeScript", "Node.js", "WebSockets", "Docker"],
    github: "https://github.com/Gaurav06120714/VyroCoding",
    external: null,
  },
  {
    title: "VyroMusic",
    description:
      "Spotify-inspired music platform with AI-powered recommendations, fast search, a dark neon UI and a no-account mode with 50 handpicked tracks.",
    tech: ["TypeScript", "React", "Tailwind CSS", "Node.js"],
    github: "https://github.com/Gaurav06120714/VyroMusic",
    external: null,
  },
  {
    title: "VyroPortify",
    description:
      "AI-powered portfolio generator — upload a resume and it writes the copy, picks a layout and deploys a hosted portfolio site.",
    tech: ["Next.js", "FastAPI", "Python", "AI/LLM"],
    github: "https://github.com/Gaurav06120714/VyroPortify",
    external: null,
  },
];

export const certifications = [
  {
    title: "C and C++ Programming Certification",
    issuer: "Coursera",
    year: "2024",
    url: "#",
  },
  {
    title: "Python Programming Certification",
    issuer: "Udemy",
    year: "2025",
    url: "#",
  },
  {
    title: "Python for Data Science / Programming",
    issuer: "NPTEL",
    year: "2026",
    url: "#",
  },
];

export const achievements = [
  "Built VyroOS, an x86_64 OS from scratch with its own TLS 1.3 stack that loads real HTTPS websites",
  "Built VYRO LINK, an offline E2EE Bluetooth messenger with a Rust core and 150+ automated tests",
  "Co-built CodeVault, a multi-service platform that syncs competitive-programming solutions to GitHub",
  "Shipped 10+ projects across web, mobile, macOS, systems and AI",
  "Active on LeetCode (gauravganesh), Codeforces and HackerRank (gannu1214)",
  "Data Science Intern at SkillCraft Technology",
];
