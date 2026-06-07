import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import { getCategories } from "@/lib/catalog";

export function Footer() {
  const categories = getCategories();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-ink/10 bg-sand-200/60">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-2xl font-semibold text-burgundy">
            {site.name}
          </p>
          <p className="mt-3 max-w-xs text-sm text-ink/70">{site.tagline}</p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-ink/60">
            Shop
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-ink/80">
            <li>
              <Link href="/shop" className="hover:text-burgundy">
                All pieces
              </Link>
            </li>
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/category/${c.slug}`} className="hover:text-burgundy">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-ink/60">
            Company
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-ink/80">
            <li>
              <Link href="/about" className="hover:text-burgundy">
                About us
              </Link>
            </li>
            <li>
              <Link href="/sell" className="hover:text-burgundy">
                Sell with us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-burgundy">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-ink/60">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-ink/80">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-burgundy">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink("Hi! I have a question about IsiFashion.")}
                className="hover:text-burgundy"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp us
              </a>
            </li>
            {site.instagram && (
              <li>
                <a
                  href={site.instagram}
                  className="hover:text-burgundy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-ink/60 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Authenticity guaranteed · Pre-loved with care</p>
        </div>
      </div>
    </footer>
  );
}
