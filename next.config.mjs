/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Optimizaciones de imágenes */
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  /* Headers de caché para rendimiento */
  async headers() {
    return [
      {
        source: "/images/:all*(svg|jpg|jpeg|png|webp|avif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:all*(css|js)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  /* Normalización de URLs - sin trailing slash */
  trailingSlash: false,

  /* Compresión */
  compress: true,

  /* Generación de sitemap automático (Next.js 13+) */
  generateBuildId: async () => {
    return "grindelia-build-" + Date.now();
  },
};

export default nextConfig;
