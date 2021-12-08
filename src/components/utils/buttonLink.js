import React from "react";

import { FormattedMessage } from "react-intl";
import "./styles/buttonLink.scss";

const ButtonLink = (props) => {
  return (
    <>
      <a
        className="button-link"
        download={props.dowloand}
        href={props.href}
        onClick={props.evento}
        target={props.target}
      >
				
				<FormattedMessage
					id={props.text}
					defaultMessage={props.default}
				/>
      </a>
    </>
  );
};

export default ButtonLink;
