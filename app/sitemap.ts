import type { MetadataRoute } from "next";

import { getAllSolutionLinks } from "@/lib/data/static-solutions";

const publicSolutionPaths = [
  ...getAllSolutionLinks().map((item) => item.to),
  "/solutions/organic-waste-composter",
  "/solutions/water-treatment-plants/clarifier-system",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const uniquePaths = [...new Set(publicSolutionPaths)];
  const now = new Date();

  return [
    { url: new URL("/", baseUrl).toString(), lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: new URL("/contact", baseUrl).toString(), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...uniquePaths.map((path) => ({
      url: new URL(path, baseUrl).toString(),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
