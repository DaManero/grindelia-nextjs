import PiletaPage from "@/components/Pages/Pileta";
import Layout7 from "@/components/Layout/Layout7";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";

export const metadata = {
  title: "Pileta Climatizada, Quincho y Paddle | Grindelia Mar de las Pampas",
  description:
    "Pileta climatizada todo el año, quincho con capacidad para 30 personas y cancha de paddle en Grindelia Apart Hotel. Instalaciones premium para familias en Las Gaviotas, Mar de las Pampas.",
  alternates: {
    canonical: "https://grindelia.com.ar/pileta",
  },
};

export default function Pileta() {
  const breadcrumbItems = [
    { name: "Inicio", url: "https://grindelia.com.ar" },
    {
      name: "Pileta, Quincho y Paddle",
      url: "https://grindelia.com.ar/pileta",
    },
  ];

  return (
    <Layout7>
      <BreadcrumbSchema items={breadcrumbItems} />
      <PiletaPage />
    </Layout7>
  );
}
