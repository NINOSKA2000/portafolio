import React, { useRef, useEffect } from "react";
 import Typed from 'typed.js';
import { FormattedMessage } from "react-intl";


import "./main.scss";
const MainTyped = () => {
  const typedTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedTarget.current, {
      strings: ["Frontend developer", "Mobile developer", "Web developer"],
      startDelay: 300,
      typeSpeed: 100,
      backDelay: 300,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span className="main-contenedor-firs">
				<FormattedMessage id="main-profession"/>
        <span className="main-contenedor-typed" ref={typedTarget} />{" "}
      </span>
    </div>
  );
};

export default MainTyped;
