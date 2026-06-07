export const personalInfo = {
  name: "Gaurav Ganesh Teegulla",
  title: "Full-Stack Developer & AI/ML Engineer",
  email: "gauravganeshteegulla@gmail.com",
  phone: "+91 9515081562",
  location: "Hyderabad, India",
  tagline: "I build things that matter.",
  bio: [
    "Hello! I'm Gaurav — a Computer Science undergraduate specializing in Data Science at Sreenidhi Institute of Science and Technology, Hyderabad. My journey into software started with a love for problem-solving, and it quickly evolved into building complete, production-quality products from scratch.",
    "I work across the full stack — React frontends, Node.js backends, Python ML pipelines, and even Assembly-level OS development. I believe in writing code that is purposeful, performant, and clean.",
    "Whether it's a real-time multiplayer game, an AI-powered desktop browser, or a sign language recognition system — I'm drawn to projects that push technical boundaries while solving real human problems.",
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
  "Languages": ["Python", "TypeScript", "JavaScript", "Java", "C++", "C", "SQL"],
  "Frontend": ["React 18", "Next.js", "Vite", "Tailwind CSS", "React Native"],
  "Backend": ["Node.js", "FastAPI", "Flask", "Socket.io", "Express"],
  "AI / ML": ["Machine Learning", "OpenCV", "MediaPipe", "Scikit-learn", "Pandas", "NumPy"],
  "Databases": ["PostgreSQL", "SQLite", "Firebase"],
  "Tools & DevOps": ["Git", "GitHub", "Docker", "QEMU", "Electron", "Streamlit"],
};

export const education = [
  {
    degree: "B.Tech in Computer Science (Data Science)",
    institution: "Sreenidhi Institute of Science and Technology",
    location: "Hyderabad, India",
    duration: "2022 – 2026",
    cgpa: "Update with your CGPA",
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
    title: "VyroCoding",
    description:
      "A full-stack competitive coding platform where developers practice code with others in real time. Features shared coding rooms with live collaboration, an AI interviewer that gives real feedback, code execution in 7 programming languages, live contests, a leaderboard, and a LeetCode-style problem library. Built for the future of technical interviews.",
    tech: ["Next.js", "TypeScript", "Node.js", "WebSockets", "Docker", "Tailwind CSS"],
    github: "https://github.com/Gaurav06120714/VyroCoding",
    external: null,
    image: "/projects/vyrocoding.png",
  },
  {
    id: 2,
    overline: "Featured Project",
    title: "VyroMusic",
    description:
      "A premium Spotify-inspired music platform with AI-powered recommendations, blazing-fast search, an immersive dark neon UI, and a fully personalized listening experience. Features curated playlists, trending charts, and a no-account-required mode with 50 handpicked tracks — bringing desktop-grade audio experiences to the web.",
    tech: ["TypeScript", "React", "Node.js", "Tailwind CSS", "AI Recommendations"],
    github: "https://github.com/Gaurav06120714/VyroMusic",
    external: null,
    image: "/projects/vyromusic.png",
  },
  {
    id: 3,
    overline: "Featured Project",
    title: "VyroPortify",
    description:
      "An AI-powered portfolio generator that transforms a resume into a hosted portfolio website in under 60 seconds. Upload your resume, Claude AI reads your experience, writes professional copy, selects a layout, and deploys your live portfolio — reducing setup time from hours to seconds. Built with Next.js and Claude AI.",
    tech: ["Next.js", "TypeScript", "FastAPI", "Python", "Claude AI", "Tailwind CSS"],
    github: "https://github.com/Gaurav06120714/VyroPortify",
    external: null,
    image: "/projects/vyroport.png",
  },
];

export const otherProjects = [
  {
    title: "IPL Fantasy Auction",
    description:
      "Real-time multiplayer IPL auction platform. Up to 7 players bid on 100 IPL players with live countdown timers, room management, and PowerScore ranking algorithm.",
    tech: ["React", "Node.js", "TypeScript", "PostgreSQL", "Socket.io"],
    github: "https://github.com/Gaurav06120714/IPL-Auction",
    external: null,
  },
  {
    title: "VyroMusic",
    description:
      "Spotify-inspired premium music platform with AI-powered recommendations, blazing-fast search, dark neon UI, and fully personalized listening experiences.",
    tech: ["TypeScript", "React", "Tailwind CSS", "Node.js"],
    github: "https://github.com/Gaurav06120714/VyroMusic",
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
    title: "VyroPortify",
    description:
      "AI-powered portfolio generator — upload a resume and get a fully hosted portfolio website in under 60 seconds. Auto-generates professional copy and deploys live.",
    tech: ["Python", "FastAPI", "React", "AI/LLM"],
    github: "https://github.com/Gaurav06120714/VyroPortify",
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
  "Built VyroOS — a full operating system from scratch in Assembly + C with zero dependencies",
  "Developed 5+ full-stack production-grade applications spanning AI, real-time systems, and desktop apps",
  "Active on LeetCode (gauravganesh) and Codeforces (gannu1214) with consistent problem-solving practice",
  "Completed 4 Data Science tasks as intern at SkillCraft Technology covering real-world datasets",
  "Shipped VyroBrowser — a production-ready AI desktop browser with Ollama integration",
];
