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
            ¿Necesitas ayuda con MODO? Estamos aquí para asistirte. Ya sea que
            estés teniendo problemas para iniciar sesión, configurar tu cuenta,
            o simplemente tengas preguntas sobre las funcionalidades de la
            aplicación, nuestro equipo de expertos está listo para ofrecerte el
            soporte que necesitas. Visita nuestra sección de ayuda para acceder
            a guías detalladas y soluciones rápidas a los problemas más comunes.
          </p>
          <a href="#servicios">Servicios</a>
        </div>
      </motion.div>
    </div>
  );
}

export default Seccion2;
