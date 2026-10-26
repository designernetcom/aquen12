import type { Metadata } from "next";

import AnionBedContent from "./anion-bed-content";

const canonicalPath = "/solutions/anion-bed";

export const metadata: Metadata = {
  title: "Anion Bed | Aquen Fluid Technologies LLP",
  description:
    "Explore AQUEN anion bed systems for demineralisation and de-ionisation trains, with strong base anion resin, FRP, MSEP and MSRL vessel options from 100 LPH to 10,000 LPH.",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Anion Bed | Aquen Fluid Technologies LLP",
    description:
      "Anion exchange systems for suitable demineralisation applications, subject to cation exchange, resin type, feed chemistry, regeneration and final design.",
    url: canonicalPath,
    type: "website",
  },
};

export default function AnionBedPage() {
  return <AnionBedContent />;
}
