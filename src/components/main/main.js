import React from "react";
import "./main.scss";
import About from "../about/About";

// import MainTyped from './mainTyped';
import { FormattedMessage } from "react-intl";
import ViewParticles from "./particles";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Main = () => {
  return (
    <section className="home">
      <div className="main" id="main">
        <ViewParticles />
        <div className="main-contenedor">
          <p className="main-contenedor-title">
            <FormattedMessage id="main-greting" />
          </p>

          <div className="name">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Natalia Espinoza ")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Front End Developer ")
                  .start();
              }}
              options={{
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <p className="main-contenedor-text">
            {" "}
            <FormattedMessage id="main-description" />
          </p>

          <div className="main-contenedor-buttons ">
            <Link
              className="main-contenedor-button"
              to="portafolio"
              smooth={true}
              duration={3000}
              spy={true}
            >
              <FormattedMessage id="main-button" />
            </Link>
          </div>
         
          <About />

        </div>

 

      </div>
    </section>
  );
};

export default Main;
