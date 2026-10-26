import type { Metadata } from "next";

import IndustrialWaterChillerContent from "./industrial-water-chiller-content";

const canonicalPath = "/solutions/industrial-water-chiller";

export const metadata: Metadata = {
  title: "Industrial Water Chillers | Process Cooling Solutions | AQUEN",
  description:
    "Explore AQUEN industrial water chillers from 1 to 100 TR, with air-cooled and water-cooled configurations, scroll and screw compressors, and customizable industrial cooling options.",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Industrial Water Chillers | AQUEN Fluid Technologies LLP",
    description:
      "Process cooling solutions with air-cooled and water-cooled configurations, scroll and screw compressors, and custom engineering options.",
    url: canonicalPath,
    type: "website",
  },
};

export default function IndustrialWaterChillerPage() {
  return <IndustrialWaterChillerContent />;
}
