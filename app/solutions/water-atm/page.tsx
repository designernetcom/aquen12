import type { Metadata } from "next";

import WaterAtmContent from "./water-atm-content";

const canonicalPath = "/solutions/water-atm";

export const metadata: Metadata = {
  title: "Water ATM | Coin, RFID Card & UPI Water Dispensing System | AQUEN",
  description:
    "Explore AQUEN Water ATM solutions with coin, RFID card and QR/UPI payments, programmable dispensing, optional water-treatment stages, and capacities from 50 to 1,000 LPH.",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Water ATM | AQUEN Fluid Technologies LLP",
    description:
      "Smart drinking-water dispensing systems with configurable treatment, payment and monitoring options for 50 to 1,000 LPH applications.",
    url: canonicalPath,
    type: "website",
  },
};

export default function WaterAtmPage() {
  return <WaterAtmContent />;
}
