"use client";

import { useEffect, useState } from "react";
import PageHeadingSection from "../Section/PageHeadingSection";
import GallerySection4 from "../Section/GallerySection/GallerySection4";
import Section from "../Section";
const galleryData = [
  // Todas las imágenes deben existir en /public/images con tamaño 832x930
  {
    imgUrl: "/images/galleri-01.webp",
    title: "Suites",
    category: "Habitaciones",
  },
  {
    imgUrl: "/images/galleri-02.webp",
    title: "Suites",
    category: "Habitaciones",
  },
  {
    imgUrl: "/images/galleri-03.webp",
    title: "Suites",
    category: "Habitaciones",
  },
  {
    imgUrl: "/images/galleri-04.webp",
    title: "Suites",
    category: "Habitaciones",
  },
  {
    imgUrl: "/images/galleri-05.webp",
    title: "Suites",
    category: "Habitaciones",
  },
  {
    imgUrl: "/images/galleri-06.webp",
    title: "Suites",
    category: "Habitaciones",
  },
  {
    imgUrl: "/images/galleri-07.webp",
    title: "Suites",
    category: "Habitaciones",
  },
  {
    imgUrl: "/images/galleri-08.webp",
    title: "Suites",
    category: "Habitaciones",
  },
  {
    imgUrl: "/images/galleri-09.webp",
    title: "Suites",
    category: "Habitaciones",
  },
  {
    imgUrl: "/images/galleri-10.webp",
    title: "Suites",
    category: "Habitaciones",
  },
  {
    imgUrl: "/images/galleri-11.webp",
    title: "Suites",
    category: "Habitaciones",
  },
  {
    imgUrl: "/images/galleri-12.webp",
    title: "Suites",
    category: "Habitaciones",
  },
  {
    imgUrl: "/images/galleri-13.webp",
    title: "Suites",
    category: "Habitaciones",
  },
  {
    imgUrl: "/images/galleri-14.webp",
    title: "Suites",
    category: "Habitaciones",
  },
  {
    imgUrl: "/images/galleri-15.webp",
    title: "Suites",
    category: "Habitaciones",
  },
  {
    imgUrl: "/images/galleri-16.webp",
    title: "Suites",
    category: "Habitaciones",
  },
  {
    imgUrl: "/images/galleri-17.webp",
    title: "Suites",
    category: "Habitaciones",
  },
  {
    imgUrl: "/images/galleri-18.webp",
    title: "Suites",
    category: "Habitaciones",
  },
  {
    imgUrl: "/images/galleri-19.webp",
    title: "Suites",
    category: "Habitaciones",
  },
  {
    imgUrl: "/images/galleri-20.webp",
    title: "Piscina",
    category: "Pileta",
  },
  {
    imgUrl: "/images/galleri-21.webp",
    title: "Piscina",
    category: "Pileta",
  },
  {
    imgUrl: "/images/galleri-22.webp",
    title: "Piscina",
    category: "Pileta",
  },
  {
    imgUrl: "/images/galleri-23.webp",
    title: "Piscina",
    category: "Pileta",
  },
  {
    imgUrl: "/images/galleri-24.webp",
    title: "Piscina",
    category: "Pileta",
  },
  {
    imgUrl: "/images/galleri-25.webp",
    title: "Piscina",
    category: "Pileta",
  },
  {
    imgUrl: "/images/galleri-26.webp",
    title: "Piscina",
    category: "Pileta",
  },
  {
    imgUrl: "/images/galleri-27.webp",
    title: "Piscina",
    category: "Pileta",
  },
  {
    imgUrl: "/images/galleri-28.webp",
    title: "Piscina",
    category: "Pileta",
  },
  {
    imgUrl: "/images/galleri-29.webp",
    title: "Piscina",
    category: "Pileta",
  },
  {
    imgUrl: "/images/galleri-30.webp",
    title: "Piscina",
    category: "Pileta",
  },
  {
    imgUrl: "/images/galleri-31.webp",
    title: "Piscina",
    category: "Pileta",
  },
  {
    imgUrl: "/images/galleri-32.webp",
    title: "Piscina",
    category: "Pileta",
  },
  {
    imgUrl: "/images/galleri-33.webp",
    title: "Piscina",
    category: "Pileta",
  },
  {
    imgUrl: "/images/galleri-34.webp",
    title: "Piscina",
    category: "Pileta",
  },
  {
    imgUrl: "/images/galleri-35.webp",
    title: "Gimnasio",
    category: "Gimnasio",
  },
  {
    imgUrl: "/images/galleri-36.webp",
    title: "Gimnasio",
    category: "Gimnasio",
  },
  {
    imgUrl: "/images/galleri-37.webp",
    title: "Gimnasio",
    category: "Gimnasio",
  },
  {
    imgUrl: "/images/galleri-38.webp",
    title: "Gimnasio",
    category: "Gimnasio",
  },
  {
    imgUrl: "/images/galleri-39.webp",
    title: "Gimnasio",
    category: "Gimnasio",
  },
  {
    imgUrl: "/images/galleri-40.webp",
    title: "Gimnasio",
    category: "Gimnasio",
  },
  {
    imgUrl: "/images/galleri-41.webp",
    title: "Gimnasio",
    category: "Gimnasio",
  },
  {
    imgUrl: "/images/galleri-42.webp",
    title: "Gimnasio",
    category: "Gimnasio",
  },
  {
    imgUrl: "/images/galleri-43.webp",
    title: "Gimnasio",
    category: "Gimnasio",
  },
  {
    imgUrl: "/images/galleri-44.webp",
    title: "Gimnasio",
    category: "Gimnasio",
  },
  {
    imgUrl: "/images/galleri-45.webp",
    title: "Spa",
    category: "Spa",
  },
  {
    imgUrl: "/images/galleri-46.webp",
    title: "Spa",
    category: "Spa",
  },
  {
    imgUrl: "/images/galleri-47.webp",
    title: "Spa",
    category: "Spa",
  },
  {
    imgUrl: "/images/galleri-48.webp",
    title: "Spa",
    category: "Spa",
  },
  {
    imgUrl: "/images/galleri-49.webp",
    title: "Spa",
    category: "Spa",
  },
  {
    imgUrl: "/images/galleri-50.webp",
    title: "Spa",
    category: "Spa",
  },
  {
    imgUrl: "/images/galleri-51.webp",
    title: "Spa",
    category: "Spa",
  },
  {
    imgUrl: "/images/galleri-52.webp",
    title: "Spa",
    category: "Spa",
  },
  {
    imgUrl: "/images/galleri-53.webp",
    title: "Spa",
    category: "Spa",
  },
  {
    imgUrl: "/images/galleri-54.webp",
    title: "Zona Infantil",
    category: "Zona Infantil",
  },
  {
    imgUrl: "/images/galleri-55.webp",
    title: "Zona Infantil",
    category: "Zona Infantil",
  },
  {
    imgUrl: "/images/galleri-56.webp",
    title: "Zona Infantil",
    category: "Zona Infantil",
  },
  {
    imgUrl: "/images/galleri-58.webp",
    title: "Zona Infantil",
    category: "Zona Infantil",
  },
  {
    imgUrl: "/images/galleri-59.webp",
    title: "Zona Infantil",
    category: "Zona Infantil",
  },
  {
    imgUrl: "/images/galleri-60.webp",
    title: "Zona Infantil",
    category: "Zona Infantil",
  },
  {
    imgUrl: "/images/galleri-61.webp",
    title: "Zona Infantil",
    category: "Zona Infantil",
  },
  {
    imgUrl: "/images/galleri-62.webp",
    title: "Zona Infantil",
    category: "Zona Infantil",
  },
  {
    imgUrl: "/images/galleri-63.webp",
    title: "Usos Múltiples",
    category: "Usos Múltiples",
  },
  {
    imgUrl: "/images/galleri-64.webp",
    title: "Usos Múltiples",
    category: "Usos Múltiples",
  },
  {
    imgUrl: "/images/galleri-65.webp",
    title: "Usos Múltiples",
    category: "Usos Múltiples",
  },
  {
    imgUrl: "/images/galleri-66.webp",
    title: "Usos Múltiples",
    category: "Usos Múltiples",
  },
  {
    imgUrl: "/images/galleri-67.webp",
    title: "Usos Múltiples",
    category: "Usos Múltiples",
  },
  {
    imgUrl: "/images/galleri-68.webp",
    title: "Usos Múltiples",
    category: "Usos Múltiples",
  },
  {
    imgUrl: "/images/galleri-69.webp",
    title: "Usos Múltiples",
    category: "Usos Múltiples",
  },
  {
    imgUrl: "/images/galleri-70.webp",
    title: "Usos Múltiples",
    category: "Usos Múltiples",
  },
];

