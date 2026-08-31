import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found · Naveen Lakkaram",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[70svh] flex-col items-center justify-center px-6 text-center">
      <p className="kicker mb-3">404 — Not found</p>
      <h1 className="display text-[clamp(3rem,10vw,6rem)] leading-none text-[var(--color-ink)]">
        Nothing <span className="display-italic text-[var(--color-accent)]">here</span>.
      </h1>
      <p className="mt-5 max-w-md text-[17px] leading-relaxed text-[var(--color-ink-muted)]">
        You followed a broken link or typed something that doesn&apos;t exist.
        That happens.
      </p>
      <Link
        href="/"
        className="mt-9 inline-flex h-12 items-center rounded-full bg-[var(--color-ink)] px-6 font-mono text-[13px] uppercase tracking-[0.1em] text-[var(--color-paper)] transition-colors hover:bg-[var(--color-accent)]"
      >
        Take me home →
      </Link>
    </div>
  );
}
