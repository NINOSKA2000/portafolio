import React from "react";
import "./card.scss";


 const  CardProyect =({ name, github, demo, lenguage, image }) => {
  return (
    <section className="cardProyect">
      <div className="front">
        <img src={image} alt={name}></img>
      </div>
      <div className="back">
        <h3>{name}</h3>
        <div className="container-links">
          <a href={github} target="_blank" rel="noreferrer" className="main-contenedor-button">
            Gituhb 
          </a>
          <a href={demo} target="_blank" rel="noreferrer" className="main-contenedor-button">
            Demo 
          </a>
        </div>
        <p>{lenguage}</p>
      </div>
    </section>
  );
}

export default CardProyect;
