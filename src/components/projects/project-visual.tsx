import Image from "next/image";
import { Banknote, Database, HeartPulse, Recycle, Search, Sparkles } from "lucide-react";
import type { Project } from "@/types";

const icons = {
  lifeshine: HeartPulse,
  "adverts-explorer": Search,
  fanikisha: Banknote,
  reversetaka: Recycle,
  "youth-on-purpose": Sparkles,
  sabilabs: Database,
};

const projectImages: Partial<Record<Project["slug"], { src: string; alt: string }>> = {
  "adverts-explorer": {
    src: "/images/projects/adverts.png",
    alt: "Adverts Explorer advertising intelligence and creative discovery dashboard",
  },
  lifeshine: {
    src: "/images/projects/lifeshine.png",
    alt: "LifeShine home healthcare platform landing page",
  },
  fanikisha: {
    src: "/images/projects/fanikisha.png",
    alt: "Fanikisha dairy record-keeping platform welcome screen",
  },
  reversetaka: {
    src: "/images/projects/reversetaka.png",
    alt: "ReverseTaka sustainability application logo",
  },
  "youth-on-purpose": {
    src: "/images/projects/youth-on-purpose.png",
    alt: "Youth on Purpose mentorship and empowerment website landing page",
  },
  sabilabs: {
    src: "/images/projects/sabilabs.png",
    alt: "SabiLabs corporate website redesign landing page",
  },
};

export function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  const Icon = icons[project.slug as keyof typeof icons] ?? Database;
  const image = projectImages[project.slug];
  return (
    <div className={`project-visual ${project.accent} ${image ? "has-image" : ""} ${compact ? "compact" : ""}`}>
      <div className="visual-topbar"><span /><span /><span /><small>PROJECT / {project.slug.toUpperCase()}</small></div>
      {image ? <div className={`project-image-wrap ${project.slug}`}><Image className="project-image" src={image.src} alt={image.alt} fill sizes="(max-width: 720px) 100vw, 50vw" priority={project.slug === "fanikisha"} /></div> : <div className="visual-body">
        <div className="visual-icon"><Icon size={compact ? 26 : 34} strokeWidth={1.5} /></div>
        <p>{project.category}</p>
        <strong>{project.title}</strong>
        <div className="visual-lines"><i /><i /><i /></div>
      </div>}
    </div>
  );
}

export function ProjectScreenshot({ project }: { project: Project }) {
  const image = projectImages[project.slug];
  if (!image) return <div className="screenshot-placeholder"><span>Project screenshot placeholder</span><small>Replace with approved product imagery</small></div>;
  return <figure className={`case-screenshot ${project.slug}`}><div className="case-screenshot-image"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 720px) 100vw, 760px" /></div><figcaption>{project.title} project preview</figcaption></figure>;
}
