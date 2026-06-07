import type { Metadata } from "next";
import { Suspense } from "react";
import { getAllBrands, getProducts } from "@/lib/catalog";
import { ShopBrowser } from "@/components/ShopBrowser";

export const metadata: Metadata = {
  title: "Shop all",
  description: "Browse every authenticated pre-loved designer piece available now.",
};

export default function ShopPage() {
  const brands = getAllBrands();
  const products = getProducts();

  return (
    <div className="container-page pt-12">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
          The collection
        </p>
        <h1 className="mt-2 font-serif text-4xl text-ink sm:text-5xl">Shop all</h1>
        <p className="mt-3 text-ink/70">
          Every piece is authenticated, gently worn and ready for its next
          chapter.
        </p>
      </header>

      <div className="mt-10">
        <Suspense fallback={<p className="text-sm text-ink/50">Loading…</p>}>
          <ShopBrowser products={products} brands={brands} />
        </Suspense>
      </div>
    </div>
  );
}
