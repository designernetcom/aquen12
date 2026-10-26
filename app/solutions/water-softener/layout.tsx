import type { ReactNode } from "react";

import "@/app/products/product-premium.css";

export default function WaterSoftenerLayout({ children }: { children: ReactNode }) {
  return <div className="product-catalogue">{children}</div>;
}
