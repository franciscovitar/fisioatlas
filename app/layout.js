import { Quicksand } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Fisioatlas | Centro de Kinesiología en Lomas de Zamora",
  description:
    "Fisioatlas es un centro de kinesiología en Lomas de Zamora especializado en Kinesiología Deportiva, Reeducación Postural Global (RPG), Osteopatía, y Stretching Global Activo (SGA). Ofrecemos tratamientos personalizados para prevenir lesiones, mejorar el rendimiento deportivo y promover el bienestar integral.",
  keywords: [
    "Fisioatlas",
    "kinesiología Lomas de Zamora",
    "Kinesiología Deportiva",
    "Reeducación Postural Global",
    "Osteopatía",
    "Stretching Global Activo",
    "bienestar físico",
    "tratamientos personalizados",
    "prevención de lesiones",
    "rendimiento deportivo",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
