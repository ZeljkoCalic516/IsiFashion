import Image from "next/image";
import Link from "next/link";
import { getCategories, getFeaturedProducts } from "@/lib/catalog";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export default function HomePage() {
  const categories = getCategories();
  const featured = getFeaturedProducts(4);

  return (
    <>
      {/* Hero */}
      <section className="container-page pt-12 sm:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
              Pre-loved luxury
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.05] text-ink sm:text-6xl">
              Designer pieces,
              <br />
              <span className="text-burgundy">worn only a few times.</span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-ink/70">
              {site.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="btn-primary">
                Browse the collection
              </Link>
              <Link href="/sell" className="btn-outline">
                Sell your pieces
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-sand-200 lg:aspect-[5/6]">
            <Image
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=80"
              alt="Curated designer fashion"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container-page mt-24">
        <SectionHeading
          eyebrow="Shop by category"
          title="Find your next treasure"
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-sand-200"
            >
              <Image
                src={c.image}
                alt={c.name}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <h3 className="font-serif text-2xl text-sand-50">{c.name}</h3>
                <p className="mt-1 text-sm text-sand-100/80">{c.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="container-page mt-24">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading eyebrow="Just in" title="Featured pieces" />
          <Link
            href="/shop"
            className="hidden whitespace-nowrap text-sm font-medium text-burgundy hover:underline sm:block"
          >
            View all →
          </Link>
        </div>
        <div className="mt-8 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mt-24 bg-sand-200/50 py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Simple & trusted"
            title="How IsiFashion works"
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Discover",
                body: "Browse authenticated designer pieces, each photographed in detail with honest condition notes.",
              },
              {
                step: "02",
                title: "Inquire",
                body: "Found something you love? Message us on WhatsApp or email to reserve it instantly.",
              },
              {
                step: "03",
                title: "Receive",
                body: "We arrange secure payment and delivery. Your new-to-you piece arrives beautifully packaged.",
              },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <span className="font-serif text-3xl text-brass">{s.step}</span>
                <h3 className="mt-2 font-serif text-xl text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sell CTA */}
      <section className="container-page mt-24">
        <div className="overflow-hidden rounded-3xl bg-burgundy px-8 py-14 text-center sm:px-16">
          <h2 className="font-serif text-3xl text-sand-50 sm:text-4xl">
            Have designer pieces gathering dust?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sand-100/85">
            Turn the dresses, shoes and bags you no longer wear into something
            new. We handle the photography, listing and sale — you simply hand
            them over.
          </p>
          <Link
            href="/sell"
            className="mt-7 inline-flex rounded-full bg-sand-50 px-7 py-3 text-sm font-medium uppercase tracking-wide text-burgundy transition-colors hover:bg-sand-100"
          >
            Start selling with us
          </Link>
        </div>
      </section>
    </>
  );
}
