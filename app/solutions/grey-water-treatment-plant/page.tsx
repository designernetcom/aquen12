import type { Metadata } from "next";

import GreyWaterTreatmentPlantContent from "./grey-water-treatment-plant-content";

const canonicalPath = "/solutions/grey-water-treatment-plant";

export const metadata: Metadata = {
  title: "Grey Water Treatment Plant | Recycle & Reuse Greywater | AQUEN",
  description:
    "Explore AQUEN grey water treatment plants for recycling and reuse of suitable domestic greywater in residential, commercial, institutional and industrial projects.",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Grey Water Treatment Plant | AQUEN",
    description:
      "Chamber-based greywater treatment with MBBR, clarification and selected disinfection options for non-potable reuse applications.",
    url: canonicalPath,
    type: "website",
  },
};

export default function GreyWaterTreatmentPlantPage() {
  return <GreyWaterTreatmentPlantContent />;
}
