import type { Metadata } from "next";

import SewageTreatmentPlantContent from "./sewage-treatment-plant-content";

const canonicalPath = "/solutions/sewage-treatment-plant";

export const metadata: Metadata = {
  title: "Sewage Treatment Plant (STP) | SBR Technology | AQUEN",
  description:
    "Explore AQUEN SBR-based sewage treatment plants from 10 to 500 KLD, with primary and secondary clarification, optional tertiary treatment, and customized wastewater solutions.",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Sewage Treatment Plant (STP) | SBR Technology | AQUEN",
    description:
      "AQUEN SBR-based STP solutions from 10 to 500 KLD for residential, commercial, institutional and industrial wastewater applications.",
    url: canonicalPath,
    type: "website",
  },
};

export default function SewageTreatmentPlantPage() {
  return <SewageTreatmentPlantContent />;
}
