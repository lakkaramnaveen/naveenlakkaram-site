"use client";

import { useEffect, useState } from "react";

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

// touch devices (phones/tablets, and coarse-pointer emulation) skip WebGL -
// same rationale as the tiering logic on the original site: a full 3D scene
// on a phone is a long blank load for very little payoff at that viewport.
export function useCoarsePointer(): boolean {
  const [coarse, setCoarse] = useState(false);
  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;
    setCoarse(window.matchMedia("(pointer: coarse)").matches);
  }, []);
  return coarse;
}
