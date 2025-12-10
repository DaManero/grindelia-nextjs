import ContactPage from "@/components/Pages/ContactPage";
import Layout7 from "@/components/Layout/Layout7";

export const metadata = {
  title: "Contacto y Reservas | Grindelia Apart Hotel & Spa Mar de las Pampas",
  description:
    "Contactate con Grindelia Apart Hotel & Spa para consultas y reservas. Eco resort en Las Gaviotas, Mar de las Pampas. Atención personalizada y respuesta inmediata.",
  alternates: {
    canonical: "https://grindelia.com.ar/contact",
  },
};

export default function Contact() {
  return (
    <Layout7>
      <ContactPage />
    </Layout7>
  );
}
