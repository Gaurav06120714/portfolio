import { personalInfo, socialLinks } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 text-sm sm:px-8 md:flex-row md:items-center md:justify-between">
        <p className="text-neutral-400">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {socialLinks.map((s) => (
            <li key={s.name}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-neutral-400 transition-colors hover:text-white">
                {s.name}
              </a>
            </li>
          ))}
          <li>
            <a href="#top" className="text-neutral-400 transition-colors hover:text-white">
              Back to top ↑
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
