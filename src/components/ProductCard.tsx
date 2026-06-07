import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/catalog";

export function ProductCard({ product }: { product: Product }) {
  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round((1 - product.price / product.originalPrice) * 100)
      : null;

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-sand-200">
        <Image
          src={product.images[0]}
          alt={`${product.brand} ${product.name}`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute left-3 top-3 flex gap-2">
          {product.sold ? (
            <span className="rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sand-50">
              Sold
            </span>
          ) : (
            discount && (
              <span className="rounded-full bg-burgundy px-3 py-1 text-xs font-semibold text-sand-50">
                −{discount}%
              </span>
            )
          )}
        </div>
      </div>

      <div className="mt-3 space-y-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-burgundy">
          {product.brand}
        </p>
        <h3 className="font-serif text-lg leading-tight text-ink">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-medium text-ink">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-ink/45 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        <p className="text-xs text-ink/60">
          {[product.size, product.condition].filter(Boolean).join(" · ")}
        </p>
      </div>
    </Link>
  );
}
