"use client";

import { useEffect } from "react";

// catches errors in the root layout itself (fonts, masthead, footer) - the
// one place app/error.tsx can't reach, since it renders inside that layout.
// this file replaces <html>/<body> entirely when it fires, so it's kept
// dependency-free on purpose: if the layout is broken, this still has to
// render.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[app/global-error]", error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.25rem",
          padding: "1.5rem",
          textAlign: "center",
          background: "#f6f1e7",
          color: "#17140f",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        <p style={{ fontSize: "2rem", margin: 0 }}>Something went wrong.</p>
        <p style={{ maxWidth: "32rem", opacity: 0.7, margin: 0 }}>
          The page failed to load. Try again, or refresh.
        </p>
        <button
          onClick={reset}
          style={{
            height: "3rem",
            padding: "0 1.5rem",
            borderRadius: "999px",
            border: "none",
            background: "#17140f",
            color: "#f6f1e7",
            fontSize: "0.85rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
