import { Inter, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";

// editorial pairing: Instrument Serif for display headlines (thin, elegant,
// strong italic — reads like a magazine masthead rather than a tech-portfolio
// display face), Inter for body/UI, IBM Plex Mono for kickers/bylines/labels.

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});
