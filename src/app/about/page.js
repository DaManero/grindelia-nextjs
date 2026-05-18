import AboutPage from "@/components/Pages/AboutPage";
import Layout7 from "@/components/Layout/Layout7";

export const metadata = {
  title: "Sobre Nosotros | Grindelia Apart Hotel & Spa en Las Gaviotas",
  description:
    "Conocé la historia de Grindelia Apart Hotel & Spa, un eco resort sustentable en Las Gaviotas, . Diseño bioclimático, compromiso ambiental y hospitalidad premium.",
  alternates: {
    canonical: "https://grindelia.com.ar/about",
  },
};

export default function About() {
  return (
    <Layout7>
      <AboutPage />
    </Layout7>
  );
}
