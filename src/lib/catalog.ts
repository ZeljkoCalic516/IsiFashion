import { categories, products } from "@/data/products";
import type { Category, CategorySlug, Product } from "@/lib/types";

/**
 * Data-access layer for the catalog.
 *
 * The rest of the app ONLY talks to these functions — never imports the raw
 * data directly. That means when we move items into a CMS/database later, we
 * only swap the implementation here and the UI keeps working unchanged.
 */

export type SortKey = "newest" | "price-asc" | "price-desc";

export interface CatalogQuery {
  category?: CategorySlug;
  brand?: string;
  sort?: SortKey;
  includeSold?: boolean;
}

export function getCategories(): Category[] {
  return categories;
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllBrands(): string[] {
  return Array.from(new Set(products.map((p) => p.brand))).sort();
}

export function getProducts(query: CatalogQuery = {}): Product[] {
  const { category, brand, sort = "newest", includeSold = true } = query;

  let list = [...products];

  if (category) list = list.filter((p) => p.category === category);
  if (brand) list = list.filter((p) => p.brand === brand);
  if (!includeSold) list = list.filter((p) => !p.sold);

  // Always push sold items to the end so available pieces show first.
  list.sort((a, b) => {
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

  return list;
}

export function getFeaturedProducts(limit = 3): Product[] {
  const featured = products.filter((p) => p.featured && !p.sold);
  const pool = featured.length ? featured : products.filter((p) => !p.sold);
  return pool
    .sort((a, b) => +new Date(b.addedAt) - +new Date(a.addedAt))
    .slice(0, limit);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((p) => p.category === product.category && p.slug !== product.slug && !p.sold)
    .slice(0, limit);
}

/** Format a EUR price without decimals (whole-euro pricing for resale). */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);
}
