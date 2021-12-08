import React from "react";

import Particles from "react-tsparticles";

const ViewParticles = () => {
  const particlesInit = (main) => {};

  const particlesLoaded = (container) => {};


  return (
    <Particles
      id="tsparticles"
      width="100%"
      canvasClassName="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: false,
        background: {
          color: {
            value: "#000",
          },
        },
        interactivity: {
          events: {
            onClick: {
              enable: false,
            },
            onHover: {
              enable: false,
            },
            resize: false,
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
            bounce: false,
          },
          number: {
            density: {
              enable: false,
              value_area: 800,
            },
            value: 30,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />


  );
};

export default ViewParticles;
