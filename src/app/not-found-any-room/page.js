import NoSearchResult from "@/components/Pages/NoSearchResult";
import Layout7 from "@/components/Layout/Layout7";

export const metadata = {
  title: "Sin Resultados | Grindelia Apart Hotel & Spa",
  description: "No se encontraron habitaciones para las fechas seleccionadas.",
};

export default function NoResult() {
  return (
    <Layout7>
      <NoSearchResult />
    </Layout7>
  );
}
