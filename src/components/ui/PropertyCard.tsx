import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/types";
import { formatArea, formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/properties/${property.slug}`} className="group block">
      <article className="overflow-hidden border border-brand-100 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={property.image}
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <Badge status={property.status} />
        </div>

        <div className="p-6">
          <p className="text-sm text-muted">{property.location}</p>
          <h3 className="mt-1 text-xl font-light text-ink transition-colors group-hover:text-brand-700">
            {property.title}
          </h3>
          <p className="mt-3 text-lg font-medium text-brand-700">
            {formatPrice(property.price, property.currency)}
          </p>
          <div className="mt-4 flex gap-4 border-t border-brand-100 pt-4 text-sm text-muted">
            <span>{property.bedrooms} Beds</span>
            <span>{property.bathrooms} Baths</span>
            <span>{formatArea(property.area)}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
