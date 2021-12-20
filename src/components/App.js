import React from "react";

import HeaderMenu from "./header/header";
import Main from './main/main';
import About from './about/About'
// import Skills from './skills/Skills'
import Portafolio from './portafolio/Portafolio'
// import Blog from './blog/Blog'
import Footer from "./footer/footer";

const App = () => {
  return (
    <>
      <HeaderMenu />
			<Main/>
			{/* <About/> */}
			{/* <Skills/> */}
			<Portafolio />
			{/* <Blog /> */}
			<Footer />
    </>
  );
};

export default App;
