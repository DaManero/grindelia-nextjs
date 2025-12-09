import RoomDetailsPage from "@/components/Pages/RoomDetailsPage";
import Layout7 from "@/components/Layout/Layout7";

export const metadata = {
  title: "Detalles de Habitación | Grindelia Apart Hotel & Spa",
  description: "Conocé todos los detalles de nuestras habitaciones.",
};

export default function RoomDetails() {
  return (
    <Layout7>
      <RoomDetailsPage />
    </Layout7>
  );
}
