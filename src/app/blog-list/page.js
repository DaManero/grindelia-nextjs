import BlogList from "@/components/Pages/BlogListPage";
import Layout7 from "@/components/Layout/Layout7";

export const metadata = {
  title: "Blog | Grindelia Apart Hotel & Spa",
  description: "Novedades y artículos sobre turismo sustentable.",
};

export default function BlogListPage() {
  return (
    <Layout7>
      <BlogList />
    </Layout7>
  );
}
