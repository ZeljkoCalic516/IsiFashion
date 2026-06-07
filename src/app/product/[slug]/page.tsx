import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatPrice,
  getAllProductSlugs,
  getProduct,
  getRelatedProducts,
} from "@/lib/catalog";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductCard } from "@/components/ProductCard";
import { mailtoLink, site, whatsappLink } from "@/lib/site";

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product" };
  return {
    title: `${product.brand} ${product.name}`,
    description: product.summary,
    openGraph: { images: product.images.slice(0, 1) },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);
  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round((1 - product.price / product.originalPrice) * 100)
      : null;

  const inquiryMessage = `Hi ${site.name}! I'm interested in the ${product.brand} ${product.name} (${formatPrice(
    product.price,
  )}) — is it still available?\n${site.url}/product/${product.slug}`;

  const details: [string, string | undefined][] = [
    ["Brand", product.brand],
    ["Size", product.size],
    ["Colour", product.color],
    ["Condition", product.condition],
  ];

  return (
    <div className="container-page pt-8">
      <nav className="text-sm text-ink/50">
        <Link href="/shop" className="hover:text-burgundy">
          Shop
        </Link>
        <span className="px-2">/</span>
        <Link href={`/category/${product.category}`} className="hover:text-burgundy capitalize">
          {product.category}
        </Link>
        <span className="px-2">/</span>
        <span className="text-ink/70">{product.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <ProductGallery
          images={product.images}
          alt={`${product.brand} ${product.name}`}
        />

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-burgundy">
            {product.brand}
          </p>
          <h1 className="mt-2 font-serif text-3xl text-ink sm:text-4xl">
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-2xl font-medium text-ink">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-base text-ink/45 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            {discount && (
              <span className="rounded-full bg-burgundy px-3 py-1 text-xs font-semibold text-sand-50">
                −{discount}%
              </span>
            )}
          </div>

          <p className="mt-5 text-ink/75">{product.description}</p>

          <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-ink/10 pt-6 text-sm">
            {details
              .filter(([, v]) => Boolean(v))
              .map(([label, value]) => (
                <div key={label}>
                  <dt className="text-ink/50">{label}</dt>
                  <dd className="mt-0.5 font-medium text-ink">{value}</dd>
                </div>
              ))}
          </dl>

          <div className="mt-8 space-y-3">
            {product.sold ? (
              <div className="rounded-2xl border border-ink/15 bg-sand-200/60 p-5 text-center">
                <p className="font-serif text-lg text-ink">This piece has found a new home</p>
                <p className="mt-1 text-sm text-ink/60">
                  Browse the collection for similar treasures.
                </p>
                <Link href="/shop" className="btn-outline mt-4">
                  Back to shop
                </Link>
              </div>
            ) : (
              <>
                <a
                  href={whatsappLink(inquiryMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  Inquire / buy via WhatsApp
                </a>
                <a
                  href={mailtoLink(
                    `Interested in ${product.brand} ${product.name}`,
                    inquiryMessage,
                  )}
                  className="btn-outline w-full"
                >
                  Inquire by email
                </a>
                <p className="text-center text-xs text-ink/55">
                  One piece only — message us to reserve it. Secure payment &
                  delivery arranged personally.
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="font-serif text-2xl text-ink">You may also like</h2>
          <div className="mt-6 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
