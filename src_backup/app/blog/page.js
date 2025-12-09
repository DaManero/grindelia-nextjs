import BlogPage from "@/components/Pages/BlogPage";
import Layout7 from "@/components/Layout/Layout7";

export const metadata = {
  title: "Blog | Grindelia Apart Hotel & Spa",
  description: "Novedades y artículos sobre turismo sustentable.",
};

export default function Blog() {
  return (
    <Layout7>
      <BlogPage />
    </Layout7>
  );
}
