import type { Metadata } from "next";

import EffluentTreatmentPlantContent from "./effluent-treatment-plant-content";

const canonicalPath = "/solutions/effluent-treatment-plant";

export const metadata: Metadata = {
  title: "Effluent Treatment Plant (ETP) | MBBR Technology | AQUEN",
  description:
    "Explore AQUEN MBBR-based effluent treatment plants from 10 to 500 KLD for industrial wastewater treatment, with primary and secondary clarification and configurable execution options.",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Effluent Treatment Plant (ETP) | MBBR Technology | AQUEN",
    description:
      "Industrial effluent treatment solutions from 10 to 500 KLD with configurable MBBR, clarification, filtration and disinfection stages.",
    url: canonicalPath,
    type: "website",
  },
};

export default function EffluentTreatmentPlantPage() {
  return <EffluentTreatmentPlantContent />;
}
