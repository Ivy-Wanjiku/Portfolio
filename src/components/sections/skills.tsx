import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/data/site";

export function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <Container>
        <FadeIn><SectionHeading eyebrow="Toolkit" title="Skills I use to move from idea to production." copy="A practical toolkit across interfaces, APIs, data, infrastructure, and emerging AI workflows." /></FadeIn>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <FadeIn className="skill-group" key={group.title} delay={(index % 3) * 0.04}>
              <span className="skill-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{group.title}</h3>
              <div className="skill-major-list">{group.primary.map((item) => <span key={item}>{item}</span>)}</div>
              <p className="skill-supporting">{group.supporting.map((item) => <span key={item}>{item}</span>)}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
