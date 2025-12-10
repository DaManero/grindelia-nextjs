import Room3aPage from "@/components/Pages/Room3aPage";
import Layout7 from "@/components/Layout/Layout7";

export const metadata = {
  title: "Habitación 3 Ambientes | Apart Hotel Grindelia Mar de las Pampas",
  description:
    "Habitación amplia de 3 ambientes para familias en Grindelia Apart Hotel. Cocina equipada, living, amenities premium y diseño sustentable en Mar de las Pampas.",
  alternates: {
    canonical: "https://grindelia.com.ar/room/3a",
  },
};

export default function Room3a() {
  return (
    <Layout7>
      <Room3aPage />
    </Layout7>
  );
}
