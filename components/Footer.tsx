export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 font-mono text-[11.5px] uppercase tracking-[0.08em] text-[var(--color-ink-faint)] sm:flex-row">
        <p>© {year} Naveen Lakkaram</p>
        <p>Instrument Serif · Inter · IBM Plex Mono</p>
        <a href="#" className="transition-colors hover:text-[var(--color-accent)]">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
