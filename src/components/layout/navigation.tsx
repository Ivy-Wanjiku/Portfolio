"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";

const links = [
  ["Home", "/#home"],
  ["About", "/#about"],
  ["Experience", "/#experience"],
  ["Work", "/#work"],
  ["Skills", "/#skills"],
  ["Contact", "/#contact"],
] as const;

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
    const sections = links.map(([, href]) => href.slice(2));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65%", threshold: [0, 0.3, 0.6] },
    );
    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="wordmark" href="/" aria-label="Ivy Wanjiku, home" onClick={() => setOpen(false)}>
          Ivy Wanjiku<span>.</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={label} href={href} className={pathname === "/" && active === href.slice(2) ? "active" : ""}>
              {label}
            </Link>
          ))}
          <a className="button button-small" href={siteConfig.cv} download="Ivy_Wanjiku_CV.pdf">
            Download CV <Download size={15} aria-hidden="true" />
          </a>
        </nav>
        <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <nav id="mobile-nav" className={`mobile-nav ${open ? "open" : ""}`} aria-label="Mobile navigation">
        {links.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <a className="button" href={siteConfig.cv} download="Ivy_Wanjiku_CV.pdf">Download CV <Download size={16} aria-hidden="true" /></a>
      </nav>
    </header>
  );
}
