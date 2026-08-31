"use client";

import Link from "next/link";
import { RESUME_PDF_HREF } from "@/lib/site";

const LINKS = [
  { href: "#profile", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Masthead() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-rule)] bg-[var(--color-paper)]/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-5 sm:h-16 sm:px-8">
        <Link
          href="/"
          className="font-mono text-[13px] uppercase tracking-[0.14em] text-[var(--color-ink)]"
        >
          Naveen Lakkaram
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={RESUME_PDF_HREF}
          target="_blank"
          rel="noreferrer noopener"
          className="font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--color-ink)] underline decoration-[var(--color-rule-strong)] decoration-1 underline-offset-4 transition-colors hover:text-[var(--color-accent)] hover:decoration-[var(--color-accent)]"
        >
          Résumé ↗
        </a>
      </div>
    </header>
  );
}
