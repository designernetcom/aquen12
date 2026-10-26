import type { Metadata } from "next";

import WaterCoolerContent from "./water-cooler-content";

const canonicalPath = "/solutions/water-cooler";

export const metadata: Metadata = {
  title: "Water Coolers | Stainless Steel Water Cooling Solutions | AQUEN",
  description:
    "Explore AQUEN water coolers from 5 to 1,000 LPH, with stainless steel contact parts, storage options, multiple taps, optional purification connections, and customizable configurations.",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Water Coolers | AQUEN Fluid Technologies LLP",
    description:
      "Stainless steel water cooler solutions with storage configurations, multiple taps, optional purification connections and custom capacities.",
    url: canonicalPath,
    type: "website",
  },
};

export default function WaterCoolerPage() {
  return <WaterCoolerContent />;
}
