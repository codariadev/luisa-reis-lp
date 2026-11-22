import "./globals.css";

export const metadata = {
  title: "Do Lead ao Cliente: Como Converter | Luisa Reis",
  description: "Guia prático para melhorar o primeiro contato, organizar o follow-up e transformar os leads que você já tem em clientes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  
  return (
    <html
      lang="en"
      className="h-screen antialiased"
    >
      <body className="min-h-full flex flex-col w-screen">{children}</body>
    </html>
  );
}
