import type { Category, Product } from "@/lib/types";

/**
 * ─────────────────────────────────────────────────────────────
 *  HOW TO ADD A NEW ITEM (MVP workflow)
 * ─────────────────────────────────────────────────────────────
 *  1. Add a new object to the `products` array below.
 *  2. `slug` must be unique (lowercase, words-separated-by-dashes).
 *  3. Put photos in /public/products/<slug>/ and reference them as
 *     "/products/<slug>/1.jpg" — OR paste a full image URL.
 *  4. Save. The item appears automatically in its category + shop.
 *  Set `sold: true` once it sells (keeps it visible but marked sold).
 * ─────────────────────────────────────────────────────────────
 */

export const categories: Category[] = [
  {
    slug: "dresses",
    name: "Dresses",
    description: "Evening gowns, cocktail and day dresses from coveted houses.",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "shoes",
    name: "Shoes",
    description: "Heels, flats and statement footwear, lightly worn.",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "bags",
    name: "Bags",
    description: "Iconic handbags and clutches, authenticated and cared for.",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "accessories",
    name: "Accessories",
    description: "Belts, scarves and fine finishing touches.",
    image:
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=1200&q=80",
  },
];

export const products: Product[] = [
  {
    slug: "chanel-classic-flap-medium-black",
    name: "Classic Flap Medium",
    brand: "Chanel",
    category: "bags",
    price: 4200,
    originalPrice: 8800,
    color: "Black caviar",
    condition: "Excellent",
    summary: "Timeless black caviar flap with gold hardware.",
    description:
      "The Chanel Classic Flap in black caviar leather with gold-tone hardware. Worn only a handful of times and kept in its dust bag. Interior pristine, corners sharp, chain shows no wear. Includes authenticity card.",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
    addedAt: "2026-05-28",
  },
  {
    slug: "valentino-rockstud-pumps-nude",
    name: "Rockstud Pumps 100mm",
    brand: "Valentino",
    category: "shoes",
    price: 480,
    originalPrice: 950,
    size: "EU 38",
    color: "Nude",
    condition: "Like new",
    summary: "Signature studded pointed-toe pumps in nude.",
    description:
      "Valentino Garavani Rockstud pumps in nude leather with the iconic platinum studs. Worn once indoors — soles barely marked. A wardrobe staple that elevates everything.",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
    addedAt: "2026-05-30",
  },
  {
    slug: "self-portrait-midi-dress-burgundy",
    name: "Guipure Lace Midi Dress",
    brand: "Self-Portrait",
    category: "dresses",
    price: 180,
    originalPrice: 380,
    size: "UK 10",
    color: "Burgundy",
    condition: "Excellent",
    summary: "Romantic burgundy lace midi, worn once to a wedding.",
    description:
      "Self-Portrait guipure lace midi dress in deep burgundy. Fitted bodice with a flattering midi skirt. Worn to a single event, freshly dry-cleaned. No snags or marks.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
    addedAt: "2026-06-02",
  },
  {
    slug: "hermes-silk-scarf-90",
    name: "Carré 90 Silk Scarf",
    brand: "Hermès",
    category: "accessories",
    price: 280,
    originalPrice: 460,
    color: "Sienna / gold",
    condition: "Like new",
    summary: "Hand-rolled silk twill scarf in warm tones.",
    description:
      "Hermès Carré 90 in silk twill, hand-rolled edges. Stored flat in its original box. A versatile accent for the neck, hair or handbag.",
    images: [
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=1200&q=80",
    ],
    addedAt: "2026-06-03",
  },
  {
    slug: "gucci-marmont-shoulder-bag",
    name: "GG Marmont Small Shoulder Bag",
    brand: "Gucci",
    category: "bags",
    price: 980,
    originalPrice: 1790,
    color: "Dusty rose",
    condition: "Very good",
    summary: "Matelassé chevron leather with antique gold hardware.",
    description:
      "Gucci GG Marmont in dusty rose matelassé leather. Light surface softening at the corners, hardware bright. Comes with dust bag. A romantic everyday piece.",
    images: [
      "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=1200&q=80",
    ],
    addedAt: "2026-06-04",
  },
  {
    slug: "manolo-blahnik-hangisi-flats",
    name: "Hangisi Crystal Flats",
    brand: "Manolo Blahnik",
    category: "shoes",
    price: 420,
    originalPrice: 895,
    size: "EU 39",
    color: "Midnight blue",
    condition: "Excellent",
    summary: "Crystal-buckle satin flats in midnight blue.",
    description:
      "Manolo Blahnik Hangisi flats in midnight blue satin with the famous crystal buckle. Lightly worn, satin immaculate, buckle fully intact.",
    images: [
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1200&q=80",
    ],
    addedAt: "2026-06-05",
  },
  {
    slug: "zimmermann-linen-midi-dress",
    name: "Floral Linen Midi Dress",
    brand: "Zimmermann",
    category: "dresses",
    price: 320,
    originalPrice: 650,
    size: "AU 1 (UK 10)",
    color: "Ivory floral",
    condition: "Like new",
    summary: "Breezy linen midi with a delicate floral print.",
    description:
      "Zimmermann floral linen midi dress with shirred bodice and tiered skirt. Worn once on holiday, freshly laundered. Perfect for summer occasions.",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1200&q=80",
    ],
    addedAt: "2026-06-06",
  },
  {
    slug: "saint-laurent-leather-belt",
    name: "Monogram Leather Belt",
    brand: "Saint Laurent",
    category: "accessories",
    price: 190,
    originalPrice: 395,
    size: "85 cm",
    color: "Black / silver",
    condition: "Excellent",
    summary: "Smooth black calfskin belt with YSL hardware.",
    description:
      "Saint Laurent monogram belt in smooth black calfskin with silver-tone hardware. Minimal wear on the leather, buckle pristine.",
    images: [
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=1200&q=80",
    ],
    sold: true,
    addedAt: "2026-05-20",
  },
];
