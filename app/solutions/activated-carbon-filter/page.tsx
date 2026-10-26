import type { Metadata } from "next";

import ActivatedCarbonFilterContent from "./activated-carbon-filter-content";

const canonicalPath = "/solutions/activated-carbon-filter";

export const metadata: Metadata = {
  title: "Activated Carbon Filter (ACF) | Aquen Fluid Technologies LLP",
  description:
    "Explore Activated Carbon Filters from Aquen Fluid Technologies LLP for colour, odour, free chlorine and suitable organic impurity reduction in FRP, MSEP and MSRL vessels.",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Activated Carbon Filter (ACF) | Aquen Fluid Technologies LLP",
    description:
      "Industrial activated carbon filtration solutions for water quality improvement, chlorine reduction and suitable organic impurity removal.",
    url: canonicalPath,
    type: "website",
  },
};

export default function ActivatedCarbonFilterPage() {
  return <ActivatedCarbonFilterContent />;
}
