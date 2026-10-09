"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/site";
import { Button } from "@/components/Button";
import { CloseIcon, MenuIcon } from "@/components/icons";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    const onHash = () => setHash(window.location.hash);
    onHash();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onHash);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/12 backdrop-blur-xl transition-colors duration-200 ${
        scrolled || open ? "bg-[#07070b]/92" : "bg-[#07070b]/78"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between gap-4 px-5 sm:px-6 lg:px-16">
        <Link href="/" className="min-w-0" onClick={() => setOpen(false)}>
          <span className="block truncate font-display text-sm font-semibold tracking-tight text-white sm:text-base">
            {profile.name}
          </span>
          <span className="mt-0.5 block text-xs leading-none text-zinc-400">AI Video Editor</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={hash && link.href.endsWith(hash) ? "true" : undefined}
              onClick={() => setHash(link.href.slice(link.href.indexOf("#")))}
              className={`text-sm transition duration-200 hover:text-white ${
                hash && link.href.endsWith(hash) ? "text-white" : "text-zinc-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/#contact" className="px-4 sm:px-5">
            Hire Me
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          className="border-t border-white/10 bg-[#07070b] px-5 py-3 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-xl px-2 py-3 text-base text-zinc-200 transition hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
