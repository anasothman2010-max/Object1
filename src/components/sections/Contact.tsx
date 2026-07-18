"use client";

import { useState } from "react";
import { SITE } from "@/constants/site";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-surface py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Get in Touch"
          title="Contact Us"
          description="Ready to find your next exceptional property? Our advisors are here to help."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h3 className="mb-6 font-display text-2xl font-light text-ink">Visit Our Office</h3>
            <div className="space-y-4 text-muted">
              <p>{SITE.address}</p>
              <p>
                <a href={`tel:${SITE.phone}`} className="transition-colors hover:text-brand-700">
                  {SITE.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-brand-700">
                  {SITE.email}
                </a>
              </p>
            </div>

            <div className="mt-10 border border-brand-100 bg-white p-8">
              <h4 className="mb-2 text-sm font-medium uppercase tracking-widest text-brand-500">
                Office Hours
              </h4>
              <p className="text-muted">Monday – Friday: 9:00 AM – 6:00 PM</p>
              <p className="text-muted">Saturday: 10:00 AM – 4:00 PM</p>
              <p className="text-muted">Sunday: By appointment</p>
            </div>
          </div>

          <div className="border border-brand-100 bg-white p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <p className="font-display text-2xl font-light text-brand-700">Thank You</p>
                <p className="mt-2 text-muted">
                  We&apos;ve received your message and will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Input label="First Name" name="firstName" required placeholder="John" />
                  <Input label="Last Name" name="lastName" required placeholder="Doe" />
                </div>
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                />
                <Input label="Phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
                <Textarea
                  label="Message"
                  name="message"
                  required
                  placeholder="Tell us about the property you're looking for..."
                />
                <Button type="submit" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
