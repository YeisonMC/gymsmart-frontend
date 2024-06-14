import React from "react";
import CountUpNumber from "../../components/CountUpNumber";
import "../../assets/css/Navbar.css";

const About = () => {
  return (
    <nav className="mt-8">
      <div className="grid grid-cols-2 max-lg:grid-cols-1 max-md:flex max-md:flex-col-reverse gap-y-6">
        <div className="">
          <div class="container">
            <div class="recortado">
              <h1>asda</h1>
            </div>
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
