"use client";

// the site's one scroll-driven motif: a growth line that fills in behind the
// story as you read it, rather than appearing all at once. reduced-motion
// users get the line already fully drawn - the story reads the same either
// way, this is purely the how, not the what.

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { JOURNEY } from "@/lib/journey";
import { useReducedMotion } from "@/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Journey() {
  const sectionRef = useRef<HTMLElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const fill = fillRef.current;
    const section = sectionRef.current;
    if (!fill || !section) return;

    if (reduced) {
      gsap.set(fill, { scaleY: 1 });
      return;
    }

    gsap.set(fill, { scaleY: 0, transformOrigin: "top" });
    const tween = gsap.to(fill, {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        end: "bottom 65%",
        scrub: 0.6,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="scroll-mt-16 border-b border-[var(--color-rule)] px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-[1400px]">
        <p className="kicker">02 — Journey</p>
        <h2 className="display mt-4 max-w-[18ch] text-[clamp(2rem,5vw,3.4rem)] leading-[0.98] text-[var(--color-ink)]">
          How I got <span className="display-italic text-[var(--color-accent)]">here</span>.
        </h2>

        <div className="relative mt-14 pl-8 sm:pl-12">
          <div className="absolute left-0 top-1 bottom-1 w-px bg-[var(--color-rule)] sm:left-1" />
          <div
            ref={fillRef}
            className="absolute left-0 top-1 bottom-1 w-px bg-[var(--color-accent)] sm:left-1"
          />

          <div className="space-y-14">
            {JOURNEY.map((chapter) => (
              <article key={chapter.year} className="relative">
                <span
                  className="absolute -left-8 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-paper)] sm:-left-12"
                  aria-hidden
                />
                <p className="kicker">
                  {chapter.year} · {chapter.place}
                </p>
                <h3 className="display mt-2 max-w-[28ch] text-[clamp(1.4rem,2.8vw,2rem)] leading-[1.1] text-[var(--color-ink)]">
                  {chapter.title}
                </h3>
                <p className="mt-3 max-w-[62ch] text-[16px] leading-relaxed text-[var(--color-ink-muted)]">
                  {chapter.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
