export type PropertyStatus = "for-sale" | "for-rent" | "sold";

export interface Property {
  id: string;
  slug: string;
  title: string;
  location: string;
  price: number;
  currency: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  status: PropertyStatus;
  featured: boolean;
  image: string;
  description: string;
  amenities: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}
