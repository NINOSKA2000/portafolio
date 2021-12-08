import React from "react";

import { FormattedMessage } from "react-intl";
import { listSkills } from "./data";

const ListItem = () => {
  return (
    <div className="services-grid">
      {listSkills.map((item, index) => (
        <div key={index} className="services-grid_box">
          <div className="services-grid_box--img">
            <img src={item.src} alt={item.alt} />
          </div>
          <div className="services-grid_box--title">
            <FormattedMessage id={item.name} defaultMessage={item.name} />
          </div>
          <div className="services-grid_box--description">
            <FormattedMessage
              id={item.description}
              defaultMessage={item.description}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListItem;
