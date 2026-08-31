import { GITHUB_HREF } from "@/lib/site";

// one editorial "feature" per project: a headline stat backed by a real
// measured result (never invented), a body, and an optional numbered list
// of supporting points rendered as the article's marginalia.

export interface ProjectFeature {
  eyebrow: string;
  title: string;
  body: string;
  points?: string[];
}

export interface Project {
  id: string;
  index: string;
  name: string;
  tagline: string;
  body: string;
  role: string;
  stack: string[];
  githubHref?: string;
  tint: string; // hex accent used sparingly (rule color, metric figure)
  headlineMetric?: { value: string; label: string };
  feature?: ProjectFeature;
  enabled: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "edulink",
    index: "01",
    name: "EduLink",
    tagline: "School payments & administration platform.",
    body: "A multi-tenant platform handling tuition and fee payments for schools end-to-end — enrollment, invoicing, payment processing, and admin reporting in one system. Tuned SQL indexes and reworked slow API paths to cut end-to-end payment workflow time by ~28%, meaningfully improving transaction reliability across tenants.",
    role: "Solo",
    stack: ["Java", "Spring Boot", "REST APIs", "PostgreSQL", "Hibernate/JPA"],
    githubHref: `${GITHUB_HREF}/edulink`,
    tint: "#2F5DE0",
    headlineMetric: { value: "28%", label: "Faster payment workflows" },
    feature: {
      eyebrow: "Performance",
      title: "28% faster payment workflows, tenant by tenant.",
      body: "The slowest part of the platform was the payment workflow itself — lookups against unindexed columns and chatty API calls that did more round trips than they needed to. Profiling the hot paths, adding targeted composite indexes, and collapsing redundant API calls brought end-to-end workflow time down by roughly 28% and made transaction outcomes far more consistent across schools sharing the same infrastructure.",
      points: [
        "SQL index tuning on the highest-traffic payment queries",
        "Reduced redundant API round-trips in the payment flow",
        "~28% reduction in end-to-end payment workflow time",
        "Improved transaction reliability across multi-tenant schools",
      ],
    },
    enabled: true,
  },
  {
    id: "codetracker",
    index: "02",
    name: "CodeTracker",
    tagline: "A lightweight tracker for developer productivity.",
    body: "CodeTracker logs coding activity and surfaces it back as simple, readable stats — time spent, languages touched, commit cadence — so the feedback loop on “what did I actually get done” doesn't depend on memory.",
    role: "Solo",
    stack: ["TypeScript", "Node.js", "REST APIs"],
    githubHref: `${GITHUB_HREF}/codetracker`,
    tint: "#C4432B",
    enabled: true,
  },
  {
    id: "caribbeanbiz",
    index: "03",
    name: "CaribbeanBiz",
    tagline: "A real estate listing platform built for slow networks.",
    body: "A listing search platform where a meaningful share of users are on slow or unreliable mobile connections. Optimized the underlying PostgreSQL queries and layered Redis-backed caching in front of the hottest search paths, accelerating listing search performance by ~45%.",
    role: "Solo",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Redis", "REST APIs"],
    githubHref: `${GITHUB_HREF}/caribbeanbiz`,
    tint: "#B0326B",
    headlineMetric: { value: "45%", label: "Faster listing search" },
    feature: {
      eyebrow: "Performance",
      title: "45% faster search, built for slow-network users.",
      body: "Listing search was the core interaction and the slowest one — broad geo + filter queries hitting Postgres cold on every request. Query optimization plus a Redis caching layer in front of the most frequent search patterns cut search latency by roughly 45%, with the biggest gains showing up for users on the slowest connections, who felt it the most.",
      points: [
        "PostgreSQL query optimization on geo + filter search",
        "Redis-backed caching layer for high-frequency searches",
        "~45% faster listing search performance",
        "Tuned specifically for users on slow-network conditions",
      ],
    },
    enabled: true,
  },
  {
    id: "car-price-prediction",
    index: "04",
    name: "Car Price Prediction",
    tagline: "A regression model for used-car price estimation.",
    body: "A regression-based machine learning model for estimating used-car prices from mileage, year, condition, and brand tier. Feature engineering on those signals got the model to 92% prediction accuracy on held-out test data.",
    role: "Solo",
    stack: ["Python", "scikit-learn", "pandas", "Feature Engineering"],
    githubHref: `${GITHUB_HREF}/car-price-prediction`,
    tint: "#6B3FD6",
    headlineMetric: { value: "92%", label: "Prediction accuracy" },
    feature: {
      eyebrow: "Modeling",
      title: "92% accuracy from feature engineering, not a bigger model.",
      body: "Most of the accuracy gain came from feature engineering rather than model complexity: encoding brand into meaningful tiers, normalizing mileage against vehicle age, and cleaning condition labels into a consistent scale. The resulting regression model hit 92% prediction accuracy on the test split.",
      points: [
        "Feature engineering on mileage, year, condition, and brand tier",
        "Regression model trained and validated on held-out test data",
        "92% prediction accuracy for used-car price estimation",
      ],
    },
    enabled: true,
  },
  {
    id: "smartspectra-macos",
    index: "05",
    name: "SmartSpectra macOS",
    tagline: "A native SwiftUI app for camera-based vitals.",
    body: "A native macOS SwiftUI app, built and run directly in Xcode, that links against the SmartSpectra C++ SDK via Homebrew. It shows a live camera preview alongside real-time validation status, breathing metrics, cardio metrics, and trend traces — camera-based vitals monitoring running natively on the desktop.",
    role: "Solo",
    stack: ["Swift", "SwiftUI", "C++", "Xcode", "Computer Vision"],
    githubHref: `${GITHUB_HREF}/smartspectra-swiftui-macos-example`,
    tint: "#3F8F2E",
    feature: {
      eyebrow: "Native integration",
      title: "SwiftUI frontend, C++ SDK underneath.",
      body: "The SmartSpectra C++ SDK (installed via Homebrew) does the actual signal processing; the SwiftUI layer wraps it in a native macOS experience — live camera preview, validation state, and real-time breathing and cardio metrics rendered as trend traces as they update.",
      points: [
        "Native SwiftUI macOS app, built and run in Xcode",
        "Links against the SmartSpectra C++ SDK via Homebrew",
        "Live camera preview with real-time validation status",
        "Breathing and cardio metrics rendered as live trend traces",
      ],
    },
    enabled: true,
  },
];

export function getEnabledProjects(): Project[] {
  return PROJECTS.filter((p) => p.enabled);
}
