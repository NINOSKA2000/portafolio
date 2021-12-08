import React, {useContext} from "react";

import eng from "./../../../assets/eng.png";
import esp from "./../../../assets/esp.png";

import { langContext } from "./../../../context/langContext";

const Idioms = (props) => {
	
	const idioma = useContext(langContext);
	
  return (
    <>
      <div className="header-lenguajes">
        <button onClick={() => idioma.establecerLenjuage("es-MX")}>
          <img src={esp} alt="cambiar idioma español"/>
        </button>
        <button onClick={() => idioma.establecerLenjuage("en-US")}>
          <img src={eng} alt="change languaje english"/>
        </button>
      </div>
    </>
  );
};

export default Idioms;
