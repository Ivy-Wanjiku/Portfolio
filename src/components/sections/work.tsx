import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { ProjectShowcase } from "@/components/projects/project-showcase";
import { ProjectVisual } from "@/components/projects/project-visual";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredProjects, moreProjects } from "@/data/site";

export function Work() {
  return (
    <section id="work" className="section work-section">
      <Container>
        <FadeIn><SectionHeading eyebrow="Selected work" title="Systems with purpose, built end to end." copy="A few things I’ve designed, built, and helped bring to life." /></FadeIn>
        <div className="projects-stack">{featuredProjects.map((project, index) => <ProjectShowcase key={project.slug} project={project} index={index} />)}</div>
        <div className="more-work">
          <FadeIn className="more-work-heading"><p className="eyebrow">More work</p><h3>Focused web experiences.</h3></FadeIn>
          <div className="more-work-grid">
            {moreProjects.map((project, index) => (
              <FadeIn className="more-work-item" key={project.slug} delay={index * 0.05}>
                <Link className="more-work-visual" href={`/projects/${project.slug}`} aria-label={`View ${project.title} case study`}><ProjectVisual project={project} compact /></Link>
                <div className="more-work-copy"><p>{project.category}</p><h4>{project.title}</h4><span>{project.description}</span><div><Link className="text-link" href={`/projects/${project.slug}`}>Case study <ArrowUpRight size={16} /></Link>{project.links.live ? <a className="text-link secondary-link" href={project.links.live} target="_blank" rel="noreferrer">Live site <ExternalLink size={15} /></a> : null}</div></div>
              </FadeIn>
            ))}
          </div>
        </div>
        <FadeIn className="all-work-link"><Link className="button button-secondary" href="/projects">View all projects <ArrowRight size={18} /></Link></FadeIn>
      </Container>
    </section>
  );
}
