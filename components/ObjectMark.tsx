"use client";

// a single restrained "wax seal" object — the site's one WebGL moment, used
// twice (hero + contact) with a different geometry and slow, passive
// rotation. no drag/orbit interaction: it's a mark on the page, not a toy.
// solid glossy material (not glass/transmission) so it reads clearly against
// the light paper background from plain scene lights alone - a transmissive
// material needs a reflection environment to look like anything but a
// smudge, and that would mean depending on an external HDRI at runtime.

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

export type MarkShape = "icosahedron" | "torusKnot";

function RotatingShape({ shape, tint }: { shape: MarkShape; tint: string }) {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    mesh.rotation.x += delta * 0.12;
    mesh.rotation.y += delta * 0.18;
  });

  return (
    <mesh ref={meshRef}>
      {shape === "icosahedron" ? (
        <icosahedronGeometry args={[1.3, 0]} />
      ) : (
        <torusKnotGeometry args={[1, 0.32, 180, 24]} />
      )}
      <meshPhysicalMaterial
        color={tint}
        roughness={0.32}
        metalness={0.1}
        clearcoat={1}
        clearcoatRoughness={0.18}
      />
    </mesh>
  );
}

export function ObjectMark({
  shape,
  tint = "#c4432b",
  className,
}: {
  shape: MarkShape;
  tint?: string;
  className?: string;
}) {
  return (
    <div className={className} aria-hidden>
      <Canvas dpr={[1, 1.75]} camera={{ position: [0, 0, 4.4], fov: 38 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 4, 5]} intensity={1.6} color="#ffffff" />
        <directionalLight position={[-3, -2, -4]} intensity={0.7} color={tint} />
        <pointLight position={[0, 3, 2]} intensity={0.8} color="#ffffff" />
        <RotatingShape shape={shape} tint={tint} />
      </Canvas>
    </div>
  );
}
