import type { Metadata } from "next";

import FluorideRemovalPlantContent from "./fluoride-removal-plant-content";

const canonicalPath = "/solutions/fluoride-removal-plant";

export const metadata: Metadata = {
  title: "Fluoride Removal Plant | Aquen Fluid Technologies LLP",
  description:
    "Explore AQUEN Fluoride Removal Plants using activated alumina media for suitable groundwater and industrial applications, with brochure-sourced models and typical water-quality values.",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Fluoride Removal Plant | Aquen Fluid Technologies LLP",
    description:
      "Activated alumina fluoride treatment systems with FRP, MSEP and MSRL vessel options, subject to water analysis and engineering confirmation.",
    url: canonicalPath,
    type: "website",
  },
};

export default function FluorideRemovalPlantPage() {
  return <FluorideRemovalPlantContent />;
}
