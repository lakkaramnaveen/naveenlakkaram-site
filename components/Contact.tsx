import { CONTACT_EMAIL, GITHUB_HREF, LINKEDIN_HREF, RESUME_PDF_HREF } from "@/lib/site";
import { SceneMark } from "@/components/SceneMark";

const LINKS = [
  { label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { label: "LinkedIn", value: "in/lakkaramnaveen", href: LINKEDIN_HREF },
  { label: "GitHub", value: "lakkaramnaveen", href: GITHUB_HREF },
  { label: "Résumé", value: "download PDF ↗", href: RESUME_PDF_HREF },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-16 border-b border-[var(--color-rule)] px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-center lg:gap-20">
        <div>
          <p className="kicker">05 — Contact</p>
          <h2 className="display mt-4 max-w-[16ch] text-[clamp(2.2rem,6vw,4.2rem)] leading-[1] text-[var(--color-ink)]">
            Let&apos;s build something{" "}
            <span className="display-italic text-[var(--color-accent)]">reliable</span>.
          </h2>

          <dl className="mt-10 grid gap-5 sm:grid-cols-2">
            {LINKS.map((l) => (
              <div key={l.label} className="border-t border-[var(--color-rule)] pt-3">
                <dt className="kicker">{l.label}</dt>
                <dd className="mt-1.5">
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noreferrer noopener" : undefined}
                    className="text-[16px] text-[var(--color-ink)] underline decoration-[var(--color-rule-strong)] underline-offset-4 transition-colors hover:text-[var(--color-accent)] hover:decoration-[var(--color-accent)]"
                  >
                    {l.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="aspect-square w-full max-w-[280px] justify-self-center rounded-[2rem] border border-[var(--color-rule)] bg-[var(--color-paper-raised)] p-6 lg:justify-self-end">
          <SceneMark shape="torusKnot" tint="#2f5de0" className="h-full w-full" />
        </div>
      </div>
    </section>
  );
}
