import Image from "next/image";
import { HERO_CONTENT } from "@/constants/hero";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center">
      <Image
        src={HERO_CONTENT.image}
        alt={HERO_CONTENT.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/50 to-ink/30" />

      <Container className="relative z-10 py-32 pt-40">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-brand-500">
          {HERO_CONTENT.eyebrow}
        </p>
        <h1 className="max-w-4xl font-display text-5xl font-light leading-tight text-white md:text-7xl">
          {HERO_CONTENT.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
          {HERO_CONTENT.subtitle}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href={HERO_CONTENT.primaryCta.href}>{HERO_CONTENT.primaryCta.label}</Button>
          <Button href={HERO_CONTENT.secondaryCta.href} variant="outline">
            {HERO_CONTENT.secondaryCta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
