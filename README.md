# IsiFashion

Curated **pre-loved designer fashion** — a catalog website for selling gently used
designer dresses, shoes and bags via a "contact to buy" model (no checkout yet).

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # run the production build
npm run lint     # lint
```

## How to add / manage items (MVP workflow)

All products live in [`src/data/products.ts`](src/data/products.ts). To add a piece:

1. Add a new object to the `products` array.
2. Give it a unique `slug` (lowercase, `words-with-dashes`).
3. Add photos — either:
   - drop them in `public/products/<slug>/` and reference as `"/products/<slug>/1.jpg"`, or
   - paste a full image URL (e.g. a hosted/Unsplash link).
4. Save. The item appears automatically in its category and in **Shop all**.
5. Set `sold: true` once it sells (it stays visible but is marked **Sold**).
6. Set `featured: true` to surface it on the homepage.

> The UI never reads the data directly — it goes through
> [`src/lib/catalog.ts`](src/lib/catalog.ts). When we move items into a CMS or
> database later, only that file changes; pages stay the same.

## Contact / brand settings

Brand name, tagline, **WhatsApp number**, email and social links live in one
place: [`src/lib/site.ts`](src/lib/site.ts). Update `whatsapp` (international
format, no `+` or spaces) and `email` before going live.

## Project structure

```
src/
  app/                 # pages (App Router)
    page.tsx           # home
    shop/              # shop all (with brand + sort filters)
    category/[slug]/   # dresses / shoes / bags / accessories
    product/[slug]/    # product detail + buy-via-WhatsApp/email
    sell/              # consignment / "sell with us"
    contact/  about/   # contact + about
  components/          # Header, Footer, ProductCard, ProductGallery, ...
  data/products.ts     # ← the catalog (edit here to add items)
  lib/                 # site config, types, catalog data-access layer
```

## Design system

- Light beige surfaces (`sand`), **burgundy** brand (`#6E1423`), brass accent.
- Defined in [`tailwind.config.ts`](tailwind.config.ts) and `src/app/globals.css`.

## Roadmap

- **Phase 1 (done):** branded catalog, categories, filters, contact-to-buy.
- **Phase 2:** CMS/admin so non-technical owners can add items without code
  (recommended: Sanity for hosted editing, or Payload for self-hosted).
- **Phase 3:** real checkout/payments, accounts, wishlist, analytics.

## Deployment

Deploy to **Vercel**: push the repo, import it, and it builds automatically.
Set the production URL in `src/lib/site.ts` (`url`).
