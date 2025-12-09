import NotAvailableRoom from "@/components/Pages/NotAvailableRoom";
import Layout7 from "@/components/Layout/Layout7";

export const metadata = {
  title: "Habitación No Disponible | Grindelia Apart Hotel & Spa",
  description:
    "Esta habitación no está disponible en las fechas seleccionadas.",
};

export default function NotAvailable() {
  return (
    <Layout7>
      <NotAvailableRoom />
    </Layout7>
  );
}
