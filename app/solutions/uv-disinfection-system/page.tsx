import type { Metadata } from "next";

import UVDisinfectionSystemContent from "./uv-disinfection-system-content";

const canonicalPath = "/solutions/uv-disinfection-system";

export const metadata: Metadata = {
  title: "UV Disinfection System | Aquen Fluid Technologies LLP",
  description:
    "Explore AQUEN UV disinfection systems for suitable water and wastewater applications, with 254 nm UV treatment, SS-304 / SS-316 reactor options and capacities from 1 to 100 m³/hr.",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "UV Disinfection System | Aquen Fluid Technologies LLP",
    description:
      "Chemical-free UV disinfection for suitable water and wastewater applications, subject to water quality, UV transmittance and validated system design.",
    url: canonicalPath,
    type: "website",
  },
};

export default function UVDisinfectionSystemPage() {
  return <UVDisinfectionSystemContent />;
}
