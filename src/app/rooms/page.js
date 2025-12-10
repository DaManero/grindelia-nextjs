import RoomsPage from "@/components/Pages/RoomsPage";
import Layout7 from "@/components/Layout/Layout7";

export const metadata = {
  title: "Habitaciones | Grindelia Apart Hotel & Spa Mar de las Pampas",
  description:
    "Descubrí nuestras habitaciones de 2 y 3 ambientes en Mar de las Pampas. Apart hotel sustentable con diseño bioclimático, todas las comodidades y amenities premium.",
  alternates: {
    canonical: "https://grindelia.com.ar/rooms",
  },
};

export default function Rooms() {
  return (
    <Layout7>
      <RoomsPage />
    </Layout7>
  );
}
