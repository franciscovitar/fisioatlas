"use client";

import React, { useEffect, useState, useRef } from "react";
import "../styles/_navbar.scss";
import Image from "next/image";
import Logo from "../../Image/logo.jpg";
import { motion } from "framer-motion";

const imageVariants = {
  viewport: { once: true },
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const bgDiv = useRef(null);
  const linksActive = useRef(null);
  const changeBg = () => {
    setNavbar(window.scrollY > 80);
  };

  const handleClick = () => {
    bgDiv.current.classList.toggle("active");
    linksActive.current.classList.toggle("d-flex");
    setClicked((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBg);
    return () => window.removeEventListener("scroll", changeBg);
  }, []);

  return (
    <nav className={`${navbar ? "sinfondo" : "fondo"}`}>
      <motion.div {...imageVariants} className="left">
        <Image src={Logo} />
      </motion.div>
      <motion.div {...imageVariants} className="center">
        <a href="#inicio">Inicio</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#servicios">Servicios</a>
        <a href="#coberturas">Obras sociales</a>
        <a href="#opiniones">Reseñas</a>
        <a href="#contacto">Contacto</a>
      </motion.div>
      <motion.div {...imageVariants} className="right">
        <a
          target="blank"
          href="https://api.whatsapp.com/send/?phone=5493515556592"
          className="contacto"
        >
          Contacto
        </a>
        <i
          type="button"
          onClick={handleClick}
          className={`bi ${clicked ? "bi-x" : "bi-list"}`}
        ></i>
      </motion.div>
      <div ref={bgDiv} className="bg-div">
        <div ref={linksActive} className="links-active">
          <a onClick={handleClick} href="#inicio">
            Inicio
          </a>
          <a onClick={handleClick} href="#nosotros">
            Nosotros
          </a>
          <a onClick={handleClick} href="#servicios">
            Servicios
          </a>
          <a onClick={handleClick} href="#coberturas">
            Obras sociales
          </a>
          <a onClick={handleClick} href="#opiniones">
            Reseñas
          </a>
          <a onClick={handleClick} href="#contacto">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
