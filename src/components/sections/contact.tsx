import { BriefcaseBusiness, GitFork, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { siteConfig } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <Container className="contact-grid">
        <FadeIn className="contact-copy">
          <p className="eyebrow">Start a conversation</p>
          <h2>Have something worth building?</h2>
          <p>I’m open to software development opportunities, collaborations, and freelance projects. If you’re working on something interesting, I’d love to hear about it.</p>
          <div className="contact-links">
            <a href={`mailto:${siteConfig.email}`}><Mail size={18} /> Send me an email</a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer"><BriefcaseBusiness size={18} /> LinkedIn</a>
            <a href={siteConfig.github} target="_blank" rel="noreferrer"><GitFork size={18} /> GitHub</a>
          </div>
        </FadeIn>
        <FadeIn delay={0.08}><ContactForm /></FadeIn>
      </Container>
    </section>
  );
}
