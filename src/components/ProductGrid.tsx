import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/ProductCard";

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-ink/20 py-20 text-center">
        <p className="font-serif text-xl text-ink">No pieces match yet</p>
        <p className="mt-2 text-sm text-ink/60">
          Try clearing the filters — new arrivals land regularly.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>
  );
}
