import type { Stat } from "@/types";

export const ABOUT_CONTENT = {
  eyebrow: "About Object1",
  title: "Redefining Luxury Real Estate",
  paragraphs: [
    "For over two decades, Object1 has been the trusted name in premium real estate. We connect discerning clients with exceptional properties in the world's most coveted locations.",
    "Our team of seasoned advisors brings unparalleled market expertise, discretion, and a commitment to exceeding expectations at every touchpoint.",
  ],
  image: "/images/about.svg",
  imageAlt: "Object1 luxury property interior",
} as const;

export const ABOUT_STATS: Stat[] = [
  { value: "20+", label: "Years of Excellence" },
  { value: "$4.2B", label: "Properties Sold" },
  { value: "1,200+", label: "Satisfied Clients" },
  { value: "35", label: "Global Markets" },
];
