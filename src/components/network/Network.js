import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialMedia } from "./data";
import TitleSection from "../utils/titleSection";
 import './network.scss';
 import perfil from '../../assets/perfil.jpeg';

function Network() {
  return (
    <>
            <div className="about-img">
          <img src={perfil} alt="Natalia espinoza " />
        </div>
     <TitleSection title="social-media-title-white" tipoTitle="social-media-title-green" /> 
      <div className="footer-icons">
        {socialMedia.map((media, ind) => (
          <div key={ind} className="footer-icons_box">
            <a className="footer-icons_box-icon" href={media.url} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={media.icon} size="2x" />
            </a>
            <span className="footer-icons_box-title">{media.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Network;
