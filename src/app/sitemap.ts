import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://burocreatixx.nl";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/ons-verhaal`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/algemene-voorwaarden`,
      lastModified: new Date().toISOString(),
    },
    // Voeg hier meer pagina's toe zoals nodig
  ];
}
