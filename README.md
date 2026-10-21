# Gaurav Ganesh Teegulla — Portfolio

Personal portfolio built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS 4** and **Framer Motion**. Minimal black-and-white design, deployed on Netlify.

Live: https://gauravganeshportfolio.netlify.app

## Editing content

All text, projects, skills and links live in **`src/data/portfolio.ts`** — components only read from it.

- **Featured project:** add an entry to `featuredProjects`. `github`, `links`, `status`, `highlights` and `image` are optional; leave them out rather than guessing.
- **Screenshot:** put the file in `public/projects/` and set `image: "/projects/<file>.png"` and `imageAlt`. Images are shown in greyscale to keep the black-and-white look.
- **Résumé:** replace `public/resume.pdf`.
- **Site URL** (canonical/OG/sitemap): set `NEXT_PUBLIC_SITE_URL`, otherwise the Netlify URL is used.

## Sections

Hero · About · Featured projects + other projects · Technical skills · Experience & achievements · Education · Certifications · Contact

## Contact form

`POST /api/contact` sends mail through [Resend](https://resend.com). Set `RESEND_API_KEY` in the hosting environment; without it the form tells visitors to email directly instead. Input is validated, length-limited and HTML-escaped before it goes into the email.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # production build
```

## Project structure

```
src/
├── app/            layout (metadata, JSON-LD), page, robots, sitemap, OG image, /api/contact
├── components/
│   ├── layout/     Nav, Footer, Providers (reduced-motion support)
│   ├── sections/   Hero, About, Projects, Skills, Experience, Education, Certifications, Contact
│   └── ui/         Section, SectionHeading, Reveal animation, social icons
└── data/portfolio.ts   all content
```
