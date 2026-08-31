import type { Metadata, Viewport } from "next";
import { inter, plexMono, instrumentSerif } from "@/lib/fonts";
import { Masthead } from "@/components/Masthead";
import { Footer } from "@/components/Footer";
import {
  CONTACT_EMAIL,
  GITHUB_HREF,
  LINKEDIN_HREF,
  SITE_URL,
} from "@/lib/site";
import "./globals.css";

const OG_IMAGE = `${SITE_URL}/assets/images/site-preview.png`;
const OG_IMAGE_ALT = "Naveen Lakkaram — Software Engineer";
const SHORT_DESCRIPTION =
  "Software Engineer. 5+ years building backend APIs, microservices, and cloud infrastructure on AWS and Azure. MS Computer Science, University of Central Missouri.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Naveen Lakkaram — Software Engineer",
  description:
    "Naveen Kumar Lakkaram — Software Engineer. Backend APIs, microservices, and cloud infrastructure automation on AWS and Azure.",
  keywords: [
    "Naveen Lakkaram",
    "Naveen Kumar Lakkaram",
    "software engineer",
    "backend developer",
    "full stack developer",
    "Spring Boot",
    "Java",
    "AWS",
    "Azure",
    "Kubernetes",
    "microservices",
    "computer science",
    "devops",
  ],
  applicationName: "Naveen Lakkaram",
  authors: [{ name: "Naveen Kumar Lakkaram", url: SITE_URL }],
  creator: "Naveen Kumar Lakkaram",
  publisher: "Naveen Kumar Lakkaram",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "profile",
    siteName: "Naveen Lakkaram",
    locale: "en_US",
    url: SITE_URL,
    title: "Naveen Lakkaram — Software Engineer",
    description: SHORT_DESCRIPTION,
    firstName: "Naveen",
    lastName: "Lakkaram",
    images: [{ url: OG_IMAGE, alt: OG_IMAGE_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naveen Lakkaram — Software Engineer",
    description: SHORT_DESCRIPTION,
    images: [{ url: OG_IMAGE, alt: OG_IMAGE_ALT }],
  },
  appleWebApp: {
    capable: true,
    title: "Naveen Lakkaram",
    statusBarStyle: "black-translucent",
  },
  formatDetection: { telephone: false },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f1e7",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Naveen Kumar Lakkaram",
      givenName: "Naveen",
      familyName: "Lakkaram",
      url: `${SITE_URL}/`,
      email: `mailto:${CONTACT_EMAIL}`,
      jobTitle: "Software Engineer",
      description:
        "Software Engineer with 5+ years building backend APIs, microservices, and cloud infrastructure automation on AWS and Azure.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "St. Louis",
        addressRegion: "MO",
        addressCountry: "US",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Central Missouri",
        url: "https://www.ucmo.edu/",
      },
      worksFor: { "@type": "Organization", name: "CloudSky Software" },
      knowsAbout: [
        "Software Engineering",
        "Backend Development",
        "Spring Boot",
        "Microservices",
        "Cloud Infrastructure",
        "AWS",
        "Azure",
        "Kubernetes",
        "DevOps",
        "CI/CD",
      ],
      sameAs: [LINKEDIN_HREF, GITHUB_HREF],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Naveen Lakkaram",
      description:
        "Personal site of Naveen Kumar Lakkaram — Software Engineer specializing in backend APIs, microservices, and cloud infrastructure.",
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
      author: { "@id": `${SITE_URL}/#person` },
      copyrightHolder: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: `${SITE_URL}/`,
      name: "Naveen Lakkaram — Software Engineer",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#person` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plexMono.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body className="grain">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded focus:bg-[var(--color-ink)] focus:px-3 focus:py-2 focus:text-[var(--color-paper)]"
        >
          Skip to content
        </a>
        <Masthead />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
