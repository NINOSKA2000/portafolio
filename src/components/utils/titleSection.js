import React from "react";

import { FormattedMessage } from "react-intl";
import "./styles/titleSection.scss";

const TitleSection = (props) => {
  return (
    <div className="title">
      <p>
        <FormattedMessage
          id={props.tipoTitle || "ss"}
          defaultMessage={props.tipoTitle}
        />
        <span>
          <FormattedMessage
            id={props.title || "sdasd"}
            defaultMessage={props.title}
          />
        </span>
      </p>
    </div>
  );
};

export default TitleSection;
