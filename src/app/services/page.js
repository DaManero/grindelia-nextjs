import ServicesPage from "@/components/Pages/ServicesPage";
import Layout7 from "@/components/Layout/Layout7";

export const metadata = {
  title: "Servicios del Hotel | Grindelia Apart Hotel & Spa Mar de las Pampas",
  description:
    "Pileta climatizada, spa, gimnasio, cancha de paddle, quincho y más servicios en Grindelia Apart Hotel. Eco resort con amenities premium en Las Gaviotas, Mar de las Pampas.",
  alternates: {
    canonical: "https://grindelia.com.ar/services",
  },
};

export default function Services() {
  return (
    <Layout7>
      <ServicesPage />
    </Layout7>
  );
}
