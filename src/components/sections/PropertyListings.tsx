import { PROPERTIES } from "@/constants/properties";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PropertyCard } from "@/components/ui/PropertyCard";

export function PropertyListings() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Property Listings"
          description="Explore our curated collection of luxury residences available for sale and rent."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTIES.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </Container>
    </section>
  );
}
