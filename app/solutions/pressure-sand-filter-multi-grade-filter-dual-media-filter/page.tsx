import type { Metadata } from "next";
import FiltrationSolutionsContent from "../water-treatment-plants/pressure-sand-filter-multi-grade-filter-dual-media-filter/filtration-solutions-content";

const canonicalPath =
  "/solutions/pressure-sand-filter-multi-grade-filter-dual-media-filter";

export const metadata: Metadata = {
  title:
    "Pressure Sand Filter, MGF & Dual Media Filter | Aquen Fluid Technologies",
  description:
    "Explore industrial Pressure Sand Filters, Multi Grade Filters and Dual Media Filters from Aquen Fluid Technologies LLP, available in FRP, MSEP and MSRL vessel configurations.",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title:
      "Pressure Sand Filter, MGF & Dual Media Filter | Aquen Fluid Technologies",
    description:
      "Industrial water filtration systems for suspended-solids removal, turbidity reduction and reliable water pre-treatment.",
    url: canonicalPath,
    type: "website",
  },
};

export default function FiltrationSolutionsPage() {
  return <FiltrationSolutionsContent />;
}
