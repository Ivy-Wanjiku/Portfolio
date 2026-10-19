import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

const experience = [
  {
    icon: BriefcaseBusiness,
    title: "Junior Software Developer — Joombaah",
    period: "April 2025 – Present",
    summary: "Backend-focused software development across production APIs, data pipelines, document intelligence, AI-assisted workflows, and frontend/backend integration.",
    focusAreas: [
      {
        title: "Backend & Platform Engineering",
        items: [
          "Built and maintained Django / Django REST Framework APIs",
          "Worked with authentication, business logic, PostgreSQL, and MySQL",
          "Debugged production issues across backend, database, and frontend layers",
          "Improved platform features including search, filtering, uploads, and user-facing workflows",
        ],
      },
      {
        title: "Data & Document Pipelines",
        items: [
          "Worked on ingestion and processing pipelines for large collections of documents and advertising data",
          "Cleaned, normalized, and deduplicated structured datasets",
          "Built or supported OCR workflows for extracting text, contacts, and document metadata",
          "Maintained source provenance and structured outputs for downstream processing",
        ],
      },
      {
        title: "AI & Document Intelligence",
        items: [
          "Worked with OCR, YOLOv8, CLIP embeddings, and semantic search",
          "Supported document classification, entity extraction, topic tagging, and AI-assisted workflows",
          "Contributed to systems that transformed unstructured documents into searchable and analyzable information",
        ],
      },
      {
        title: "Production & Delivery",
        items: [
          "Worked with Docker, Celery, and CI/CD workflows",
          "Supported production deployments and debugging",
          "Collaborated across frontend, backend, and data workflows to deliver features without breaking existing functionality",
        ],
      },
    ],
    tags: ["Django", "Django REST Framework", "REST APIs", "PostgreSQL", "MySQL", "OCR", "Embeddings", "Docker", "Celery", "CI/CD"],
  },
  {
    icon: BriefcaseBusiness,
    title: "Software Development Intern — Joombaah",
    period: "January 2025 – April 2025",
    summary: "Joined the existing software platform and contributed to Python, Django, data extraction, and debugging work while learning the architecture of a production codebase.",
    focusAreas: [
      {
        title: "Highlights",
        items: [
          "Python and Django development",
          "Data extraction workflows",
          "Debugging existing functionality",
          "Git-based team collaboration",
          "Translating technical requirements into working features",
        ],
      },
    ],
    tags: ["Python", "Django", "Data extraction", "Data pipelines", "Debugging", "Git"],
  },
];

export function Journey() {
  return (
    <section id="experience" className="section journey-section">
      <Container>
        <FadeIn><SectionHeading eyebrow="Professional experience" title="Engineering systems that work in production." /></FadeIn>
        <div className="journey-list">
          {experience.map(({ icon: Icon, title, period, summary, focusAreas, tags }, index) => (
            <FadeIn className={`journey-item ${index === 0 ? "journey-item-primary" : "journey-item-secondary"}`} key={title} delay={index * 0.05}>
              <div className="journey-number">0{index + 1}</div>
              <div className="journey-icon"><Icon size={23} /></div>
              <div>
                <p className="journey-period">{period}</p>
                <h3>{title}</h3>
                <p>{summary}</p>
                {focusAreas.length ? <div className="experience-groups">{focusAreas.map((area) => <section key={area.title}><h4>{area.title}</h4><ul className="experience-list">{area.items.map((item) => <li key={item}>{item}</li>)}</ul></section>)}</div> : null}
                <div className="inline-list">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </FadeIn>
          ))}
          <FadeIn className="journey-item education-item" delay={0.1}>
            <div className="journey-number">EDU</div>
            <div className="journey-icon"><GraduationCap size={23} /></div>
            <div><p className="journey-period">Education</p><h3>AkiraChix</h3><p className="journey-kicker">Diploma in Software Development</p><p>Practical training across Python, JavaScript, Kotlin, machine learning, quality assurance, and DevOps.</p></div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
