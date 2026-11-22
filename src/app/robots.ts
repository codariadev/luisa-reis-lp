import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.luisareis.com.br/sitemap.xml",
    host: "https://www.luisareis.com.br",
  };
}
