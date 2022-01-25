import React from "react";

import { FormattedMessage } from "react-intl";
import "./styles/buttonLink.scss";

const ButtonFilter = (props) => {

  return (
    <>
      <a
        className="button-filter"
        download={props.dowloand}
         onClick={props.evento}
        href={ props.href }
        target={props.target}
      >
        <FormattedMessage id={props.text} defaultMessage={props.default} />
      </a>
      

    </>
  );
};

export default ButtonFilter;
