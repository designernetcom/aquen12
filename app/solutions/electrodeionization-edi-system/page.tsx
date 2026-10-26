import type { Metadata } from "next";

import EdiContent from "./electrodeionization-edi-system-content";

const canonicalPath = "/solutions/electrodeionization-edi-system";

export const metadata: Metadata = {
  title: "EDI Electrodeionization System | AQUEN Fluid Technologies LLP",
  description:
    "Explore AQUEN EDI electrodeionization systems from 250 to 5,000 LPH, with stainless steel construction, PLC/HMI automation, online monitoring and high-purity water treatment.",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "EDI Electrodeionization System | AQUEN Fluid Technologies LLP",
    description:
      "Continuous EDI systems for high-purity water from suitable RO permeate, with SS-304/SS-316 construction and model-wise technical specifications.",
    url: canonicalPath,
    type: "website",
  },
};

export default function EdiPage() {
  return <EdiContent />;
}
