import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectArticle({ project }: { project: Project }) {
  return (
    <article className="px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[900px]">
        <Link
          href="/#work"
          className="font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--color-ink-muted)] underline decoration-[var(--color-rule-strong)] underline-offset-4 transition-colors hover:text-[var(--color-accent)] hover:decoration-[var(--color-accent)]"
        >
          ← All work
        </Link>

        <div className="mt-8 flex items-baseline justify-between gap-4">
          <p className="kicker">
            {project.index} · {project.role}
          </p>
          {project.headlineMetric ? (
            <p className="kicker" style={{ color: project.tint }}>
              {project.headlineMetric.value} — {project.headlineMetric.label}
            </p>
          ) : null}
        </div>

        <h1 className="display mt-4 text-[clamp(2.6rem,8vw,5.4rem)] leading-[0.98] text-[var(--color-ink)]">
          {project.name}
        </h1>
        <p className="display-italic mt-3 text-[clamp(1.2rem,2.4vw,1.7rem)] leading-snug text-[var(--color-ink-muted)]">
          {project.tagline}
        </p>

        <p className="mt-8 max-w-[68ch] text-[18px] leading-relaxed text-[var(--color-ink-muted)]">
          {project.body}
        </p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span key={s} className="tag">
              {s}
            </span>
          ))}
        </div>

        {project.githubHref ? (
          <a
            href={project.githubHref}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-6 inline-block text-[15px] text-[var(--color-ink)] underline decoration-[var(--color-rule-strong)] underline-offset-4 transition-colors hover:text-[var(--color-accent)] hover:decoration-[var(--color-accent)]"
          >
            View source →
          </a>
        ) : null}

        {project.feature ? (
          <div
            className="mt-14 border-t-2 pt-8"
            style={{ borderColor: project.tint }}
          >
            <p className="kicker" style={{ color: project.tint }}>
              {project.feature.eyebrow}
            </p>
            <h2 className="display mt-3 max-w-[24ch] text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.05] text-[var(--color-ink)]">
              {project.feature.title}
            </h2>
            <p className="mt-5 max-w-[66ch] text-[16.5px] leading-relaxed text-[var(--color-ink-muted)]">
              {project.feature.body}
            </p>
            {project.feature.points && project.feature.points.length > 0 ? (
              <ol className="mt-6 space-y-2.5 border-l-2 border-[var(--color-rule)] pl-5">
                {project.feature.points.map((point, i) => (
                  <li
                    key={point}
                    className="grid grid-cols-[auto_1fr] items-baseline gap-3 text-[15.5px] leading-snug text-[var(--color-ink-muted)]"
                  >
                    <span
                      className="font-mono text-[12.5px] uppercase tracking-[0.1em]"
                      style={{ color: project.tint }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ol>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
