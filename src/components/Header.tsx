import Link from "next/link";
import { site } from "@/lib/site";
import { getCategories } from "@/lib/catalog";

export function Header() {
  const categories = getCategories();

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-sand-100/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="font-serif text-2xl font-semibold tracking-tight text-burgundy"
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-ink/80 md:flex">
          <Link href="/shop" className="transition-colors hover:text-burgundy">
            Shop all
          </Link>
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="transition-colors hover:text-burgundy"
            >
              {c.name}
            </Link>
          ))}
          <Link href="/sell" className="transition-colors hover:text-burgundy">
            Sell with us
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn-primary px-5 py-2">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile category strip */}
      <div className="border-t border-ink/10 md:hidden">
        <nav className="container-page flex items-center gap-5 overflow-x-auto py-2.5 text-sm font-medium text-ink/80">
          <Link href="/shop" className="whitespace-nowrap">
            Shop all
          </Link>
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="whitespace-nowrap"
            >
              {c.name}
            </Link>
          ))}
          <Link href="/sell" className="whitespace-nowrap">
            Sell
          </Link>
        </nav>
      </div>
    </header>
  );
}
