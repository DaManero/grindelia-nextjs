export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Grindelia Apart Hotel & Spa",
    image: "https://grindelia.com.ar/images/home_parallax_2400.webp",
    "@id": "https://grindelia.com.ar",
    url: "https://grindelia.com.ar",
    telephone: "+54-2255-505626",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Las Gaviotas",
      addressLocality: "Mar de las Pampas",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-37.3264",
      longitude: "-57.0331",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
