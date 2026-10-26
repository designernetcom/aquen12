import type { Metadata } from "next";

import CoagulationSystemsContent from "./coagulation-systems-content";

const canonicalPath = "/solutions/coagulation-systems";

export const metadata: Metadata = {
  title: "Coagulation Systems for WTP, STP & ETP | AQUEN",
  description:
    "Explore AQUEN coagulation systems for water and wastewater treatment, including flash mixers, coagulation reaction tanks, dosing systems, inline static mixers, chemical preparation tanks and flocculation tanks.",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Coagulation Systems for WTP, STP & ETP | AQUEN",
    description:
      "Coagulation equipment configurations for water and wastewater treatment, with typical specifications for six system types.",
    url: canonicalPath,
    type: "website",
  },
};

export default function CoagulationSystemsPage() {
  return <CoagulationSystemsContent />;
}
