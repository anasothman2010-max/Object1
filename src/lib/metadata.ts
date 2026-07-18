import type { Metadata } from "next";
import { SITE } from "@/constants/site";

export function createMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    title: {
      default: `${SITE.name} | ${SITE.tagline}`,
      template: `%s | ${SITE.name}`,
    },
    description: SITE.description,
    metadataBase: new URL(SITE.url),
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: SITE.name,
      title: SITE.name,
      description: SITE.description,
    },
    twitter: {
      card: "summary_large_image",
      title: SITE.name,
      description: SITE.description,
    },
    robots: {
      index: true,
      follow: true,
    },
    ...overrides,
  };
}
