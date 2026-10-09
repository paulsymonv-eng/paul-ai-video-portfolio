import Link from "next/link";
import { navLinks, profile } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-4 px-5 py-6 sm:px-6 md:flex-row md:items-end md:justify-between lg:px-16">
        <div>
          <p className="font-display text-base font-semibold tracking-tight text-white">{profile.name}</p>
          <p className="mt-1 text-sm leading-snug text-zinc-200">{profile.title}</p>
          <p className="mt-1 text-sm leading-snug text-zinc-400">{profile.locationLine}</p>
          <p className="mt-2 text-sm text-zinc-400">
            Email:{" "}
            <a
              href="mailto:paulsymonv@gmail.com"
              className="text-zinc-100 underline decoration-white/25 underline-offset-4 transition duration-200 hover:text-white"
            >
              paulsymonv@gmail.com
            </a>
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-300 transition duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
