import SearchResultPage from "@/components/Pages/SearchResultPage";
import Layout7 from "@/components/Layout/Layout7";

export const metadata = {
  title: "Resultados de Búsqueda | Grindelia Apart Hotel & Spa",
  description: "Resultados de búsqueda de habitaciones disponibles.",
};

export default function SearchResult() {
  return (
    <Layout7>
      <SearchResultPage />
    </Layout7>
  );
}
