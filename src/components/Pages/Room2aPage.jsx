"use client";

import { useEffect } from "react";
import Section from "../Section";
import ProductBanner from "../Section/ProductBanner";
const roomDetailsData = {
  title:
    "Disfrutá de un departamento premium de 3 ambientes, completamente equipado, con desayuno y acceso ilimitado a la piscina y spa. No se permiten camas adicionales en esta categoría.",
  title2: "Sobre el Alojamiento",
  detailes:
    "Unidades de 2 ambientes con terraza privada tipo deck y parrilla (adatpadas para personas con discapacidad), ideales para disfrutar al aire libre. El living-comedor se integra con la terraza, aportando luminosidad y vistas despejadas. Cocina completa y equipada con electrodomésticos modernos para mayor comodidad y autonomía. Dormitorio en suite con jacuzzi y vestidor; además dos dormitorios amplios con placares empotrados y ropa de cama premium para un descanso reparador. Baño completo con hidromasaje y amenities de alta calidad. Superficie cubierta de 60 m² y descubierta de 18 m², diseñada para confort y funcionalidad. Incluye servicio Grindelia: desayuno diario, limpieza y acceso a piscina y spa; atención al huésped disponible para resolver cualquier necesidad durante tu estadía.",

  breakfastTitle: "Desayuno",
  breakfastInfo: `Incluye desayuno únicamente con envío a los departamentos. Horario: 08:00 a 11:00 hs.`,

  cleaningTitle: "Limpieza",
  cleaningInfo: `Horario: de 9:00 a 14:00 hs. Incluye orden del apart, recambio de sábanas y toallas según política vigente.
El servicio de limpieza diario no incluye lavado de vajilla. Cada unidad cuenta con los elementos necesarios para su uso y limpieza.`,

  roomFacilitiesTitle: "Comodidades",
  roomFacilities: [
    { iconUrl: "/images/icons/facility_icon_1.svg", title: "Cama Queen size" },
    {
      iconUrl: "/images/icons/facility_icon_1.svg", // Usar el mismo que "Cama Queen"
      title: "Practicuna sin costo",
    },

    { iconUrl: "/images/icons/facility_icon_2.svg", title: "Locker personal" },
    { iconUrl: "/images/icons/facility_icon_3.svg", title: "Escritorio" },
    { iconUrl: "/images/icons/facility_icon_4.svg", title: "Locker personal" },
    {
      iconUrl: "/images/icons/facility_icon_5.svg",
      title: "Aire acondicionado",
    },
    { iconUrl: "/images/icons/facility_icon_6.svg", title: "Minibar" },
    {
      iconUrl: "/images/icons/facility_icon_7.svg",
      title: "Cafetera y tetera",
    },
    { iconUrl: "/images/icons/facility_icon_8.svg", title: "Televisión" },
    { iconUrl: "/images/icons/facility_icon_9.svg", title: "Wi-Fi" },
    { iconUrl: "/images/icons/facility_icon_10.svg", title: "Bañera" },
    {
      iconUrl: "/images/icons/facility_icon_12.svg",
      title: "Servicio a la habitación",
    },
  ],
  roomCapacityTitle: "Capacidad",
  roomCapacity: "Hasta 3 huéspedes",
};

const featureData = [
  {
    iconUrl: "/images/icons/restaurant.svg",
    title: "Restaurante & Bar",
    subTitle:
      "Gastronomía de autor con vista al mar. Platos y tragos para todos los gustos.",
  },
  {
    iconUrl: "/images/icons/massage.svg",
    title: "Spa & Bienestar",
    subTitle:
      "Relajate en nuestro spa con tratamientos exclusivos y zona de relax.",
  },
  {
    iconUrl: "/images/icons/gym.svg",
    title: "Gimnasio",
    subTitle: "Entrená con equipos de última generación y vista panorámica.",
  },
  {
    iconUrl: "/images/icons/swimmer.svg",
    title: "Piscina Infinita",
    subTitle: "Piscina climatizada con borde infinito y solárium.",
  },
  {
    iconUrl: "/images/icons/briefcase.svg",
    title: "Centro de Negocios",
    subTitle: "Salas de reuniones y espacios de coworking para tu comodidad.",
  },
  {
    iconUrl: "/images/icons/room-service.svg",
    title: "Room Service 24/7",
    subTitle: "Servicio a la habitación todo el día, todos los días.",
  },
];

const roomData = [
  {
    imgUrl: "/images/Room_5.webp",
    title: "Premium 2 Ambientes",
    currency: "$",
    price: 350,
    pricePer: "/Noche",
    href: "/room/2a",
    features: ["110 m²", "3 Huéspedes", "Wi-Fi"],
  },
];

