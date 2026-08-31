import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECTS } from "@/lib/projects";
import { ProjectArticle } from "@/components/ProjectArticle";
import { SITE_URL } from "@/lib/site";

const OG_IMAGE = `${SITE_URL}/assets/images/site-preview.png`;

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.filter((p) => p.enabled).map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) return { title: "Project not found · Naveen Lakkaram" };

  const title = `${project.name} · Naveen Lakkaram`;
  const url = `${SITE_URL}/work/${project.id}/`;

  // each project route needs its own canonical/OG/twitter - the root
  // layout's values would otherwise be inherited verbatim (Next.js doesn't
  // recompute per-route), pointing every case study back at the homepage.
  return {
    title,
    description: project.tagline,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title,
      description: project.tagline,
      url,
      images: [{ url: OG_IMAGE, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.tagline,
      images: [{ url: OG_IMAGE, alt: title }],
    },
  };
}

function projectJsonLd(project: (typeof PROJECTS)[number]) {
  const url = `${SITE_URL}/work/${project.id}/`;
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#work`,
    url,
    name: project.name,
    description: project.tagline,
    about: project.body,
    creator: { "@id": `${SITE_URL}/#person` },
    author: { "@id": `${SITE_URL}/#person` },
    keywords: project.stack,
    ...(project.githubHref ? { codeRepository: project.githubHref } : {}),
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd(project)) }}
      />
      <ProjectArticle project={project} />
    </>
  );
}
