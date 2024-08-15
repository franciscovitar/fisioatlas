import BotonFlotante from "@/components/home/BotonFlotante";
import Contacto from "@/components/home/Contacto";
import Footer from "@/components/home/Footer";
import Inicio from "@/components/home/Inicio";
import Navbar from "@/components/home/Navbar";
import ObrasSociales from "@/components/home/ObrasSociales";
import Reseñas from "@/components/home/Reseñas";

import Seccion2 from "@/components/home/Seccion2";
import Servicios from "@/components/home/Servicios";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Inicio />
      <Seccion2 />
      <Servicios />
      <ObrasSociales />
      <Reseñas />
      <Contacto />
      <BotonFlotante />
      <Footer />
    </main>
  );
}
