import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { mailtoLink, site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sell with us",
  description:
    "Consign your gently used designer dresses, shoes and bags. We photograph, list and sell them for you.",
};

const steps = [
  {
    step: "01",
    title: "Get in touch",
    body: "Send us a quick message with photos of the pieces you'd like to sell. We'll let you know which ones are a great fit.",
  },
  {
    step: "02",
    title: "Hand them over",
    body: "Drop off or arrange pickup. We professionally photograph each piece and write an honest condition report.",
  },
  {
    step: "03",
    title: "We list & sell",
    body: "Your items go live on IsiFashion. We handle every buyer inquiry, payment and delivery.",
  },
  {
    step: "04",
    title: "You get paid",
    body: "Once a piece sells, you receive your share. Simple, transparent, no upfront cost.",
  },
];

export default function SellPage() {
  const message = `Hi ${site.name}! I'd like to sell some designer pieces. Here are the details:`;

  return (
    <div className="container-page pt-12">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
          Consignment
        </p>
        <h1 className="mt-2 font-serif text-4xl text-ink sm:text-5xl">
          Sell your designer pieces
        </h1>
        <p className="mt-4 text-lg text-ink/70">
          Those dresses, shoes and bags you've only worn a few times deserve a
          second life. We do the work — photography, listing, buyer chats,
          payment and delivery — so you don't have to.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Send pieces via WhatsApp
          </a>
          <a
            href={mailtoLink("I'd like to sell with IsiFashion", message)}
            className="btn-outline"
          >
            Email us photos
          </a>
        </div>
      </header>

      <section className="mt-16">
        <SectionHeading eyebrow="The process" title="How consignment works" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.step}
              className="rounded-2xl border border-ink/10 bg-sand-50 p-6"
            >
              <span className="font-serif text-3xl text-brass">{s.step}</span>
              <h3 className="mt-2 font-serif text-xl text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl bg-sand-200/60 p-8 sm:p-12">
        <SectionHeading
          eyebrow="What we accept"
          title="Authentic designer only"
        />
        <ul className="mt-6 grid gap-3 text-ink/80 sm:grid-cols-2">
          {[
            "Genuine designer & luxury brands",
            "Gently used — worn only a few times",
            "Clean, with no major damage",
            "Dresses, shoes, bags & accessories",
            "Original boxes / dust bags a plus",
            "Authenticity documentation welcomed",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 text-burgundy">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
