import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://www.luisareis.com.br";

const title = "Do Lead ao Cliente: Como Converter | Luisa Reis";
const description =
  "E-book de Luisa Reis: um guia prático para melhorar o primeiro contato, organizar o follow-up e transformar os leads que você já tem em clientes pagantes.";

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Luisa Reis",
  },
  description,
  keywords: [
    "e-book vendas",
    "conversão de leads",
    "Do Lead ao Cliente",
    "Como Converter",
    "Luisa Reis",
    "follow-up",
    "primeiro contato",
    "processo comercial",
    "estratégia em vendas",
    "diagnóstico de vendas",
  ],
  authors: [{ name: "Luisa Reis", url: siteUrl }],
  creator: "Luisa Reis",
  publisher: "Luisa Reis",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Luisa Reis — Estratégia em vendas",
    url: siteUrl,
    title,
    description,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Capa do e-book Do Lead ao Cliente: Como Converter, de Luisa Reis — Estratégia em vendas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "business",
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#14284B",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-screen antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body id="top" className="min-h-full flex flex-col w-full">
        {children}
      </body>
    </html>
  );
}
