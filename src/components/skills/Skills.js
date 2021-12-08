import React from "react";

import "./skills.scss";

import TitleSection from "../utils/titleSection";
import ListItem from "./components/ListItem";

const Skills = () => {
  return (
    <>
      <section className="services">
        <TitleSection title="skills-title" tipoTitle="global.title.plural" />
        <ListItem />
      </section>
    </>
  );
};

export default Skills;
