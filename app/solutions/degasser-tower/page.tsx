import type { Metadata } from "next";

import DegasserTowerContent from "./degasser-tower-content";

const canonicalPath = "/solutions/degasser-tower";

export const metadata: Metadata = {
  title: "Degasser Tower | Aquen Fluid Technologies LLP",
  description:
    "Explore AQUEN degasser tower systems for dissolved CO₂ reduction using packed air-stripping contactors in FRP, MSEP and MSRL vessels from 100 LPH to 10,000 LPH.",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Degasser Tower | Aquen Fluid Technologies LLP",
    description:
      "Packed degasser tower systems for dissolved carbon dioxide reduction, subject to feed chemistry, air flow, water flow and approved engineering design.",
    url: canonicalPath,
    type: "website",
  },
};

export default function DegasserTowerPage() {
  return <DegasserTowerContent />;
}
