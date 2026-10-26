import type { Metadata } from "next";

import WaterComponentsContent from "../water-components-content";

const canonicalPath = "/solutions/frp-vessels";

export const metadata: Metadata = {
  title: "FRP Pressure Vessels for Water & Wastewater | AQUEN",
  description: "Explore AQUEN FRP pressure vessels with food-grade PE liners, standard and tripod bases, and sizes from 8 x 44 to 63 x 86 inches.",
  alternates: { canonical: canonicalPath },
  openGraph: { title: "FRP Pressure Vessels | AQUEN", description: "FRP pressure vessels for water and wastewater treatment applications.", url: canonicalPath, type: "website" },
};

export default function FrpVesselsPage() {
  return <WaterComponentsContent kind="frp" />;
}
