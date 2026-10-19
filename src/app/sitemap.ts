import type { MetadataRoute } from "next";
import { projects, siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/projects", ...projects.map((project) => `/projects/${project.slug}`)].map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date(), changeFrequency: path ? "monthly" as const : "weekly" as const, priority: path === "" ? 1 : 0.8 }));
}
