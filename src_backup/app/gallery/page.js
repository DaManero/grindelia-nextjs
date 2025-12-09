import GalleryPage from "@/components/Pages/GalleryPage";
import Layout7 from "@/components/Layout/Layout7";

export const metadata = {
  title: "Galería | Grindelia Apart Hotel & Spa",
  description: "Galería de fotos de nuestro hotel y servicios.",
};

export default function Gallery() {
  return (
    <Layout7>
      <GalleryPage />
    </Layout7>
  );
}
