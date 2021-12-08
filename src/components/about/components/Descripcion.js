import React from "react";

import { FormattedMessage } from "react-intl";

const Descripcion = () => {
  return (
    <div>
      <p className="about-info_name">
        <FormattedMessage id="about-name" defaultMessage="about-name" />
        <span>Christian</span>
      </p>
      <p className="about-info_resume">
        <FormattedMessage id="about-country" defaultMessage="about-country" />
      </p>
      <p className="about-info_description">
        <FormattedMessage
          id="about-experince"
          defaultMessage="about-experince"
        />
      </p>
      <p className="about-info_contact">
        <FormattedMessage id="about-invited" defaultMessage="about-invited" />
      </p>
    </div>
  );
};

export default Descripcion;
