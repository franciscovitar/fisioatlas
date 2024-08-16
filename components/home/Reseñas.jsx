"use client";

import "../styles/_reseñas.scss";
import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

const lineVariants = {
  viewport: { once: true },
  initial: { width: 0 },
  whileInView: { width: 100, transition: { duration: 2 } },
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};

const trabajos = [
  {
    nombre: "Natalia Raffaelli",
    reseña:
      "Muy buena atención! desde la recepción hasta los profesionales, todos unos genios. Muy recomendable",
    estrellas: 5,
  },
  {
    nombre: "Gisela Mariana Savino",
    reseña:
      "Agradecida por la excelente atención de todo el equipo, la paciencia, la dedicación y sobre todo la buena onda! Recuerdo que llegue con mi dolor, con cara de pocos amigos pero enseguida me levantaron y mermaron ese dolor! Gracias ❤",
    estrellas: 5,
  },
  {
    nombre: "Mariana Chambret",
    reseña:
      "Llegue a fío atlas con un dolor en los gemelos que no me permitía correr desde la primer sesión con el lic Sebastián Tufaro sentí el cambio ya estoy corriendo casi como antes de la lesión y recién voy por la tercera. ¡Unos genios los chicos y el ambiente no puede ser mejor! Los recomiendo totalmente.",
    estrellas: 5,
  },
  {
    nombre: "Nahuel Frezzini",
    reseña:
      "Grandes profesionales! Muchas gracias Seba por tu compromiso y acompañamiento en mi rehabilitación de ligamento cruzado, hoy ya estoy entrenando y no paro de correr, no pude caer en mejor lugar 💪",
    estrellas: 5,
  },
  {
    nombre: "Valeria Lagomarsino",
    reseña:
      "Fui por un dolor en un isquiotibial que no podía sacarme con estiramiento y luego de tres sesiones ya podía hacer todas las posturas de yoga sin dolor!!! Gracias Sebas!!",
    estrellas: 5,
  },
  {
    nombre: "Blanca Gonzalez",
    reseña:
      "Estoy tan contenta de hacer terapia en este lugar, desde el tratamiento y personal médico. Hermoso lugar, super recomendable 💞💞💞",
    estrellas: 5,
  },
  {
    nombre: "Rodrigo Diaz",
    reseña:
      "Muy buena atención por parte de los chicos de Fisio Atlas. Recomendado 100%. Especialmente si prácticas algún deporte y necesitas una recuperación óptima de alguna lesión.",
    estrellas: 5,
  },
  {
    nombre: "Lorena Depierre",
    reseña:
      "Excelentes profesionales y una atención personalizada para recomendar.",
    estrellas: 5,
  },
  {
    nombre: "Hugo Javier Avola",
    reseña: "Excelentes profesionales, los recomiendo a ciegas.",
    estrellas: 5,
  },
  {
    nombre: "Laura Silva",
    reseña: "Son los mejores, un 10 sin duda 😀",
    estrellas: 5,
  },

  {
    nombre: "Gonzalo Benitez",
    reseña: "",
    estrellas: 5,
  },
  {
    nombre: "Segovia, Natalia",
    reseña: "",
    estrellas: 5,
  },
  {
    nombre: "Macarena Comesaña",
    reseña: "",
    estrellas: 5,
  },
  {
    nombre: "Francisco Sosa",
    reseña: "",
    estrellas: 5,
  },
  {
    nombre: "Ezequiel Ledesma",
    reseña: "",
    estrellas: 5,
  },
  {
    nombre: "Cinthya Arluna",
    reseña: "",
    estrellas: 5,
  },
  {
    nombre: "Martin Mayer",
    reseña: "",
    estrellas: 5,
  },
  {
    nombre: "Milagros Campora",
    reseña: "",
    estrellas: 5,
  },
  {
    nombre: "Mel",
    reseña: "",
    estrellas: 5,
  },
  {
    nombre: "Florencia Rozas Y Sánchez",
    reseña: "",
    estrellas: 5,
  },
  {
    nombre: "Rita Z",
    reseña: "",
    estrellas: 5,
  },
];

function renderStars(count) {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(<i key={i} className="bi bi-star-fill"></i>);
  }
  return stars;
}

function Reseñas() {
  return (
    <div id="opiniones" className="contenedor-principal-Trabajos">
      <div className="titulo">
        <motion.h2
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.3 },
          }}
          className="m-0"
        >
          Experiencias de clientes
        </motion.h2>
        <motion.div
          {...lineVariants}
          className="line m-auto mt-2 mb-5"
        ></motion.div>
        {/* <motion.h3
          className="description"
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.5 },
          }}
        >
          Experiencias de clientes
        </motion.h3> */}
      </div>
      <Slider className="elSlider" {...settings}>
        {trabajos.map((trabajo, index) => (
          <div key={index} className="trabajos">
            <div className="trabajo">
              <div className="npmyest">
                <div className="estrellas">
                  {renderStars(trabajo.estrellas)}
                </div>
                <h4> &quot;{trabajo.nombre}&quot;</h4>
              </div>
              {trabajo.reseña ? <p>- &quot;{trabajo.reseña}&quot;</p> : ""}
            </div>
          </div>
        ))}
      </Slider>
      <a href="https://api.whatsapp.com/send/?phone=5491123873039">
        <motion.button className="boton">¡Contactanos!</motion.button>
      </a>
    </div>
  );
}

export default Reseñas;
