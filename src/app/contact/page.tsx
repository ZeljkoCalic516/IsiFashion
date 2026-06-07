import type { Metadata } from "next";
import { mailtoLink, site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with IsiFashion about buying or selling pre-loved designer pieces.",
};

export default function ContactPage() {
  return (
    <div className="container-page pt-12">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
            Say hello
          </p>
          <h1 className="mt-2 font-serif text-4xl text-ink sm:text-5xl">
            Let&apos;s talk
          </h1>
          <p className="mt-4 text-lg text-ink/70">
            Questions about a piece, reserving an item, or selling your own
            designer wardrobe? We reply personally and quickly.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={whatsappLink(`Hi ${site.name}!`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              Chat on WhatsApp
            </a>
            <div className="space-y-1 text-sm text-ink/75">
              <p>
                Email:{" "}
                <a
                  href={mailtoLink("Hello IsiFashion", "Hi,")}
                  className="font-medium text-burgundy hover:underline"
                >
                  {site.email}
                </a>
              </p>
              {site.instagram && (
                <p>
                  Instagram:{" "}
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-burgundy hover:underline"
                  >
                    @{site.name.toLowerCase()}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-ink/10 bg-sand-50 p-8">
          <h2 className="font-serif text-2xl text-ink">How buying works</h2>
          <ol className="mt-5 space-y-4 text-sm text-ink/75">
            <li className="flex gap-3">
              <span className="font-serif text-lg text-brass">1.</span>
              <span>
                Find a piece you love and tap{" "}
                <span className="font-medium text-ink">
                  &ldquo;Inquire / buy via WhatsApp&rdquo;
                </span>{" "}
                — the message is pre-filled for you.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-serif text-lg text-brass">2.</span>
              <span>
                We confirm availability and answer any questions about
                condition, measurements or authenticity.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-serif text-lg text-brass">3.</span>
              <span>
                We arrange secure payment and delivery. Your piece is carefully
                packaged and sent.
              </span>
            </li>
          </ol>
          <p className="mt-6 rounded-xl bg-sand-200/70 p-4 text-xs text-ink/60">
            Each item is one-of-a-kind. Messaging us early is the best way to
            reserve a piece before someone else does.
          </p>
        </div>
      </div>
    </div>
  );
}
