import SpaWellnessPage from "@/components/Pages/SpaWellnessPage";
import Layout7 from "@/components/Layout/Layout7";

export const metadata = {
  title: "Spa & Wellness Center | Masajes y Sauna en Mar de las Pampas",
  description:
    "Relajate en nuestro spa wellness con masajes terapéuticos, sauna finlandesa y circuitos de hidromasaje. Tratamientos exclusivos de bienestar en Grindelia Apart Hotel & Spa, Mar de las Pampas.",
  alternates: {
    canonical: "https://grindelia.com.ar/spa-wellness",
  },
};

export default function SpaWellness() {
  return (
    <Layout7>
      <SpaWellnessPage />
    </Layout7>
  );
}
