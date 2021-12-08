import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialMedia } from "./data";

const Icons = () => {
  return (
    <>
		<div className="footer-icons">
      {socialMedia.map((media, ind) => (
        <div key={ind} className="footer-icons_box">
          <a className="footer-icons_box-icon" href={media.url} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={media.icon} size="2x"/>
          </a >
          <span className="footer-icons_box-title">{media.name}</span>
        </div>
      ))}
		</div>
    </>
  );
};

export default Icons;
