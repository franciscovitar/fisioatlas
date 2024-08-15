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
  title: "Servicio Técnico para MODO - Tu Billetera Virtual",
  description:
    "Ofrecemos soporte técnico especializado para usuarios de MODO, la billetera virtual líder en Argentina. Ayudamos con la configuración, uso y resolución de problemas de la app.",
  keywords: [
    "MODO",
    "billetera virtual",
    "servicio técnico MODO",
    "soporte MODO",
    "bancos Argentina",
    "pagos móviles",
    "fintech Argentina",
    "asistencia MODO",
    "configuración MODO",
    "resolución problemas MODO",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
