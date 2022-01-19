import React, { useState } from "react";

import { FormattedMessage } from "react-intl";
import "./styles/buttonLink.scss";

const ButtonLink = (props) => {

 const [targettext,settargettext]=useState(" ");

  return (
    <>
      <a
        className="main-contenedor-button"
        download={props.dowloand}
         onClick={(e)=> settargettext(e.target.innerText) }
        href={ targettext==="Download CV" ? (props.cvEnglish): props.cvEspañol }
        target={props.target}
      >
        <FormattedMessage id={props.text} defaultMessage={props.default} />
      </a>

    </>
  );
};

export default ButtonLink;
