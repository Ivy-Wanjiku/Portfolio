import type { ReactNode } from "react";
import { Container } from "./container";

export function Section({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return <section id={id} className={`section ${className}`}><Container>{children}</Container></section>;
}
