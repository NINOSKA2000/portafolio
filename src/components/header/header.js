import React, { useState, useEffect } from "react";
import { hotjar } from 'react-hotjar';


import "./header.scss";

import HeaderTitle from "./components/headerTitle";
import Nav from "./components/nav";
import Idioms from "./components/idioms";
import ButtonClose from "./components/buttonClose";


const HeaderMenu = () => {


  const [open, setOpen] = useState("");
  const [close, setClose] = useState("");

  const toogleMenu = () => {
    if (open === "") {
      setOpen("show");
      setClose("close");
    } else {
      setOpen("");
      setClose("");
    }
  };

  const closeMenu = () => {
    setOpen("");
    setClose("");
  };

  const [offset, setOffset] = useState(0);


  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

 
 


  return (
    <header className={`header ${offset > 200 ? "scroll" : ""}`}>

      <HeaderTitle />
      <div className={`header-menu ${open}`}>
        <Nav event={closeMenu} />
        <Idioms />
      </div>

      <div className={`header-button ${close}`} onClick={toogleMenu}>
        <ButtonClose />
      </div>
    </header>
  );
};

export default HeaderMenu;
