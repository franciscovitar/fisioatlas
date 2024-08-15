"use client";

import React from "react";
import "../styles/_botonFlotante.scss";
import { motion } from "framer-motion";

// Constantes para efectos de Framer Motion
const buttonVariants = {
  viewport: { once: true },
  initial: { opacity: 0, scale: 0 },
  whileInView: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  whileHover: { scale: 1.05 },
};

function BotonFlotante() {
  return (
    <div className="btn-flotante">
      <motion.a
        {...buttonVariants}
        href="https://api.whatsapp.com/send/?phone=5491123873039"
        target="blank"
        className="boton-wsp"
        title="whatsapp"
      >
        <i className="bi bi-whatsapp"></i>
      </motion.a>
    </div>
  );
}

export default BotonFlotante;
