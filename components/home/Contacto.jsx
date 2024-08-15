"use client";

import React from "react";
import { motion } from "framer-motion";
import "../styles/_contacto.scss";
import Image from "next/image";
import Logo from "../../Image/logo.jpg";

function Contacto() {
  return (
    <div id="contacto" className="contacto-container">
      <div className="contacto">
        <div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.5, delay: 0 },
            }}
          >
            <Image alt="logo" className="logo" src={Logo} />
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ width: 0 }}
            whileInView={{ width: 100, transition: { duration: 0.5 } }}
            className="line"
          ></motion.div>
        </div>

        <div>
          <div className="iconos">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/fisioatlasok/"
            >
              <motion.i
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0.3 },
                }}
                className="bi bi-instagram"
              ></motion.i>
            </a>

            <a
              href="https://api.whatsapp.com/send/?phone=5491123873039"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.i
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0.4 },
                }}
                className="bi bi-whatsapp"
              ></motion.i>
            </a>
          </div>
        </div>
        <div className="texto">
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
          >
            <strong>Dirección:</strong> Laprida 711 - Lomas de Zamora
          </motion.p>

          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.3 },
            }}
          >
            <strong>Email:</strong>fisioatlaslomas@gmail.com
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.3 },
            }}
          >
            <strong>Teléfono:</strong> +54 9 11-2387- 3039
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
