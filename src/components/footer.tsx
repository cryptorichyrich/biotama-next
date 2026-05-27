import { ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="bg-primary text-zinc-400 py-12">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
          <p className="text-xs text-zinc-500 mt-1">Built with Next.js</p>
        </div>
        <div className="flex items-center gap-4">
          {profile.socials.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-zinc-400 hover:text-white transition-colors duration-200 cursor-pointer flex items-center gap-1.5"
            >
              <ExternalLink size={14} />
              <span className="text-sm">{s.platform}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
