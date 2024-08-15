import "../styles/_preguntasFrecuentes.scss";

function Coberturas({ searchTerm }) {
  const coberturas = [
    { titulo: "AMEPBA" },
    { titulo: "AMFFA" },
    { titulo: "AMSTERDAM SALUD" },
    { titulo: "ASPOT" },
    { titulo: "ASOC. ECELSIATICA SAN PEDRO" },
    { titulo: "AVALIAN" },
    { titulo: "CASA" },
    { titulo: "CENTRO MÉDICO PUEYRREDÓN" },
    { titulo: "COLOEGIO DE ESCRIBANOS" },
    { titulo: "COMEI" },
    { titulo: "DASMI" },
    { titulo: "DASUTEN" },
    { titulo: "E.W. HOPE" },
    { titulo: "FEDERAR SALUD" },
    { titulo: "FUTBOLISTAS" },
    { titulo: "IOSFA" },
    { titulo: "IOMA" },
    { titulo: "JERÁRQUICOS" },
    { titulo: "LA HOLANDA ART" },
    { titulo: "LA SEGUNDA ART" },
    { titulo: "LA SEGUNDA PERSONAS" },
    { titulo: "LA PEQUEÑA FAMILIA" },
    { titulo: "LUIS PASTEUR" },
    { titulo: "MEDICAR WORK" },
    { titulo: "MEDIFE" },
    { titulo: "MOTOCICLISTAS" },
    { titulo: "OPDEA" },
    { titulo: "OSAP" },
    { titulo: "OSAPM" },
    { titulo: "OSCAP" },
    { titulo: "OSFATUN" },
    { titulo: "OSPE" },
    { titulo: "OSPEDYC" },
    { titulo: "OSPEPBA" },
    { titulo: "OSPIA" },
    { titulo: "OSPTV" },
    { titulo: "OSSEG" },
    { titulo: "PODER JUDICIAL" },
    { titulo: "PREVENCIÓN SALUD" },
    { titulo: "RECONQUISTA ART" },
    { titulo: "RURAL MUTUAL ART" },
    { titulo: "SANCOR" },
    { titulo: "SWISS MEDICAL" },
    { titulo: "SOCIEDAD ITALIANA" },
  ];

  const normalizeString = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const filteredCoberturas = coberturas.filter(
    (item) => normalizeString(item.titulo).includes(normalizeString(searchTerm))
    // normalizeString(item.significado).includes(normalizeString(searchTerm))
  );

  return (
    <div className="preguntas-frecuentes">
      {filteredCoberturas.map((item, index) => (
        <div key={index}>
          <div className="preguntas-flex">
            <h4>{item.titulo}</h4>
          </div>
          <div className="linea"></div>
        </div>
      ))}
    </div>
  );
}

export default Coberturas;
