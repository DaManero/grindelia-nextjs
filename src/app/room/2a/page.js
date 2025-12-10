import Room2aPage from "@/components/Pages/Room2aPage";
import Layout7 from "@/components/Layout/Layout7";

export const metadata = {
  title: "Habitación 2 Ambientes | Apart Hotel Grindelia Mar de las Pampas",
  description:
    "Habitación de 2 ambientes ideal para parejas en Grindelia Apart Hotel. Diseño bioclimático, amenities premium y confort sustentable en Mar de las Pampas.",
  alternates: {
    canonical: "https://grindelia.com.ar/room/2a",
  },
};

export default function Room2a() {
  return (
    <Layout7>
      <Room2aPage />
    </Layout7>
  );
}
