import React from "react";

import { FormattedMessage } from "react-intl";
import "./styles/buttonLink.scss";

const ButtonLink = (props) => {

  console.log((<FormattedMessage id="cv" />));
  return (
    <>
      <a
        className="button-link"
        download={props.dowloand}
        href={props.href}
        onClick={props.evento}
        target={props.target}
      >
        <FormattedMessage id={props.text} defaultMessage={props.default} />
      </a>

      <div>
        {/* descarga segun el idioma
        <a
          className="button-link"
          // download={<FormattedMessage id="cv" defaultMessage="cv" />}
          href={<FormattedMessage id="cv" defaultMessage="cv" />}
          onClick={props.evento}
          
        >
          
          <FormattedMessage id="Download CV" defaultMessage="Download CV" />
        </a> */}
      </div>
    </>
  );
};

export default ButtonLink;
