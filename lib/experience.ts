// work history — mirrors the resume. one entry per role, in reverse
// chronological order. `metric` is omitted rather than invented when a role
// has no measured headline number behind it.

export interface Role {
  company: string;
  title: string;
  type: string;
  location: string;
  when: string;
  body: string;
  metric?: { value: string; label: string };
}

export const ROLES: Role[] = [
  {
    company: "CloudSky Software",
    title: "Full Stack Engineer",
    type: "Contract",
    location: "United States",
    when: "Jan 2025 → Present",
    body: "Own and maintain 5 of 1,000+ Java microservices on the network dev team — including a wiring validator, an orchestrator, and core middleware — syncing weekly with a downstream application team on contract changes and releases. Debug production issues by tracing failures through logs and CloudWatch/Grafana dashboards, and automate deployment and infrastructure with Terraform, Docker, Kubernetes (EKS), and Jenkins. Optimize Postgres/Redis-backed queries to cut average API latency by ~25%, and lean on GitHub Copilot and LLM APIs (OpenAI, Claude, Azure OpenAI) to speed up debugging, review, and docs.",
    metric: { value: "60%", label: "Faster deployments" },
  },
  {
    company: "Techsara Solutions",
    title: "Full Stack Engineer",
    type: "Full-time",
    location: "United States",
    when: "May 2024 → Jan 2025",
    body: "Built and maintained features for a network-device validation application on the networking team, running automated checks against device configurations to catch issues before they reached production networks. Debugged and fixed defects reported by network engineers, tracing issues from the UI/API layer down through device-check logic to root cause, and wrote tests covering new checks and bug fixes.",
  },
  {
    company: "Capgemini",
    title: "Full Stack Developer",
    type: "Client: Discover Financial Services",
    location: "Hyderabad",
    when: "Jan 2020 → Oct 2022",
    body: "Built Java backend REST APIs for Orion, a fraud-investigation platform with an Angular frontend used by call center agents to resolve cases in real time, as part of a 20+ microservice architecture. Debugged issues surfaced during the migration of legacy core Java systems to microservices, wrote JUnit tests to ~85% coverage, and ran CI/CD through Jenkins/Docker/Kubernetes onto Pivotal Cloud Foundry for a platform handling 500,000+ requests daily. Automated infrastructure with Terraform/CloudFormation to hold 99.9% availability and cut provisioning time 70%, and cut recurring incidents 30% through log analysis and root cause investigation.",
    metric: { value: "500K+", label: "Daily API requests" },
  },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Languages",
    items: [
      "Java",
      "TypeScript",
      "JavaScript",
      "Angular",
      "React",
      "Node.js",
      "HTML/CSS",
    ],
  },
  {
    label: "Backend / APIs",
    items: [
      "Spring Boot",
      "Spring Security",
      "REST APIs",
      "Microservices",
      "Hibernate",
      "JPA",
    ],
  },
  {
    label: "Cloud / DevOps",
    items: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "GitHub Actions",
    ],
  },
  {
    label: "Data / Testing",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Oracle",
      "SQL Server",
      "JUnit",
      "Mockito",
      "Selenium",
    ],
  },
  {
    label: "AI / Observability",
    items: ["GitHub Copilot", "LLM APIs", "Prometheus", "Grafana", "ELK Stack"],
  },
];

export const CERTIFICATIONS = [
  "AWS Certified Developer – Associate",
  "Oracle Cloud Infrastructure Generative AI Certified Professional",
  "JEE Certified Full Stack Java Developer",
];

export const EDUCATION = {
  degree: "Master of Science in Computer Science",
  school: "University of Central Missouri",
  when: "2022 – 2024",
  location: "Lee's Summit, MO",
};
