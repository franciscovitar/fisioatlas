"use client";

import "../styles/_servicios.scss";
import React from "react";
import { motion } from "framer-motion";
import {
  FaRunning,
  FaUserMd,
  FaHandsHelping,
  FaChild,
  FaHeartbeat,
} from "react-icons/fa";

function Servicios() {
  return (
    <div className="contenedor-principal-PE" id="servicios">
      <motion.h2
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.3 },
        }}
      >
        Servicios
      </motion.h2>
      <motion.p
        className="description"
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.5 },
        }}
      >
        La mejor elección para tu proyecto de diseño y construcción
      </motion.p>
      <div className="contenedor-especialidades">
        <motion.div
          className="especialidad"
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.3 },
          }}
        >
          <FaRunning className=" material-symbols-outlined" size={60} />
          <h3>Kinesiología Deportiva</h3>
          <p>
            Especializados en prevenir y tratar lesiones deportivas, utilizamos
            técnicas avanzadas de análisis del movimiento para optimizar el
            rendimiento atlético. Nuestro enfoque personalizado en Lomas de
            Zamora garantiza una recuperación rápida y efectiva, ideal para
            quienes buscan volver al deporte en su mejor forma.
          </p>
        </motion.div>

        <motion.div
          className="especialidad"
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.5 },
          }}
        >
          <FaChild className=" material-symbols-outlined" size={60} />
          <h3>Reeducación Postural Global (RPG)</h3>
          <p>
            Aplicamos posturas activas personalizadas según el diagnóstico,
            centradas en la respiración y el reposicionamiento corporal para
            corregir desequilibrios. Este método en Lomas de Zamora mejora la
            postura, alivia tensiones y previene futuras lesiones, ayudando a
            alcanzar un bienestar integral.
          </p>
        </motion.div>

        <motion.div
          className="especialidad"
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.7 },
          }}
        >
          <FaHandsHelping className=" material-symbols-outlined" size={60} />
          <h3>Ostepatía</h3>
          <p>
            En sesiones de una hora, realizamos evaluaciones detalladas y
            tratamientos manuales específicos en músculos, esqueleto y órganos
            viscerales. La osteopatía es clave para mantener la salud integral,
            abordando problemas corporales desde su raíz en Lomas de Zamora.{" "}
          </p>
        </motion.div>
        <motion.div
          className="especialidad"
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.7 },
          }}
        >
          <FaUserMd className=" material-symbols-outlined" size={60} />
          <h3>Stretching Global Activo (SGA)</h3>
          <p>
            El Stretching Global Activo, derivado de la RPG, es un método
            efectivo para mejorar la elasticidad, prevenir lesiones y corregir
            la postura. Ideal para quienes buscan un enfoque global en su
            bienestar físico y mejorar su rendimiento deportivo en Lomas de
            Zamora.
          </p>
        </motion.div>
        <motion.div
          className="especialidad"
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.7 },
          }}
        >
          <FaHeartbeat className=" material-symbols-outlined" size={60} />
          <h3>Kinesiología integral</h3>
          <p>
            Nuestra metodología se basa en la evaluación exhaustiva y el
            tratamiento personalizado del movimiento, combinando ejercicio
            terapéutico, terapias manuales y agentes físicos. Este enfoque
            integral en Lomas de Zamora promueve el bienestar general y la
            recuperación funcional.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Servicios;
