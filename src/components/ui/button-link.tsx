import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
  download?: boolean;
};

export function ButtonLink({ href, children, variant = "primary", className = "", external, download }: ButtonLinkProps) {
  const classes = `button ${variant === "secondary" ? "button-secondary" : ""} ${className}`.trim();
  if (external || download || href.startsWith("mailto:")) {
    return <a className={classes} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} download={download}>{children}</a>;
  }
  return <Link className={classes} href={href}>{children}</Link>;
}
