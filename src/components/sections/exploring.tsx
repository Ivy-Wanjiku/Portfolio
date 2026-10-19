import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

const exploring = ["Cloud Computing", "AWS", "Cloud Infrastructure", "Cloud Architecture", "Scalable Deployment"];

export function Exploring() {
  return (
    <section className="exploring-section">
      <Container className="exploring-grid">
        <FadeIn>
          <p className="eyebrow light">Currently exploring</p>
          <h2>Taking strong systems<br />into the cloud.</h2>
          <p>I’m expanding an established software-development foundation into cloud engineering, architecture, and scalable deployment.</p>
        </FadeIn>
        <FadeIn className="exploring-list" delay={0.08}>
          {exploring.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong><ArrowUpRight size={18} /></div>)}
        </FadeIn>
      </Container>
    </section>
  );
}
