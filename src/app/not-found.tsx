import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";

export default function NotFound() { return <main className="not-found"><Container><p className="eyebrow">404</p><h1>This page hasn’t been built.</h1><p>The link may be outdated, or the page may have moved.</p><Link className="button" href="/"><ArrowLeft size={18} /> Back home</Link></Container></main>; }