const galleryData = [
  { imgUrlLg: "/images/room_lg_6.webp", imgUrlSm: "/images/room_sm_6.webp" },
  { imgUrlLg: "/images/room_lg_1.webp", imgUrlSm: "/images/room_sm_1.webp" },
  { imgUrlLg: "/images/room_lg_2.webp", imgUrlSm: "/images/room_sm_2.webp" },
  { imgUrlLg: "/images/room_lg_3.webp", imgUrlSm: "/images/room_sm_3.webp" },
  { imgUrlLg: "/images/room_lg_5.webp", imgUrlSm: "/images/room_sm_5.webp" },
  { imgUrlLg: "/images/room_lg_4.webp", imgUrlSm: "/images/room_sm_4.webp" },
  { imgUrlLg: "/images/room_lg_7.webp", imgUrlSm: "/images/room_sm_7.webp" },
  { imgUrlLg: "/images/room_lg_8.webp", imgUrlSm: "/images/room_sm_8.webp" },
  { imgUrlLg: "/images/room_lg_9.webp", imgUrlSm: "/images/room_sm_9.webp" },
  { imgUrlLg: "/images/room_lg_10.webp", imgUrlSm: "/images/room_sm_10.webp" },
];

export default function RoomDetailsPageV2() {
  useEffect(() => {
    document.body.classList.remove("cs_dark");
  }, []);
  return (
    <>
      <Section
        topSpaceLg="100"
        topSpaceMd="80"
        bottomSpaceLg="0"
        bottomSpaceMd="0"
      >
        <ProductBanner
          title="Departamento Premium"
          currency="2 Ambientes"
          data={galleryData}
        />
      </Section>
      <Section
        topSpaceLg="150"
        topSpaceMd="80"
        bottomSpaceLg="0"
        bottomSpaceMd="0"
        className="room2a-standardize"
      >
        {/* Estilos locales para separación, color y normalización de íconos */}
        <style>{`
          @media (min-width: 992px) {
            .room2a-row { column-gap: 32px; flex-wrap: nowrap; }
            .room2a-right { padding-left: 32px; }
          }
          @media (min-width: 1200px) {
            .room2a-row { column-gap: 40px; }
            .room2a-right { padding-left: 40px; }
          }
          /* Compactar bullets de Comodidades - una sola columna */
          .room2a-right .cs_list.cs_style_3 {
            grid-template-columns: 1fr !important;
            display: grid !important;
            grid-gap: 18px !important;
          }
          .room2a-right .cs_list.cs_style_3 li {
            margin-bottom: 0;
            line-height: 1.3;
            padding-top: 0;
            padding-bottom: 0;
          }
          /* Unificar tamaño/alineación y color (gris oscuro) de todos los íconos */
          .room2a-right .cs_list.cs_style_3 li img {
            width: 20px;
            height: 20px;
            margin-right: 8px;
            vertical-align: middle;
            object-fit: contain;
            filter: grayscale(1) brightness(0.35) contrast(1.1); /* unifica color */
          }
          /* Color más oscuro para textos */
          .room2a-left .cs_room_details p {
            color: #4b4b49;
          }
          .room2a-right .cs_list.cs_style_3,
          .room2a-right .cs_list.cs_style_3 li,
          .room2a-right .cs_list.cs_style_3 li span {
            color: #4b4b49;
          }
        `}</style>
        <div className="container">
          <div className="row cs_gap_y_40 align-items-start room2a-row">
            <div className="col-lg-8 room2a-left">
              <div className="cs_room_details">
                <h3 className="cs_fs_38 cs_mb_29 cs_mb_lg_20">
                  Sobre el Alojamiento
                </h3>
                <p
                  className="cs_mb_49 cs_mb_lg_30"
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                    hyphens: "auto",
                  }}
                >
                  {roomDetailsData.detailes}
                </p>

                {/* Desayuno */}
                <h3 className="cs_fs_31 cs_mb_20 cs_mb_lg_15">
                  {roomDetailsData.breakfastTitle}
                </h3>
                <p
                  className="cs_mb_35 cs_mb_lg_25"
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                    hyphens: "auto",
                  }}
                >
                  {roomDetailsData.breakfastInfo}
                </p>

                {/* Limpieza */}
                <h3 className="cs_fs_31 cs_mb_20 cs_mb_lg_15">
                  {roomDetailsData.cleaningTitle}
                </h3>
                <p
                  className="cs_mb_0"
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                    hyphens: "auto",
                  }}
                >
                  {roomDetailsData.cleaningInfo}
                </p>
              </div>
            </div>
            <div className="col-lg-4 room2a-right">
              <div className="cs_room_details">
                <h3 className="cs_fs_31 cs_mb_29 cs_mb_lg_20">Comodidades</h3>
                <ul
                  className="cs_list cs_style_3 cs_mp_0"
                  style={{ columns: 1 }}
                >
                  {/* Huéspedes (unificado al mismo estilo que el resto) */}
                  <li>
                    <img src="/images/icons/review.svg" alt="Huéspedes" />
                    hasta 3 huéspedes
                  </li>
                  {/* ...existing code... */}
                  {roomDetailsData.roomFacilities
                    ?.filter((item) => {
                      const t = (item.title || "").toLowerCase();
                      return !(
                        t.includes("locker") ||
                        t.includes("escritorio") ||
                        t.includes("lavander")
                      );
                    })
                    .map((item, index) => (
                      <li key={index}>
                        <img src={item.iconUrl} alt="Icon" />
                        {item.title}
                      </li>
                    ))}
                  {/* Servicio de Playa (unificado al mismo estilo) */}
                  <li>
                    <img
                      src="/images/icons/swimmer.svg"
                      alt="Servicio de Playa"
                    />
                    Reposeras para la playa
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="0"
        bottomSpaceMd="0"
      ></Section>
    </>
  );
}
