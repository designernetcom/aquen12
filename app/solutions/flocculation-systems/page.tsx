import type { Metadata } from "next";

import FlocculationSystemsContent from "./flocculation-systems-content";

const canonicalPath = "/solutions/flocculation-systems";

export const metadata: Metadata = {
  title: "Flocculation Systems for WTP, STP & ETP | AQUEN",
  description:
    "Explore AQUEN flocculation systems for water and wastewater treatment, including horizontal and vertical flocculators, pipe flocculators, mechanical multi-stage systems, tank-mounted flocculators, and lamella tube settlers.",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Flocculation Systems for WTP, STP & ETP | AQUEN",
    description:
      "Flocculation equipment configurations for water and wastewater treatment, with typical specifications for six system types.",
    url: canonicalPath,
    type: "website",
  },
};

export default function FlocculationSystemsPage() {
  return <FlocculationSystemsContent />;
}
