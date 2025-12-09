import SpaWellnessPage from "@/components/Pages/SpaWellnessPage";
import Layout7 from "@/components/Layout/Layout7";

export const metadata = {
  title: "Spa & Wellness | Grindelia Apart Hotel & Spa",
  description:
    "Relajate en nuestro spa y wellness center con tratamientos exclusivos.",
};

export default function SpaWellness() {
  return (
    <Layout7>
      <SpaWellnessPage />
    </Layout7>
  );
}
