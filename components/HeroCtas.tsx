"use client";

import { CONTACT_EMAIL, RESUME_PDF_HREF } from "@/lib/site";

export function HeroCtas() {
  return (
    <div className="mt-9 flex flex-wrap items-center gap-4">
      <a
        href="#work"
        className="inline-flex h-12 items-center rounded-full bg-[var(--color-ink)] px-6 font-mono text-[13px] uppercase tracking-[0.1em] text-[var(--color-paper)] transition-colors hover:bg-[var(--color-accent)]"
      >
        See the work →
      </a>
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="inline-flex h-12 items-center rounded-full border border-[var(--color-rule-strong)] px-6 font-mono text-[13px] uppercase tracking-[0.1em] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
      >
        Get in touch
      </a>
      <a
        href={RESUME_PDF_HREF}
        target="_blank"
        rel="noreferrer noopener"
        className="font-mono text-[13px] uppercase tracking-[0.1em] text-[var(--color-ink-muted)] underline decoration-[var(--color-rule-strong)] underline-offset-4 transition-colors hover:text-[var(--color-accent)] hover:decoration-[var(--color-accent)]"
      >
        Résumé ↗
      </a>
    </div>
  );
}
