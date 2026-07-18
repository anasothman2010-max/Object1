import { SERVICES } from "@/constants/services";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

export function Services() {
  return (
    <section id="services" className="bg-surface py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="What We Offer"
          title="Our Services"
          description="Comprehensive real estate solutions tailored to the needs of discerning clients."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group border border-brand-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500 hover:shadow-lg"
            >
              <div className="mb-6 text-brand-500 transition-colors group-hover:text-brand-700">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="mb-3 text-xl font-light text-ink">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
