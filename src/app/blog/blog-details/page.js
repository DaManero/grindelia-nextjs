import BlogDetailsPage from "@/components/Pages/BlogDetailsPage";
import Layout7 from "@/components/Layout/Layout7";

export const metadata = {
  title: "Artículo | Grindelia Apart Hotel & Spa",
  description: "Lee nuestros artículos sobre turismo y sustentabilidad.",
};

export default function BlogDetails() {
  return (
    <Layout7>
      <BlogDetailsPage />
    </Layout7>
  );
}
