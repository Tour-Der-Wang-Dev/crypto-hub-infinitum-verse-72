
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

export interface Freelancer {
  name: string;
  title: string;
  rating: number;
  projects: number;
  skills: string[];
  rate: string;
  currency: string;
  avatar?: string;
  availability?: string;
  description?: string;
}

export interface Job {
  title: string;
  category: string;
  budget: string;
  currency: string;
  postedBy: string;
  deadline?: string;
  description: string;
  skills: string[];
  postedDate: string;
  proposals?: number;
}
