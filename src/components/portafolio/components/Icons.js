import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { iconFront } from "./listIcon";
import { iconFrame } from "./listIcon";
import { listBD } from "./listIcon";


library.add(fab);

const Icons = () => {
  return (
    <>
      <div className="iconos">
        <div className="iconos-caja">
          {iconFront.map((icono, ind) => (
            <div key={ind} className="iconos-caja_content">
              <FontAwesomeIcon
                icon={[`${icono.prefix}`, `${icono.icon}`]}
                size="3x"
                className="icon"
              />
              <span>{icono.name}</span>
            </div>
          ))}
        </div>
        <div className="iconos-caja">
          {iconFrame.map((icono, ind) => (
            <div key={ind} className="iconos-caja_content">
              <FontAwesomeIcon
                icon={[`${icono.prefix}`, `${icono.icon}`]}
                size="3x"
                className="icon"
              />
              <span>{icono.name}</span>
            </div>
          ))}
        </div>
        <div className="iconos-caja">
          {listBD.map((icono, ind) => (
            <div key={ind} className="iconos-caja_content">
              <FontAwesomeIcon
                icon={[`${icono.prefix}`, `${icono.icon}`]}
                size="3x"
                className="icon"
              />
              <span>{icono.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Icons;
