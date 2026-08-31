import { SITE_LOCATION } from "@/lib/site";
import { SceneMark } from "@/components/SceneMark";
import { HeroCtas } from "@/components/HeroCtas";

const FACTS = [
  { value: "5+", label: "Years building backend systems" },
  { value: "60%", label: "Faster deployments, current role" },
  { value: "500K+", label: "Daily API requests, prior role" },
];

export function Hero() {
  return (
    <section className="border-b border-[var(--color-rule)] px-5 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-14">
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10">
        <div>
          <div className="flex items-center justify-between">
            <p className="kicker">Software Engineer — Backend &amp; Cloud</p>
            <p className="kicker hidden sm:block">{SITE_LOCATION} · CDT</p>
          </div>

          <h1 className="display mt-6 text-[clamp(2.6rem,7vw,5.4rem)] leading-[1.02] tracking-[-0.01em] text-[var(--color-ink)]">
            I build software
            <br />
            that{" "}
            <span className="display-italic text-[var(--color-accent)]">
              holds up
            </span>{" "}
            under load.
          </h1>

          <p className="mt-7 max-w-[52ch] text-[19px] leading-relaxed text-[var(--color-ink-muted)] sm:text-[21px]">
            I&apos;m a software engineer with 5+ years building backend APIs and
            microservices for high-volume financial and fraud-management
            platforms, plus cloud infrastructure automation on AWS and
            Azure. Most recently at CloudSky Software, maintaining
            production Java microservices and cutting deploy times 60%.
          </p>

          <HeroCtas />
        </div>

        <div className="flex flex-col gap-6">
          <div className="aspect-square w-full max-w-[320px] justify-self-end rounded-[2rem] border border-[var(--color-rule)] bg-[var(--color-paper-raised)] p-6 lg:justify-self-auto">
            <SceneMark shape="icosahedron" tint="#c4432b" className="h-full w-full" />
          </div>

          <dl className="grid grid-cols-3 gap-4 border-t border-[var(--color-rule)] pt-5 lg:grid-cols-1 lg:divide-y lg:divide-[var(--color-rule)] lg:border-t-0 lg:pt-0">
            {FACTS.map((f) => (
              <div key={f.label} className="lg:py-4 lg:first:pt-0">
                <dt className="display text-[2.1rem] leading-none text-[var(--color-ink)]">
                  {f.value}
                </dt>
                <dd className="mt-1.5 font-mono text-[11.5px] uppercase leading-snug tracking-[0.08em] text-[var(--color-ink-faint)]">
                  {f.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
