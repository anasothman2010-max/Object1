import { Hero } from "@/components/sections/Hero";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { PropertyListings } from "@/components/sections/PropertyListings";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      {/* <Hero /> */}
      <FeaturedProperties />
      <About />
      <Services />
      <PropertyListings />
      <Contact />
    </>
  );
}
