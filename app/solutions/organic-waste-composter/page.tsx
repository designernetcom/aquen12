import type { Metadata } from "next";

import OrganicWasteComposterContent from "./organic-waste-composter-content";

const canonicalPath = "/solutions/organic-waste-composter";

export const metadata: Metadata = {
  title: "Organic Waste Composter Systems | AQUEN Fluid Technologies LLP",
  description:
    "Explore AQUEN organic waste composter systems, including manual, automatic, in-vessel, modular, continuous, and community composters for residential, commercial, institutional, and industrial applications.",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Organic Waste Composter Systems | AQUEN",
    description:
      "Manual and automatic organic waste composter systems for biodegradable waste management across residential, commercial, institutional and industrial applications.",
    url: canonicalPath,
    type: "website",
  },
};

export default function OrganicWasteComposterPage() {
  return <OrganicWasteComposterContent />;
}
