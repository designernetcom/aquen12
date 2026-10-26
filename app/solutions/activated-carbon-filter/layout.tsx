import type { ReactNode } from "react";

import "@/app/products/product-premium.css";

export default function ActivatedCarbonFilterLayout({ children }: { children: ReactNode }) {
  return <div className="product-catalogue">{children}</div>;
}
