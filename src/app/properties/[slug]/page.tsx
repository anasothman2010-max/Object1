import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROPERTIES } from "@/constants/properties";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";
import { createMetadata } from "@/lib/metadata";

interface PropertyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROPERTIES.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = PROPERTIES.find((p) => p.slug === slug);

  if (!property) return createMetadata();

  return createMetadata({
    title: property.title,
    description: property.description,
    openGraph: {
      title: property.title,
      description: property.description,
      images: [{ url: property.image, alt: property.title }],
    },
  });
}

export default async function PropertyDetailPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = PROPERTIES.find((p) => p.slug === slug);

  if (!property) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.title,
    description: property.description,
    address: property.location,
    numberOfRooms: property.bedrooms,
    floorSize: {
      "@type": "QuantitativeValue",
      value: property.area,
      unitCode: "FTK",
    },
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: property.currency,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="bg-surface pt-32 pb-24 md:pb-32">
        <Container>
          <Link
            href="/properties"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-brand-700"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Properties
          </Link>

          <div className="relative mb-12 aspect-[16/9] overflow-hidden">
            <Image
              src={property.image}
              alt={property.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
            <Badge status={property.status} className="left-6 top-6" />
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-sm text-muted">{property.location}</p>
              <h1 className="mt-2 font-display text-4xl font-light text-ink md:text-5xl">
                {property.title}
              </h1>
              <p className="mt-4 text-2xl font-medium text-brand-700">
                {formatPrice(property.price, property.currency)}
              </p>

              <div className="mt-8 flex gap-8 border-y border-brand-100 py-6 text-muted">
                <div>
                  <p className="text-2xl font-light text-ink">{property.bedrooms}</p>
                  <p className="text-sm">Bedrooms</p>
                </div>
                <div>
                  <p className="text-2xl font-light text-ink">{property.bathrooms}</p>
                  <p className="text-sm">Bathrooms</p>
                </div>
                <div>
                  <p className="text-2xl font-light text-ink">{property.area.toLocaleString()}</p>
                  <p className="text-sm">Sq Ft</p>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="mb-4 text-xl font-light text-ink">Description</h2>
                <p className="leading-relaxed text-muted">{property.description}</p>
              </div>

              <div className="mt-8">
                <h2 className="mb-4 text-xl font-light text-ink">Amenities</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {property.amenities.map((amenity) => (
                    <li key={amenity} className="flex items-center gap-2 text-muted">
                      <svg className="h-4 w-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="h-fit border border-brand-100 bg-white p-8">
              <h3 className="mb-4 font-display text-xl font-light text-ink">Schedule a Viewing</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted">
                Interested in this property? Contact our team to arrange a private viewing.
              </p>
              <Button href="/#contact" className="w-full">
                Contact an Advisor
              </Button>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
