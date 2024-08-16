"use client";

import { useState } from "react";
import "../styles/_inicios.scss";
import { motion } from "framer-motion";

const textVariants = {
  viewport: { once: true },
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

function WelcomeCoberturas({ setSearchTerm, searchTerm }) {
  const [coberturas, setCoberturas] = useState("");

  const getCoberturas = (valor) => {
    setCoberturas(valor);
  };

  const handleSearchClick = () => {
    setSearchTerm(coberturas);
    window.scrollBy({
      top: 500, // ajusta esta cantidad según sea necesario
      behavior: "smooth",
    });
  };
  return (
    <div id="inicio" className="HomeWelcome-container">
      <div className="container">
        <motion.h2 {...textVariants}>OBRAS SOCIALES</motion.h2>
        <motion.h4 {...textVariants}>
          Atendemos más de 40 obras sociales
        </motion.h4>
        <div className="buscador">
          {" "}
          <motion.input
            {...textVariants}
            type="text"
            placeholder="Obra social..."
            value={coberturas}
            onChange={(e) => getCoberturas(e.target.value)}
          />
          <motion.button {...textVariants} onClick={handleSearchClick}>
            Buscar
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeCoberturas;
