import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, GitFork } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ProjectScreenshot, ProjectVisual } from "@/components/projects/project-visual";
import { projects, siteConfig } from "@/data/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.description, alternates: { canonical: `/projects/${slug}` }, openGraph: { title: project.title, description: project.description, url: `${siteConfig.url}/projects/${slug}` } };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return (
    <main className="case-study">
      <Container>
        <Link className="back-link" href="/projects"><ArrowLeft size={16} /> All projects</Link>
        <header className="case-hero"><p className="eyebrow">{project.category}</p><h1>{project.title}</h1><p>{project.description}</p></header>
        <ProjectVisual project={project} />
        <div className="case-layout">
          <aside className="case-aside"><p>Technology stack</p><div className="tag-list">{project.technologies.map((item) => <span key={item}>{item}</span>)}</div><div className="case-links">{project.links.live ? <a href={project.links.live} target="_blank" rel="noreferrer">Live website <ArrowUpRight size={16} /></a> : <span>Live link — placeholder</span>}{project.links.github ? <a href={project.links.github} target="_blank" rel="noreferrer"><GitFork size={16} /> GitHub</a> : <span>GitHub link — placeholder</span>}</div></aside>
          <article className="case-content">
            <CaseSection number="01" title="Project overview"><p>{project.description}</p></CaseSection>
            <CaseSection number="02" title="The problem"><p>{project.problem}</p></CaseSection>
            <CaseSection number="03" title="My role"><p>{project.role}</p></CaseSection>
            <CaseSection number="04" title="Development approach"><p>{project.approach}</p></CaseSection>
            <CaseSection number="05" title="Main features"><ul>{project.features.map((item) => <li key={item}>{item}</li>)}</ul></CaseSection>
            <CaseSection number="06" title="Challenges"><ul>{project.challenges.map((item) => <li key={item}>{item}</li>)}</ul></CaseSection>
            <CaseSection number="07" title="Solutions"><ul>{project.solutions.map((item) => <li key={item}>{item}</li>)}</ul></CaseSection>
            <CaseSection number="08" title="What I learned"><p>{project.learnings}</p></CaseSection>
            <CaseSection number="09" title="Screenshots"><ProjectScreenshot project={project} /></CaseSection>
          </article>
        </div>
        <nav className="next-project" aria-label="Next project"><span>Continue exploring</span><Link href={`/projects/${projects[(projects.indexOf(project) + 1) % projects.length].slug}`}>{projects[(projects.indexOf(project) + 1) % projects.length].title}<ArrowUpRight size={22} /></Link></nav>
      </Container>
    </main>
  );
}

function CaseSection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return <section className="case-section"><div><span>{number}</span><h2>{title}</h2></div><div>{children}</div></section>;
}
