import type { Metadata } from "next";
import { PROPERTIES } from "@/constants/properties";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Properties",
  description: "Browse our curated collection of luxury properties for sale and rent.",
});

export default function PropertiesPage() {
  return (
    <div className="bg-surface pt-32 pb-24 md:pb-32">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="All Properties"
          description="Explore our complete collection of exceptional residences across the world's most desirable locations."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTIES.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </Container>
    </div>
  );
}
