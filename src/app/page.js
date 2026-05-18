import HomePage from "@/components/Pages/HomePage";
import Layout from "@/components/Layout/Layout";

export const metadata = {
  title:
    "Grindelia Apart Hotel & Spa | Eco Resort Las Gaviotas | Partido de Villa Gesell",
  description:
    "Apart Hotel & Spa sustentable en Las Gaviotas, Las Gaviotas | Partido de Villa Gesell. Pileta climatizada, spa, gimnasio y diseño bioclimático. A 300m de la playa.",
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
