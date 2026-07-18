import Image from "next/image";
import { ABOUT_CONTENT, ABOUT_STATS } from "@/constants/about";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={ABOUT_CONTENT.image}
              alt={ABOUT_CONTENT.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <SectionHeading
              eyebrow={ABOUT_CONTENT.eyebrow}
              title={ABOUT_CONTENT.title}
              align="left"
              className="mb-8"
            />
            {ABOUT_CONTENT.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 20)} className="mb-4 text-lg leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}

            <div className="mt-10 grid grid-cols-2 gap-8">
              {ABOUT_STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-light text-brand-700 md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
