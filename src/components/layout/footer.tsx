import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="footer">
      <Container className="footer-inner">
        <div>
          <Link className="footer-name" href="/">Ivy Wanjiku</Link>
          <p>Backend-Focused Software Developer</p>
        </div>
        <div className="footer-links" aria-label="Social links">
          <a href={siteConfig.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${siteConfig.email}`}>Email</a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Ivy Wanjiku. Built with Next.js.</p>
      </Container>
    </footer>
  );
}
