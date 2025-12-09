import RoomsListViewPage from "@/components/Pages/RoomsListViewPage";
import Layout7 from "@/components/Layout/Layout7";

export const metadata = {
  title: "Lista de Habitaciones | Grindelia Apart Hotel & Spa",
  description: "Explorá todas nuestras habitaciones disponibles.",
};

export default function RoomsListView() {
  return (
    <Layout7>
      <RoomsListViewPage />
    </Layout7>
  );
}
