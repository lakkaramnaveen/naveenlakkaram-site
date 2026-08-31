import Link from "next/link";
import { getEnabledProjects } from "@/lib/projects";

export function Projects() {
  const projects = getEnabledProjects();
  return (
    <section
      id="work"
      className="scroll-mt-16 border-b border-[var(--color-rule)] px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-[1400px]">
        <p className="kicker">03 — Selected work</p>
        <h2 className="display mt-4 max-w-[18ch] text-[clamp(2rem,5vw,3.4rem)] leading-[0.98] text-[var(--color-ink)]">
          Systems I&apos;ve <span className="display-italic text-[var(--color-accent)]">shipped</span>.
        </h2>

        <div className="mt-12">
          {projects.map((p) => (
            <Link
              key={p.id}
              href={`/work/${p.id}/`}
              className="group grid items-start gap-4 border-t border-[var(--color-rule)] py-8 transition-colors last:border-b sm:grid-cols-[80px_1fr_auto] sm:gap-8"
            >
              <p
                className="display text-[2.6rem] leading-none"
                style={{ color: p.tint }}
              >
                {p.index}
              </p>

              <div>
                <h3 className="display text-[clamp(1.6rem,3.4vw,2.6rem)] leading-[1.05] text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)]">
                  {p.name}
                </h3>
                <p className="mt-1.5 max-w-[56ch] text-[15.5px] leading-relaxed text-[var(--color-ink-muted)]">
                  {p.tagline}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 self-center font-mono text-[12.5px] uppercase tracking-[0.1em] text-[var(--color-ink-muted)] transition-colors group-hover:text-[var(--color-accent)] sm:justify-self-end">
                {p.headlineMetric ? (
                  <span className="hidden sm:inline">{p.headlineMetric.value}</span>
                ) : null}
                <span aria-hidden>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
