import BlogGridPage from "@/components/Pages/BlogGridPage";
import Layout7 from "@/components/Layout/Layout7";

export const metadata = {
  title: "Blog | Grindelia Apart Hotel & Spa",
  description: "Novedades y artículos sobre turismo sustentable.",
};

export default function BlogGrid() {
  return (
    <Layout7>
      <BlogGridPage />
    </Layout7>
  );
}
