import ServicesPage from "@/components/Pages/ServicesPage";
import Layout7 from "@/components/Layout/Layout7";

export const metadata = {
  title: "Servicios | Grindelia Apart Hotel & Spa",
  description: "Conocé todos los servicios que ofrecemos en Grindelia.",
};

export default function Services() {
  return (
    <Layout7>
      <ServicesPage />
    </Layout7>
  );
}
