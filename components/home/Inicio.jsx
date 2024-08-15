"use client";

import React from "react";
import { motion } from "framer-motion";
import "../styles/_inicios.scss";

// Constantes para efectos de Framer Motion

const textVariants = {
  viewport: { once: true },
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
};

const linkVariants = {
  viewport: { once: true },
  initial: { opacity: 0, scale: 0 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 0.4 },
  },
};

function HomeWelcome() {
  return (
    <div id="inicio" className="HomeWelcome-container">
      <div className="container">
        <motion.h1 {...textVariants}>Fisio Atlas</motion.h1>
        {/* <motion.h4 {...textVariants}> 𝑷𝒍𝒂𝒕𝒂𝒇𝒐𝒓𝒎𝒂 𝒆𝒅𝒖𝒄𝒂𝒕𝒊𝒗𝒂 </motion.h4> */}
        <div className="botones">
          <motion.a
            title="cursos"
            href="https://api.whatsapp.com/send/?phone=5491123873039"
            target="blank"
            {...linkVariants}
          >
            Sacar turno
          </motion.a>
          <motion.a href="#nosotros" {...linkVariants}>
            ¿Quienes somos?
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default HomeWelcome;
