import Image from "next/image";
import { HERO_CONTENT } from "@/constants/hero";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* خلفية الصورة مع تأثير تكبير خفيف (Zoom-in) عصري */}
      <Image
        src={HERO_CONTENT.image}
        alt={HERO_CONTENT.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover scale-105 transition-transform duration-1000 ease-out"
      />
      
      {/* تدرج لوني متعدد الطبقات لزيادة العمق والتباين */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/30 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />

      <Container className="relative z-10 py-32 pt-40">
        <div className="max-w-3xl">
          
          {/* الـ Eyebrow مع شارة (Badge) عصرية */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 mb-6 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-400">
              {HERO_CONTENT.eyebrow}
            </span>
          </div>

          {/* العنوان الرئيسي */}
          <h1 className="font-display text-4xl font-light leading-[1.15] text-white sm:text-6xl md:text-7xl">
            {HERO_CONTENT.title}
          </h1>

          {/* النص الفرعي */}
          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/80 font-light">
            {HERO_CONTENT.subtitle}
          </p>

          {/* الأزرار مع تأثيرات حركية */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <div className="transition-transform duration-300 hover:scale-105">
              <Button href={HERO_CONTENT.primaryCta.href} className="shadow-lg shadow-brand-500/20">
                {HERO_CONTENT.primaryCta.label}
              </Button>
            </div>
            <div className="transition-transform duration-300 hover:scale-105">
              <Button 
                href={HERO_CONTENT.secondaryCta.href} 
                variant="outline"
                className="border-white/20 bg-white/5 text-white backdrop-blur-md hover:bg-white/10 hover:border-white/40"
              >
                {HERO_CONTENT.secondaryCta.label}
              </Button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}