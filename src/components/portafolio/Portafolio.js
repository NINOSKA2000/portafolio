import React ,{useState}from "react";

// import { listPortafolio } from "./components/data";
import ButtonFilter from "../utils/buttonFilter";
// import ProyectoLogo from "../../assets/imagen.svg";

import "./portafolio.scss";
import TitleSection from "../utils/titleSection";

import { proyect } from './components/dataProyect';
import CardProyect from "./card-proyect/CardProyect";


const Portafolio = () => {
  const [filter, setFilter] = useState( proyect  );

  const getFiltros = (arreglo) => {
    const setObj = new Set();
    // const all=["all"];
    return  proyect.reduce((arreglo, item) => {
      if (!setObj.has(item.filter)) {
        setObj.add(item.filter, item);
        arreglo.push( item);
      }
      return arreglo;
    }, []);
  };

  const handleFilter = (palabra) => {
    const nuevo = proyect.filter((item) => item.filter === palabra);
    if (palabra === "portafolio-all-filter") {
      setFilter(proyect);
    } else {
      setFilter(nuevo);
    }
  };

  return (

    <>
    <section className="portafolio">
      <TitleSection
        title="portafolio-title"
        tipoTitle="global.title.singular"
      />

       <div className="portafolio-filters">
       <ButtonFilter
            key={"all"}
            text="+"
            evento={() => handleFilter("portafolio-all-filter")}
            />

        {getFiltros(proyect).map((item, ind) => (
          <ButtonFilter
            key={ind}
            text={item.filter}
            evento={() => handleFilter(item.filter)}
          />
        ))}
      </div>
 
      <section id="proyect" className="proyect">
        <div className="container">
          <div className="container-proyectos">

            {filter.filter((item) => item.id !== 0).map((proyecto) => {
              return (
                <CardProyect
                  key={proyecto.id}
                  name={proyecto.name}
                  github={proyecto.github}
                  demo={proyecto.demo}
                  lenguage={proyecto.lenguage}
                  image={proyecto.image}
                />
              );
            })}
          </div>
        </div>
         </section>
    </section>
 
  </>

  );
};

export default Portafolio;
