import HomePage from "@/components/Pages/HomePage";
import Layout from "@/components/Layout/Layout";

export const metadata = {
  title: "Grindelia Apart Hotel & Spa | Eco Resort Mar de las Pampas",
  description:
    "Apart Hotel & Spa sustentable en Las Gaviotas, Mar de las Pampas. Pileta climatizada, spa, gimnasio y diseño bioclimático. A 300m de la playa.",
  alternates: {
    canonical: "https://grindelia.com.ar",
  },
};

export default function Home() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}
