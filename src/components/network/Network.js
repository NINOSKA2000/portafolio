import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialMedia } from "./data";
import TitleSection from "../utils/titleSection";
import "./network.scss";
import perfil from "../../assets/perfil.jpeg";
import ContactUs from "./form/form";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FormattedMessage } from "react-intl";

function Network() {
  return (
    <>
              <TitleSection
        title="social-media-title-white"
        tipoTitle="global.title.singular"
      />


      <section className="section-social">
        <div className="social-photo">
          <img src={perfil} alt="Natalia espinoza " />
        </div>

        <div className="section-contact">
          <div className="section-contact-message">
            <FormattedMessage
              id="social-media-description"
              defaultMessage="message"
            />
          </div>

          <ContactUs />

          <TitleSection
            title="social-media-title-white"
            tipoTitle="social-media-title-green"
          />
          <div className="social-icons">
            {socialMedia.map((media, ind) => (
              <div key={ind} className="social-icons_box">
                <a
                  className="social-icons_box-icon"
                  href={media.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={media.icon} size="2x" />
                </a>
                <span className="social-icons_box-title">{media.name}</span>
              </div>
            ))}
          </div>

          <div className="container-wattsap">
            <a
              className="social-wattsap"
              href="https://api.whatsapp.com/send?phone=57972354728"
              target="_black"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Network;
