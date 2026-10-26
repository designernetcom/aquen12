import type { Metadata } from "next";

import UltrafiltrationSystemContent from "./ultrafiltration-system-content";

const canonicalPath = "/solutions/ultrafiltration-system";

export const metadata: Metadata = {
  title: "Ultrafiltration (UF) System | Aquen Fluid Technologies LLP",
  description:
    "Explore AQUEN ultrafiltration systems from 2 to 20 m³/hr with PVDF hollow-fiber membranes, automatic backwash and project-specific design.",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Ultrafiltration (UF) System | Aquen Fluid Technologies LLP",
    description:
      "Compact, modular and customized UF system solutions for suitable water and wastewater applications.",
    url: canonicalPath,
    type: "website",
  },
};

export default function UltrafiltrationSystemPage() {
  return <UltrafiltrationSystemContent />;
}
