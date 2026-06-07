"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import type { Product } from "@/lib/types";
import type { SortKey } from "@/lib/catalog";
import { ProductGrid } from "@/components/ProductGrid";
import { ShopControls } from "@/components/ShopControls";

/**
 * Client-side catalog browser. Receives a (server-prepared) product list and
 * filters/sorts it in the browser based on the URL query — this keeps the page
 * itself static, so it works on GitHub Pages with no server.
 */
export function ShopBrowser({
  products,
  brands,
}: {
  products: Product[];
  brands: string[];
}) {
  const params = useSearchParams();
  const brand = params.get("brand") || "";
  const sort = (params.get("sort") as SortKey) || "newest";

  const filtered = useMemo(() => {
    const list = products.filter((p) => (brand ? p.brand === brand : true));
    return [...list].sort((a, b) => {
      // Available pieces always come before sold ones.
      if (!!a.sold !== !!b.sold) return a.sold ? 1 : -1;
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "newest":
        default:
          return +new Date(b.addedAt) - +new Date(a.addedAt);
      }
    });
  }, [products, brand, sort]);

  return (
    <>
      <ShopControls brands={brands} total={filtered.length} />
      <div className="mt-8">
        <ProductGrid products={filtered} />
      </div>
    </>
  );
}
