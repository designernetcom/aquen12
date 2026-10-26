import type { Metadata } from "next";

import WaterSoftenerContent from "./water-softener-content";

const canonicalPath = "/solutions/water-softener";

export const metadata: Metadata = {
  title: "Water Softener Systems | Aquen Fluid Technologies LLP",
  description:
    "Learn how industrial water softening works and request a confirmed Water Softener configuration from Aquen Fluid Technologies LLP.",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Water Softener Systems | Aquen Fluid Technologies LLP",
    description:
      "General water softening guidance, source-status notes and a request path for a confirmed AQUEN configuration.",
    url: canonicalPath,
    type: "website",
  },
};

export default function WaterSoftenerPage() {
  return <WaterSoftenerContent />;
}
