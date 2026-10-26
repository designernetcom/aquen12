import type { Metadata } from "next";

import OilGreaseRemovalSystemsContent from "./oil-grease-removal-systems-content";

const canonicalPath = "/solutions/oil-grease-removal-systems";

export const metadata: Metadata = {
  title: "Oil & Grease Removal Systems for WTP, STP & ETP | AQUEN",
  description:
    "Explore AQUEN oil and grease removal systems, including oil traps, automatic skimmers, tube-pack separators, DAF, coalescing plate interceptors, and collection-tank skimmers.",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Oil & Grease Removal Systems for WTP, STP & ETP | AQUEN",
    description:
      "Oil and grease separation configurations for suitable water and wastewater treatment applications.",
    url: canonicalPath,
    type: "website",
  },
};

export default function OilGreaseRemovalSystemsPage() {
  return <OilGreaseRemovalSystemsContent />;
}
