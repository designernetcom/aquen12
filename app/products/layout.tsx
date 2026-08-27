import type { ReactNode } from 'react'
import './product-premium.css'

export default function ProductsLayout({ children }: { children: ReactNode }) {
  return <div className="product-catalogue">{children}</div>
}
