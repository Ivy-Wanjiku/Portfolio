import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { ProjectVisual } from "@/components/projects/project-visual";
import { projects } from "@/data/site";

export const metadata: Metadata = { title: "Projects", description: "Selected software projects built and contributed to by Ivy Wanjiku.", alternates: { canonical: "/projects" } };

export default function ProjectsPage() {
  return (
    <main className="inner-page">
      <Container>
        <FadeIn className="page-intro"><p className="eyebrow">Project archive</p><h1>Selected work, explored in detail.</h1><p>Full-stack platforms, search and data systems, and thoughtful web experiences built around real needs.</p></FadeIn>
        <div className="project-index-grid">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} className="project-index-card" delay={(index % 2) * 0.06}>
              <Link href={`/projects/${project.slug}`}><ProjectVisual project={project} compact /></Link>
              <div className="project-index-copy"><span>0{index + 1} / {project.category}</span><h2>{project.title}</h2><p>{project.description}</p><Link className="text-link" href={`/projects/${project.slug}`}>Read case study <ArrowUpRight size={17} /></Link></div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </main>
  );
}
