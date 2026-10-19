import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

const facts = [
  ["Location", "Kenya"],
  ["Focus", "Backend Development, Data & Full-Stack Products"],
  ["Currently exploring", "Cloud Computing, AWS & Cloud Infrastructure"],
  ["Open to", "Full-time roles · Remote opportunities · Freelance projects"],
];

export function About() {
  return (
    <section id="about" className="section about-section">
      <Container>
        <FadeIn><SectionHeading eyebrow="About me" title="A developer who enjoys turning ideas into working products." /></FadeIn>
        <div className="about-grid">
          <FadeIn className="about-copy">
            <p>I’m a backend-focused software developer with experience building production APIs, business logic, data pipelines, databases, and complete digital products.</p>
            <p>I work across backend, frontend, mobile, data, and deployment when a product needs it — from healthcare and fintech platforms to systems that process and search large advertising datasets.</p>
            <p>I’m now expanding that software-development foundation into cloud computing, AWS, and production infrastructure.</p>
          </FadeIn>
          <FadeIn className="facts" delay={0.08}>
            {facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
