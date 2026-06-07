/**
 * Central place for brand + contact details.
 * Update these values to change them site-wide (header, footer, contact CTAs).
 */
export const site = {
  name: "IsiFashion",
  tagline: "Pre-loved designer pieces, worn only a few times.",
  description:
    "Curated second-hand luxury fashion. Authentic designer dresses, shoes and bags — gently used, beautifully photographed, ready for their next chapter.",
  // Phone in international format WITHOUT '+' or spaces, used for WhatsApp links.
  whatsapp: "15551234567",
  email: "hello@isifashion.com",
  // Optional social links (leave empty string to hide).
  instagram: "https://instagram.com/isifashion",
  // Used for absolute URLs / metadata. Update on deploy.
  url: "https://isifashion.com",
} as const;

/** Build a WhatsApp deep link with a pre-filled message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Build a mailto link with subject + body. */
export function mailtoLink(subject: string, body: string): string {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${site.email}?${params.toString()}`;
}
