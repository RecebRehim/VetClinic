import { clinic } from "@/config/clinic";
import { siteConfig } from "@/config/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    name: clinic.fullName,
    image: `${siteConfig.url}/og/og-default.svg`,
    url: siteConfig.url,
    telephone: clinic.phone,
    email: clinic.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address,
      addressLocality: clinic.city,
      addressCountry: "AZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.37,
      longitude: 49.82,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: clinic.stats.rating,
      reviewCount: clinic.stats.reviews,
    },
    priceRange: "₼₼",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
