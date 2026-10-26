import type { Metadata } from "next";

import CationBedContent from "./cation-bed-content";

const canonicalPath = "/solutions/cation-bed";

export const metadata: Metadata = {
  title: "Cation Bed | Aquen Fluid Technologies LLP",
  description:
    "Explore AQUEN cation bed systems for sodium-cycle softening and hydrogen-cycle cation exchange, with FRP, MSEP and MSRL vessel options from 100 LPH to 10,000 LPH.",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Cation Bed | Aquen Fluid Technologies LLP",
    description:
      "Cation exchange systems for water softening and suitable demineralisation trains, subject to resin form, feed chemistry and approved engineering design.",
    url: canonicalPath,
    type: "website",
  },
};

export default function CationBedPage() {
  return <CationBedContent />;
}
