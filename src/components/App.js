import React from "react";

import HeaderMenu from "./header/header";
import Main from './main/main';
// import About from './about/About'
import Skills from './skills/Skills'
import Portafolio from './portafolio/Portafolio'
// import Blog from './blog/Blog'
import Footer from "./footer/footer";
import Network from "./network/Network";


const App = () => {
  return (
    <>
      <HeaderMenu />
			<Main/>
			<Portafolio />
	     	<Skills/>
			<Network/>
			<Footer />
    </>
  );
};

export default App;
