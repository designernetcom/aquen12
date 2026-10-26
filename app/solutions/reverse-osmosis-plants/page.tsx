import type { Metadata } from "next";

import ReverseOsmosisPlantsContent from "./reverse-osmosis-plants-content";

const canonicalPath = "/solutions/reverse-osmosis-plants";

export const metadata: Metadata = {
  title: "Reverse Osmosis (RO) Plants | Aquen Fluid Technologies LLP",
  description:
    "Explore AQUEN Reverse Osmosis Plants from 250 to 15,000 LPH, with feed-specific pretreatment, membrane systems, instrumentation and control options.",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Reverse Osmosis (RO) Plants | Aquen Fluid Technologies LLP",
    description:
      "Reliable, efficient, compact and customized RO plant solutions for residential, commercial and industrial water treatment applications.",
    url: canonicalPath,
    type: "website",
  },
};

export default function ReverseOsmosisPlantsPage() {
  return <ReverseOsmosisPlantsContent />;
}
