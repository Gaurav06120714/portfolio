import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl, changeFrequency: "monthly", priority: 1 }];
}
