import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "turismo.concon — Experiencias locales en Concón",
  description:
    "Reserva SUP, yoga, tenis, paddle, vela y nado con emprendedores locales de Concón. El marketplace de actividades recreativas de la costa.",
  openGraph: {
    title: "turismo.concon",
    description:
      "El marketplace de experiencias recreativas locales de Concón: SUP, yoga, tenis, paddle, vela y nado.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
