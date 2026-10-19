import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Ivy Wanjiku — Backend-Focused Software Developer", template: "%s — Ivy Wanjiku" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: { title: "Ivy Wanjiku — Backend-Focused Software Developer", description: siteConfig.description, url: "/", siteName: siteConfig.name, locale: "en_KE", type: "website" },
  twitter: { card: "summary_large_image", title: "Ivy Wanjiku — Backend-Focused Software Developer", description: siteConfig.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#faf8f5" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Navigation />{children}<Footer /></body></html>;
}
