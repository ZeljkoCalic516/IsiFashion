"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import type { SortKey } from "@/lib/catalog";

const sortOptions: { value: SortKey; label: string }[] = [
  { value: "newest", label: "Newest first" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
];

export function ShopControls({
  brands,
  total,
}: {
  brands: string[];
  total: number;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const currentBrand = params.get("brand") ?? "";
  const currentSort = (params.get("sort") as SortKey) ?? "newest";

  function update(key: string, value: string) {
    const next = new URLSearchParams(params.toString());
    if (value) next.set(key, value);
    else next.delete(key);
    router.push(`${pathname}?${next.toString()}`, { scroll: false });
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 pb-4">
      <p className="text-sm text-ink/60">
        {total} {total === 1 ? "piece" : "pieces"}
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2 text-sm text-ink/70">
          <span className="hidden sm:inline">Brand</span>
          <select
            value={currentBrand}
            onChange={(e) => update("brand", e.target.value)}
            className="rounded-full border border-ink/20 bg-sand-50 px-4 py-2 text-sm text-ink focus:border-burgundy focus:outline-none"
          >
            <option value="">All brands</option>
            {brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-center gap-2 text-sm text-ink/70">
          <span className="hidden sm:inline">Sort</span>
          <select
            value={currentSort}
            onChange={(e) => update("sort", e.target.value)}
            className="rounded-full border border-ink/20 bg-sand-50 px-4 py-2 text-sm text-ink focus:border-burgundy focus:outline-none"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}
