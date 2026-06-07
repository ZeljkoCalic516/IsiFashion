export type CategorySlug = "dresses" | "shoes" | "bags" | "accessories";

export type Condition =
  | "New with tags"
  | "Like new"
  | "Excellent"
  | "Very good"
  | "Good";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  /** Image used on the category card on the homepage / shop. */
  image: string;
}

export interface Product {
  /** URL-friendly unique id, e.g. "chanel-classic-flap-black". */
  slug: string;
  name: string;
  brand: string;
  category: CategorySlug;
  /** Selling price in EUR. */
  price: number;
  /** Optional original retail price for a "was/now" display. */
  originalPrice?: number;
  size?: string;
  color?: string;
  condition: Condition;
  /** Short one-liner shown on cards. */
  summary: string;
  /** Longer description shown on the product page. */
  description: string;
  /** First image is the primary/cover image. */
  images: string[];
  /** Optional flags. */
  featured?: boolean;
  /** Set to true once the piece has been sold. */
  sold?: boolean;
  /** ISO date string — used for "newest first" sorting. */
  addedAt: string;
}
