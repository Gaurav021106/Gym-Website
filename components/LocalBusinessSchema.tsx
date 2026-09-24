import React from "react";
import { BRANCHES_DATA, DOMAIN_URL, PHONE_NUMBER } from "@/lib/data";

export const LocalBusinessSchema: React.FC = () => {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": BRANCHES_DATA.map((branch) => ({
      "@type": "ExerciseGym",
      "@id": `${DOMAIN_URL}/#branch-${branch.id}`,
      name: branch.name,
      url: DOMAIN_URL,
      telephone: PHONE_NUMBER,
      priceRange: "₹₹",
      image: `${DOMAIN_URL}/hero.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress: branch.address,
        addressLocality: branch.city,
        addressRegion: "Uttarakhand",
        postalCode: branch.postalCode,
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: branch.geo.latitude,
        longitude: branch.geo.longitude,
      },
      openingHoursSpecification: branch.openingHoursSpecification.map((spec) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: spec.dayOfWeek,
        opens: spec.opens,
        closes: spec.closes,
      })),
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: branch.rating.toString(),
        reviewCount: branch.reviewsCount.toString(),
        bestRating: "5",
        worstRating: "1",
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
};