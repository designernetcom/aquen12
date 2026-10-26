import type { Metadata } from "next";

import MixedBedDemineralisationContent from "./mixed-bed-demineralisation-system-content";

const canonicalPath = "/solutions/mixed-bed-demineralisation-system";

export const metadata: Metadata = {
  title: "Mixed Bed Demineralisation System | AQUEN Fluid Technologies LLP",
  description:
    "Explore AQUEN mixed bed demineralisation systems for high-purity water polishing, with FRP, MSEP and MSRL vessel options from 100 LPH to 10,000 LPH.",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Mixed Bed Demineralisation System | AQUEN Fluid Technologies LLP",
    description:
      "Mixed bed DI systems using cation and anion exchange resins for high-purity water applications, subject to feed quality and approved engineering design.",
    url: canonicalPath,
    type: "website",
  },
};

export default function MixedBedDemineralisationPage() {
  return <MixedBedDemineralisationContent />;
}
