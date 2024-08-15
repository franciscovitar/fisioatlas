"use client";

import React from "react";
import "../styles/Footer.scss";

function Footer() {
  return (
    <footer className="detalleFooter">
      <p>
        © 2024,{" "}
        <a
          title="genova"
          href="https://genovasite.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Genova
        </a>
        , agencia diseñadora y desarrolladora de software. Todos los derechos
        reservados.
      </p>
    </footer>
  );
}

export default Footer;
