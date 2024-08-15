"use client";

import React from "react";
import "../styles/_obrasSociales.scss";
import Image from "next/image";
import Galeno from "../../Image/galeno.png";
import Ioma from "../../Image/ioma.jpeg";
import Omint from "../../Image/omint.png";
import Osde from "../../Image/osde.png";
import Osdepym from "../../Image/osdepym.jpeg";
import Osmecon from "../../Image/osmecon.jpeg";
import Pami from "../../Image/pami.png";
import Sancor from "../../Image/sancor.png";
import Swiss from "../../Image/swiss_medical.png";

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

const imageVariants = {
  viewport: { once: true },
  initial: { opacity: 0, scale: 0 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

function ObrasSociales() {
  return (
    <div id="coberturas" className="obras-sociales">
      <h3>¿Querés conocer las obras sociales con las que trabajamos?</h3>

      <div className="obras-flex">
        <div className="obra-flex">
          <motion.div {...imageVariants}>
            <Image src={Galeno} />
          </motion.div>
          <motion.div {...imageVariants}>
            <Image src={Swiss} />
          </motion.div>

          <motion.div {...imageVariants}>
            <Image src={Sancor} />
          </motion.div>
          <motion.div {...imageVariants}>
            <Image src={Osde} />
          </motion.div>
        </div>
      </div>
      <a target="blank" href="/obras-sociales">
        Ver todas
      </a>
    </div>
  );
}

export default ObrasSociales;
