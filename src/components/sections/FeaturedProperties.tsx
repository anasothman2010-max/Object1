import { FEATURED_PROPERTIES } from "@/constants/properties";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { Button } from "@/components/ui/Button";

export function FeaturedProperties() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Featured"
          title="Exceptional Properties"
          description="Handpicked residences that represent the pinnacle of luxury living."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PROPERTIES.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/properties" className="bg-brand-700 text-white hover:bg-brand-900">
            View All Properties
          </Button>
        </div>
      </Container>
    </section>
  );
}
