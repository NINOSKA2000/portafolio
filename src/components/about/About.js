import React from "react";

import perfil from '../../assets/perfil.jpeg'

import cv from './../../assets/Documents/HV_ChristianAndres_Desarrollador.pdf'

import './about.scss'

import ButtonLink from "./../utils/buttonLink";


const About = () => {
  return (
    <>
      <section className="about">
      <div className="about-img">
			<img src={perfil} alt="Natalia espinoza " />
      </div>

        <div className="about-info">
          {/* <Descripcion /> */}
          <ButtonLink text="about-download" default="Download CV" href={cv} download={cv} target="_blank"/>
          
        </div>

      

      </section>
    </>
  );
};

export default About;
