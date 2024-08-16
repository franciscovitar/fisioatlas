"use client";
import React from "react";
import "../styles/_seccion2.scss";
import Image from "next/image";
import Que from "../../Image/soporte2.jpg";
import { motion } from "framer-motion";

const imageVariants = {
  viewport: { once: true },
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut", delay: 0.2 },
  },
};
function Seccion2() {
  return (
    <div id="nosotros" className="seccion2-container">
      <motion.div {...imageVariants} className="seccion-blanco">
        <div className="imagen">
          <Image src={Que} />
        </div>
        <div className="texto">
          <h3>¿Quiénes somos?</h3>
          <p>
            En Fisioatlas, ubicado en Lomas de Zamora, somos un equipo de
            profesionales dedicados a mejorar tu bienestar físico. Nos
            especializamos en Kinesiología Deportiva, Reeducación Postural
            Global, Osteopatía, Stretching Global Activo y Kinesiología
            Integral. Con un enfoque personalizado y técnicas avanzadas, te
            ayudamos a prevenir lesiones, optimizar tu rendimiento y alcanzar un
            bienestar integral. ¡Conocé cómo podemos ayudarte a vivir sin dolor!{" "}
          </p>
          <a href="#servicios">Servicios</a>
        </div>
      </motion.div>
    </div>
  );
}

export default Seccion2;
