import type { Metadata } from "next";

import IronRemovalPlantContent from "./iron-removal-plant-content";

const canonicalPath = "/solutions/iron-removal-plant";

export const metadata: Metadata = {
  title: "Iron Removal Plant | Aquen Fluid Technologies LLP",
  description:
    "Explore AQUEN Iron Removal Plants for iron, manganese and hydrogen sulphide reduction, with FRP, MSEP and MSRL options and brochure-sourced standard models.",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Iron Removal Plant | Aquen Fluid Technologies LLP",
    description:
      "Iron removal systems with aeration, filtration, activated media and project-specific vessel configurations.",
    url: canonicalPath,
    type: "website",
  },
};

export default function IronRemovalPlantPage() {
  return <IronRemovalPlantContent />;
}
