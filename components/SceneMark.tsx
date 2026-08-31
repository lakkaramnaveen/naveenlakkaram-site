"use client";

import dynamic from "next/dynamic";
import { useReducedMotion, useCoarsePointer } from "@/lib/motion";
import { SceneErrorBoundary } from "@/components/SceneErrorBoundary";
import type { MarkShape } from "@/components/ObjectMark";

const ObjectMark = dynamic(
  () => import("@/components/ObjectMark").then((m) => ({ default: m.ObjectMark })),
  { ssr: false },
);

// static ink-stamp fallback: reduced-motion users, touch devices, and any
// WebGL failure all land here instead of a blank box.
function StaticMark({ tint }: { tint: string }) {
  return (
    <div
      className="flex h-full w-full items-center justify-center rounded-full border"
      style={{ borderColor: tint, background: `${tint}14` }}
    >
      <div
        className="h-[42%] w-[42%] rounded-full border-2"
        style={{ borderColor: tint }}
      />
    </div>
  );
}

export function SceneMark({
  shape,
  tint = "#c4432b",
  className,
}: {
  shape: MarkShape;
  tint?: string;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const coarse = useCoarsePointer();

  if (reduced || coarse) {
    return (
      <div className={className}>
        <StaticMark tint={tint} />
      </div>
    );
  }

  return (
    <SceneErrorBoundary
      fallback={
        <div className={className}>
          <StaticMark tint={tint} />
        </div>
      }
    >
      <ObjectMark shape={shape} tint={tint} className={className} />
    </SceneErrorBoundary>
  );
}
