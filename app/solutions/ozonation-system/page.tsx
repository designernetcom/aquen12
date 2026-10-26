import type { Metadata } from "next";

import OzonationSystemContent from "./ozonation-system-content";

const canonicalPath = "/solutions/ozonation-system";

export const metadata: Metadata = {
  title: "Ozonation System | Aquen Fluid Technologies LLP",
  description:
    "Explore AQUEN ozonation systems for water and wastewater disinfection, oxidation, odour and colour reduction, with project-specific ozone generation and contact systems.",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Ozonation System | Aquen Fluid Technologies LLP",
    description:
      "Effective disinfection and advanced oxidation solutions for suitable water and wastewater treatment applications.",
    url: canonicalPath,
    type: "website",
  },
};

export default function OzonationSystemPage() {
  return <OzonationSystemContent />;
}
