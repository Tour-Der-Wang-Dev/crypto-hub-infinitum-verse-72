
export interface Product {
  title: string;
  category: string;
  price: string;
  seller: string;
  description?: string;
  image?: string;
  emoji?: string;
  rating?: number;
  reviews?: number;
  originalPrice?: string;
  featuredBadge?: string;
  acceptedCurrencies?: string[];
  inStock?: boolean;
}
