import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Luisa Reis — Estratégia em vendas",
    short_name: "Luisa Reis",
    description:
      "E-book Do Lead ao Cliente: Como Converter. Guia prático para transformar os leads que você já tem em clientes.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F3EA",
    theme_color: "#14284B",
    lang: "pt-BR",
    icons: [
      {
        src: "/icon.png",
        sizes: "800x800",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
