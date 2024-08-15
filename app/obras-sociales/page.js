"use client";

import React, { useState } from "react";
import BotonFlotante from "@/components/home/BotonFlotante";
import Contacto from "@/components/home/Contacto";
import Footer from "@/components/home/Footer";
import NavBar from "@/components/home/Navbar";
import Coberturas from "@/components/home/Coberturas";
import WelcomeCoberturas from "@/components/home/WelcomeCoberturas";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main className="main">
      <NavBar />
      <WelcomeCoberturas
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <Coberturas searchTerm={searchTerm} />
      <Contacto />
      <BotonFlotante />
      <Footer />
    </main>
  );
}
