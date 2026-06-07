import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${site.name} — curated pre-loved designer fashion.`,
};

export default function AboutPage() {
  return (
    <div className="container-page pt-12">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
          Our story
        </p>
        <h1 className="mt-2 font-serif text-4xl text-ink sm:text-5xl">
          Beautiful fashion, given a second life
        </h1>
        <div className="mt-6 space-y-4 text-lg text-ink/75">
          <p>
            {site.name} exists for the pieces too good to sit unworn. We source
            designer dresses, shoes and bags that have only been worn a handful
            of times — then photograph and present them with the care they
            deserve.
          </p>
          <p>
            Every item is hand-selected and authenticated. We believe luxury
            should be circular: loved, passed on, and loved again. Buying
            pre-loved is kinder to your wallet and to the planet, without
            compromising on the labels you adore.
          </p>
          <p>
            We keep things personal. There&apos;s no faceless checkout — when
            you find something special, you talk to us directly, and we make
            sure it reaches you perfectly.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/shop" className="btn-primary">
            Browse the collection
          </Link>
          <Link href="/sell" className="btn-outline">
            Sell with us
          </Link>
        </div>
      </div>
    </div>
  );
}
