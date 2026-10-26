import type { Metadata } from "next";

import BarScreenSystemsContent from "./bar-screen-systems-content";

const canonicalPath = "/solutions/bar-screen-systems";

export const metadata: Metadata = {
  title: "Bar Screen Systems for WTP, STP & ETP | AQUEN",
  description:
    "Explore AQUEN bar screen systems for water and wastewater treatment, including manual and automatic coarse screens, fine bar screens, step screens, drum screens, and band screens.",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Bar Screen Systems for WTP, STP & ETP | AQUEN",
    description:
      "Bar screen configurations for coarse and fine solids screening in water and wastewater treatment applications.",
    url: canonicalPath,
    type: "website",
  },
};

export default function BarScreenSystemsPage() {
  return <BarScreenSystemsContent />;
}
