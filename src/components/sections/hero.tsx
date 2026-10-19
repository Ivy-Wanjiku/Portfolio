import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowRight, BriefcaseBusiness, GitFork, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section id="home" className="hero">
      <Container className="hero-grid">
        <FadeIn className="hero-copy">
          <p className="eyebrow">Backend-Focused Software Developer · Kenya</p>
          <h1>
            <span className="hero-title-line">I build digital </span>
            <span className="hero-title-line">products that solve</span>
            <em>real problems.</em>
          </h1>
          <p className="hero-intro">I’m Ivy Wanjiku, a backend-focused software developer building production systems, APIs, data pipelines, and full-stack digital products.</p>
          <div className="hero-actions">
            <Link className="button" href="#work">View my work <ArrowDownRight size={18} /></Link>
            <Link className="button button-secondary" href="#contact">Let’s talk <ArrowRight size={18} /></Link>
          </div>
          <div className="social-links" aria-label="Social links">
            <a href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitFork size={19} /></a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness size={19} /></a>
            <a href={`mailto:${siteConfig.email}`} aria-label="Email"><Mail size={19} /></a>
          </div>
        </FadeIn>
        <FadeIn className="portrait-composition" delay={0.12}>
          <div className="portrait-frame">
            <Image className="portrait-photo" src="/images/ivy-wanjiku.png" alt="Portrait of Ivy Wanjiku" fill priority sizes="(max-width: 720px) 90vw, 440px" />
          </div>
          <div className="availability"><i /><span>Available for opportunities</span></div>
          <div className="hero-note"><p>Backend · Data · Mobile · Full-stack</p></div>
        </FadeIn>
      </Container>
    </section>
  );
}
