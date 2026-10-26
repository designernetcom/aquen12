import type { Metadata } from "next";

import WaterComponentsContent from "../water-components-content";

const canonicalPath = "/solutions/multi-port-valve";

export const metadata: Metadata = {
  title: "Multi Port Valve for Filters & Softeners | AQUEN",
  description: "Top-mount and side-mount Multi Port Valves for FRP vessels, filters and softeners, with brochure-based technical specifications.",
  alternates: { canonical: canonicalPath },
  openGraph: { title: "Multi Port Valve | AQUEN", description: "Top and side mount MPV options for filters and softeners.", url: canonicalPath, type: "website" },
};

export default function MultiPortValvePage() {
  return <WaterComponentsContent kind="mpv" />;
}
