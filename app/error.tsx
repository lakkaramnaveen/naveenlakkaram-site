"use client";

import { useEffect } from "react";
import Link from "next/link";

// catches render errors anywhere below the root layout (page content, not
// the masthead/footer chrome). without this, a thrown error in production
// shows a blank page instead of a recoverable one.
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[app/error]", error);
  }, [error]);

  return (
    <div className="flex min-h-[70svh] flex-col items-center justify-center px-6 text-center">
      <p className="kicker mb-3">Something went wrong</p>
      <h1 className="display text-[clamp(2.4rem,8vw,4.5rem)] leading-none text-[var(--color-ink)]">
        A page <span className="display-italic text-[var(--color-accent)]">tripped</span>.
      </h1>
      <p className="mt-5 max-w-md text-[17px] leading-relaxed text-[var(--color-ink-muted)]">
        That&apos;s on this page, not you. Try again, or head back home.
      </p>
      <div className="mt-9 flex gap-4">
        <button
          onClick={reset}
          className="inline-flex h-12 items-center rounded-full bg-[var(--color-ink)] px-6 font-mono text-[13px] uppercase tracking-[0.1em] text-[var(--color-paper)] transition-colors hover:bg-[var(--color-accent)]"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex h-12 items-center rounded-full border border-[var(--color-rule-strong)] px-6 font-mono text-[13px] uppercase tracking-[0.1em] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          Take me home
        </Link>
      </div>
    </div>
  );
}
