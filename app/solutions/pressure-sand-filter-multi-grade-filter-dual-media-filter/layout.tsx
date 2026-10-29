import type { ReactNode } from "react";

import "@/app/products/product-premium.css";

export default function FiltrationSolutionsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="product-catalogue">{children}</div>;
}
