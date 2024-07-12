import React from "react";
import CountUpNumber from "../../components/CountUpNumber";
import "../../assets/css/Navbar.css";
import imagen2 from "../../assets/images/gym4.png";

const About = () => {
  return (
    <nav>
      <div className="grid grid-cols-2 ">
        <div className="">
          <div class="container">
            <img className="gym2 relative z-20 px-6" src={imagen2} alt="" />
            <div class="recortado"></div>
          </div>
        </div>
        <div className="text-white">
          <span>La mejor temporada</span>
          <h1 className="text-5xl font-bold my-4">¿Por qué elegirnos?</h1>
          <p>
            Elige tu clase favorita y empieza ya. Recuerda, el único
            entrenamiento malo es el que no hiciste.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-y-8">
            <div className=" ">
              <CountUpNumber
                value={156}
                duration={2}
                prefix="+"
                className="text-3xl mx-auto"
              />
              <span>Miembros</span>
            </div>
            <div className="">
              <CountUpNumber
                value={50}
                duration={2}
                prefix="+"
                className="text-3xl"
              />
              <span>Mejores entrenadores</span>
            </div>
            <div className="">
              <CountUpNumber
                value={25}
                duration={2}
                prefix="+"
                className="text-3xl"
              />
              <span>Programas</span>
            </div>
            <div className="">
              <CountUpNumber
                value={100}
                duration={2}
                prefix="+"
                className="text-3xl"
              />
              <span>Premios</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default About;
