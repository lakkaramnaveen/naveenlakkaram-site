import { ROLES } from "@/lib/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-16 border-b border-[var(--color-rule)] px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-[1400px]">
        <p className="kicker">03 — Experience</p>
        <h2 className="display mt-4 max-w-[16ch] text-[clamp(2rem,5vw,3.4rem)] leading-[0.98] text-[var(--color-ink)]">
          Places I&apos;ve <span className="display-italic text-[var(--color-accent)]">been</span>.
        </h2>

        <div className="mt-12">
          {ROLES.map((role, i) => (
            <article
              key={`${role.company}-${role.title}`}
              className="grid gap-6 border-t border-[var(--color-rule)] py-8 sm:grid-cols-[2fr_1fr] sm:gap-10 lg:grid-cols-[80px_1.6fr_1fr]"
            >
              <p className="kicker hidden lg:block">{String(i + 1).padStart(2, "0")}</p>

              <div>
                <h3 className="display text-[clamp(1.5rem,3vw,2.3rem)] leading-[1.05] text-[var(--color-ink)]">
                  {role.company}{" "}
                  <span className="display-italic text-[var(--color-ink-muted)]">
                    {role.title}
                  </span>
                </h3>
                <p className="mt-2 font-mono text-[11.5px] uppercase tracking-[0.1em] text-[var(--color-ink-faint)]">
                  {role.type} · {role.location} · {role.when}
                </p>
                <p className="mt-4 max-w-[62ch] text-[15.5px] leading-relaxed text-[var(--color-ink-muted)]">
                  {role.body}
                </p>
              </div>

              {role.metric ? (
                <div className="sm:text-right">
                  <p className="display text-[clamp(2rem,4vw,3rem)] leading-none text-[var(--color-accent)]">
                    {role.metric.value}
                  </p>
                  <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-ink-faint)]">
                    {role.metric.label}
                  </p>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
