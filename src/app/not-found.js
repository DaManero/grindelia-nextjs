import NotFound from "@/components/Pages/404Page";
import Layout7 from "@/components/Layout/Layout7";

export const metadata = {
  title: "Página No Encontrada | Grindelia Apart Hotel & Spa",
  description: "La página que buscás no existe.",
};

export default function NotFoundPage() {
  return (
    <Layout7>
      <NotFound />
    </Layout7>
  );
}
