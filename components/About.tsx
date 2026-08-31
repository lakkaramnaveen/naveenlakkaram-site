import { SKILL_GROUPS, CERTIFICATIONS, EDUCATION } from "@/lib/experience";

export function About() {
  return (
    <section
      id="profile"
      className="scroll-mt-16 border-b border-[var(--color-rule)] px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-[1400px]">
        <p className="kicker">01 — Profile</p>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          <div className="max-w-[62ch]">
            <p className="text-[19px] leading-relaxed text-[var(--color-ink-muted)] sm:text-[21px]">
              <span className="display float-left mr-2 mt-[-0.06em] text-[4.4rem] leading-[0.82] text-[var(--color-ink)]">
                I
              </span>
              &apos;m a software engineer with 5+ years building backend APIs and
              microservices for high-volume financial and fraud-management
              platforms, plus cloud infrastructure automation on AWS and
              Azure. I hold a master&apos;s in computer science from the
              University of Central Missouri, and I care most about APIs
              that stay fast under real load and infrastructure that
              doesn&apos;t page anyone at 3am.
            </p>
            <p className="mt-6 text-[17px] leading-relaxed text-[var(--color-ink-muted)]">
              Increasingly I lean on AI-assisted development — GitHub
              Copilot, LLM APIs — to move faster without cutting corners.
              {" "}
              {EDUCATION.degree}, {EDUCATION.school} ({EDUCATION.when}).
            </p>

            <div className="mt-8 border-t border-[var(--color-rule)] pt-5">
              <p className="kicker">Certifications</p>
              <ul className="mt-3 space-y-1.5">
                {CERTIFICATIONS.map((c) => (
                  <li
                    key={c}
                    className="text-[14.5px] leading-snug text-[var(--color-ink-muted)]"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-1">
            {SKILL_GROUPS.map((group) => (
              <div key={group.label}>
                <p className="kicker">{group.label}</p>
                <p className="mt-2.5 text-[15px] leading-relaxed text-[var(--color-ink)]">
                  {group.items.map((item, i) => (
                    <span key={item}>
                      {item}
                      {i < group.items.length - 1 ? (
                        <span className="text-[var(--color-ink-faint)]"> · </span>
                      ) : null}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
