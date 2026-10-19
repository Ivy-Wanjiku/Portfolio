import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/types";
import { FadeIn } from "@/components/ui/fade-in";
import { ProjectVisual } from "./project-visual";

export function ProjectShowcase({ project, index }: { project: Project; index: number }) {
  return (
    <FadeIn className="project-showcase">
      <div className="project-copy">
        <div className="project-index">0{index + 1}</div>
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <dl className="project-details">
          <div><dt>The problem</dt><dd>{project.problem}</dd></div>
          <div><dt>What I built</dt><dd>{project.built}</dd></div>
        </dl>
        <div className="tag-list" aria-label="Technologies">
          {project.technologies.slice(0, 7).map((technology) => <span key={technology}>{technology}</span>)}
        </div>
        <div className="project-actions">
          <Link className="text-link" href={`/projects/${project.slug}`}>View case study <ArrowUpRight size={17} aria-hidden="true" /></Link>
          {project.links.live ? <a className="text-link secondary-link" href={project.links.live} target="_blank" rel="noreferrer">Live website <ExternalLink size={16} aria-hidden="true" /></a> : null}
        </div>
      </div>
      <Link href={`/projects/${project.slug}`} className="project-visual-link" aria-label={`View ${project.title} case study`}>
        <ProjectVisual project={project} />
      </Link>
    </FadeIn>
  );
}
