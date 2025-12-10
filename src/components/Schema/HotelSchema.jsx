export default function HotelSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Grindelia Apart Hotel & Spa",
    description:
      "Eco Apart Hotel & Spa sustentable en Las Gaviotas, Mar de las Pampas. Pileta climatizada, spa, gimnasio y diseño bioclimático.",
    url: "https://grindelia.com.ar",
    telephone: "+54-2255-505626",
    email: "info@grindelia.com.ar",
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
    priceRange: "$$",
    starRating: {
      "@type": "Rating",
      ratingValue: "4",
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Pileta climatizada",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Spa y Wellness",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Gimnasio",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Cancha de Paddle",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Quincho",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "WiFi gratuito",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Estacionamiento",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Ascensor",
        value: true,
      },
    ],
    image: [
      "https://grindelia.com.ar/images/home_parallax_2400.webp",
      "https://grindelia.com.ar/images/Hero_bg_1.webp",
      "https://grindelia.com.ar/images/pool_img_1.webp",
    ],
    sameAs: [
      "https://www.facebook.com/grindelia",
      "https://www.instagram.com/grindelia",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
