import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getCategories, getCategory, getProducts } from "@/lib/catalog";
import { ShopBrowser } from "@/components/ShopBrowser";
import type { CategorySlug } from "@/lib/types";

export function generateStaticParams() {
  return getCategories().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Category" };
  return { title: category.name, description: category.description };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const products = getProducts({ category: category.slug as CategorySlug });
  const brands = Array.from(new Set(products.map((p) => p.brand))).sort();

  return (
    <div className="container-page pt-12">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
          Category
        </p>
        <h1 className="mt-2 font-serif text-4xl text-ink sm:text-5xl">
          {category.name}
        </h1>
        <p className="mt-3 text-ink/70">{category.description}</p>
      </header>

      <div className="mt-10">
        <Suspense fallback={<p className="text-sm text-ink/50">Loading…</p>}>
          <ShopBrowser products={products} brands={brands} />
        </Suspense>
      </div>
    </div>
  );
}