export default function GalleryPage() {
  useEffect(() => {
    document.body.classList.remove("cs_dark");
  }, []);

  const filtersEnabled = true; // filtros activados

  const categories = [
    "Todas",
    "Habitaciones",
    "Pileta",
    "Gimnasio",
    // "Espacios Verdes",
    "Usos Múltiples",
    "Zona Infantil",
    "Spa",
  ];
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const filteredData = filtersEnabled
    ? selectedCategory === "Todas"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory)
    : galleryData;

  return (
    <>
      <PageHeadingSection
        title="Galería Grindelia"
        bgImgUrl="/images/page_heading_gallery_bg.webp"
      />
      <Section
        topSpaceLg="141"
        topSpaceMd="75"
        bottomSpaceLg="150"
        bottomSpaceMd="80"
      >
        <GallerySection4
          sectionTitle="Descubrí la galería de fotos de Grindelia"
          sectionSubTitle="GALERÍA DE FOTOS"
          data={[]}
        />

        {filtersEnabled && (
          <div
            style={{
              marginBottom: 24,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={
                  "cs_btn cs_style_2 cs_medium cs_fs_15 cs_radius_5" +
                  (selectedCategory === cat ? " cs_active" : "")
                }
                aria-pressed={selectedCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <GallerySection4
          sectionTitle=""
          sectionSubTitle=""
          data={filteredData}
        />
      </Section>
    </>
  );
}
