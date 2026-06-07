# gaurav.dev — Personal Portfolio

> Full-stack developer & AI/ML engineer portfolio. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com/)

---

## ✨ Features

- **Animated loader** — staggered letter-by-letter name reveal with blur effect
- **Sticky navigation** — smooth scroll, active section highlighting, hamburger menu
- **Dark / Light mode** — persistent theme toggle with CSS design tokens
- **Scroll animations** — Framer Motion `whileInView` reveals throughout
- **Real project screenshots** — actual screenshots of live projects
- **Working contact form** — messages delivered via Resend to your inbox
- **Resume download** — one-click PDF download
- **Social sidebars** — fixed left (social links) + right (email) on desktop
- **Fully responsive** — mobile-first, tested across breakpoints

## 🗂️ Sections

| # | Section |
|---|---------|
| 00 | Hero |
| 01 | About |
| 02 | Skills & Technologies |
| 03 | Experience |
| 04 | Projects |
| 05 | Education |
| 06 | Certifications & Achievements |
| 07 | Contact |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS custom properties |
| Animations | Framer Motion |
| Theme | next-themes |
| Email | Resend |
| Deployment | Vercel |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
# Clone the repo
git clone https://github.com/Gaurav06120714/gaurav-portfolio.git
cd gaurav-portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your Resend API key to .env.local

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

```env
RESEND_API_KEY=your_resend_api_key_here
```

Get a free key at [resend.com](https://resend.com) — 3,000 emails/month free.

---

## 📦 Project Structure

```
src/
├── app/
│   ├── api/contact/     # Email API route (Resend)
│   ├── layout.tsx       # Root layout + metadata
│   └── page.tsx         # Single-page entry
├── components/
│   ├── layout/          # Nav, Footer, Loader, Sidebars
│   ├── sections/        # Hero, About, Skills, Projects…
│   └── ui/              # SectionHeading, AnimatedSection, SocialIcons
└── data/
    └── portfolio.ts     # All content — edit this to personalize
```

---

## 🌐 Deployment (Vercel — Free)

```bash
npm i -g vercel
vercel
```

Then in the Vercel dashboard:
1. Go to **Settings → Environment Variables**
2. Add `RESEND_API_KEY` with your key
3. Redeploy — contact form will work in production

---

## 📝 Customization

All content lives in **`src/data/portfolio.ts`** — update:
- `personalInfo` — name, email, phone, bio
- `skills` — tech stack categories
- `featuredProjects` — showcase projects + screenshots
- `experience`, `education`, `certifications`, `achievements`

---

## 📄 License

MIT © [Gaurav Ganesh Teegulla](https://github.com/Gaurav06120714)
