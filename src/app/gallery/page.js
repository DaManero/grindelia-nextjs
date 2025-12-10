import GalleryPage from "@/components/Pages/GalleryPage";
import Layout7 from "@/components/Layout/Layout7";

export const metadata = {
  title: "Galería de Fotos | Grindelia Apart Hotel & Spa Mar de las Pampas",
  description:
    "Galería de imágenes de Grindelia Apart Hotel: habitaciones, pileta climatizada, spa, áreas comunes y servicios. Eco resort en Las Gaviotas, Mar de las Pampas.",
  alternates: {
    canonical: "https://grindelia.com.ar/gallery",
  },
};

export default function Gallery() {
  return (
    <Layout7>
      <GalleryPage />
    </Layout7>
  );
}
