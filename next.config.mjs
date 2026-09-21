/**
 * Options utiles documentées pour plus tard :
 * - `output: "export"` pour un export statique (GitHub Pages) ;
 * - `basePath`/`assetPrefix` si le site n'est pas servi à la racine du domaine.
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [
      {
        source: "/:chemin*(png|jpg|jpeg|webp|svg|ico)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" },
        ],
      },
    ];
  },
};

export default nextConfig;
