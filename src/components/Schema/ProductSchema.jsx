export default function ProductSchema({ room }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: room.name,
    description: room.description,
    image: room.images || [],
    offers: {
      "@type": "Offer",
      url: room.url,
      priceCurrency: "ARS",
      price: room.price || "Consultar",
      availability: "https://schema.org/InStock",
      priceValidUntil: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
      )
        .toISOString()
        .split("T")[0],
    },
    aggregateRating: room.rating
      ? {
          "@type": "AggregateRating",
          ratingValue: room.rating.value,
          reviewCount: room.rating.count,
        }
      : undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
