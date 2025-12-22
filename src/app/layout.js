import "./globals.scss";
import FloatingWhatsApp from "@/components/Global/FloatingWhatsApp";
import MetaPixel from "@/components/MetaPixel";
import HotelSchema from "@/components/Schema/HotelSchema";
import LocalBusinessSchema from "@/components/Schema/LocalBusinessSchema";
import WelcomePopup from "@/components/WelcomePopup";

export const metadata = {
  title: "Grindelia Apart Hotel & Spa | Eco Resort Mar de las Pampas",
  description:
    "Apart Hotel & Spa sustentable en Las Gaviotas, Mar de las Pampas. Pileta climatizada, spa, gimnasio y diseño bioclimático.",
  keywords:
    "apart hotel mar de las pampas, eco spa las gaviotas, resort sustentable, pileta climatizada",
  verification: {
    google: "mzoMZ-sdvrGAiBuAtwmM6Q7d-9ZzQsfgGjO475wkn3s",
  },
  openGraph: {
    type: "website",
    url: "https://grindelia.com.ar/",
    title: "Grindelia Apart Hotel & Spa | Eco Resort Mar de las Pampas",
    description:
      "Apart Hotel sustentable con pileta climatizada, spa y diseño bioclimático. A 300m de la playa.",
    images: [
      {
        url: "https://grindelia.com.ar/images/og-grindelia-1200x630.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grindelia Apart Hotel & Spa",
    description: "Eco Resort sustentable en Mar de las Pampas",
    images: ["https://grindelia.com.ar/images/og-grindelia-1200x630.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <HotelSchema />
        <LocalBusinessSchema />
      </head>
      <body>
        <MetaPixel />
        {children}
        <WelcomePopup />
        <FloatingWhatsApp
          whatsappNumber="5492255505626"
          whatsappMessage="Hola! Quisiera consultar disponibilidad y tarifas."
        />
      </body>
    </html>
  );
}
