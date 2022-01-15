import React from "react";

// import perfil from "../../assets/perfil.jpeg";

import cvEspañol from "./../../assets/Documents/cv-natalia-español.pdf";
import cvEnglish from "./../../assets/Documents/cv-natalia-english.pdf";
import "./about.scss";
import ButtonLink from "./../utils/buttonLink";




function About() {
  return (
    <>
      <section className="about">

        <ButtonLink
          className="about-download"
          text="about-download"
          default="Download CV"
          href={cvEspañol}
          cvEspañol={cvEspañol}
          cvEnglish={cvEnglish}
          download={cvEspañol}
          target="_blank" />
       

      </section>
    </>
  );
}

export default About;
