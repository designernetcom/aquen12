import type { Metadata } from "next";

import WaterComponentsContent from "../water-components-content";

const canonicalPath = "/solutions/distribution-systems";

export const metadata: Metadata = {
  title: "FRP Vessel Distribution Systems | AQUEN",
  description: "Top distributor and hub-and-lateral distribution systems in UPVC SCH-80 for AQUEN FRP vessels from 8 x 44 to 63 x 86 inches.",
  alternates: { canonical: canonicalPath },
  openGraph: { title: "FRP Vessel Distribution Systems | AQUEN", description: "Top and hub-and-lateral distribution systems for FRP vessels.", url: canonicalPath, type: "website" },
};

export default function DistributionSystemsPage() {
  return <WaterComponentsContent kind="distribution" />;
}
