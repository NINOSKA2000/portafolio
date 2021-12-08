import React from "react";

import cv from './../../assets/Documents/HV_ChristianAndres_Desarrollador.pdf'

import './about.scss'

import Perfil from "./components/Perfil";
import Descripcion from "./components/Descripcion";
import ButtonLink from "./../utils/buttonLink";

const About = () => {
  return (
    <>
      <section className="about">
        <Perfil />
        <div className="about-info">
          <Descripcion />
          <ButtonLink text="about-download" default="Download CV" href={cv} download={cv} target="_blank"/>
        </div>
      </section>
    </>
  );
};

export default About;
