import React from "react";
import Mancuernas from "../../assets/img/home/mancuernas.png";
import Cardio from "../../assets/img/home/cardio.png";
import Meditacion from "../../assets/img/home/meditacion.png";
import Peso from "../../assets/img/home/peso.png";
import LevantamientoDePesas from "../../assets/img/home/levantamiento-de-pesas.png";

const Programs = () => {
  return (
    <section className="mt-8">
      <div className="text-center ">
        <h1 className="text-white">Nuestros programas</h1>
        <h1 className="my-2 uppercase text-white font-bold text-4xl">
          Construye tu mejor cuerpo
        </h1>
      </div>
      <div className="mt-14 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        <div className="py-4 px-8 hover:bg-[#83161A] rounded-md mx-auto transition-all duration-500 group flex flex-col justify-between">
          <div>
            <img
              src={Mancuernas}
              alt="Mancuernas - GYM Smart"
              className="w-14 bg-[#8B958A] rounded-full p-1"
            />
            <h1 className="py-4 font-semibold text-lg text-white">
              Flexionar el músculo
            </h1>
            <p className=" text-[#AEAFB2]">
              Crear tensión que hace que las liberaciones musculares se reduzcan
              o contraigan temporalmente.
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="mt-4 size-6 fill-white group-hover:ml-[90%] transition-all duration-1000"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="py-4 px-8 hover:bg-[#83161A] rounded-md mx-auto transition-all duration-500 group flex flex-col justify-between">
          <div>
            <img
              src={Cardio}
              alt="Cardio - GYM Smart"
              className="w-14 bg-[#8B958A] rounded-full p-1"
            />
            <h1 className="py-4 font-semibold text-lg text-white">
              Ejercicio Cardio
            </h1>
            <p className=" text-[#AEAFB2]">
              Ejercita el ritmo cardiaco y lo mantiene elevado durante un
              periodo prolongado de tiempo.
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="mt-4 size-6 fill-white group-hover:ml-[90%] transition-all duration-1000"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="py-4 px-8 hover:bg-[#83161A] rounded-md mx-auto transition-all duration-500 group flex flex-col justify-between">
          <div>
            <img
              src={Meditacion}
              alt="Meditacion - GYM Smart"
              className="w-14 bg-[#8B958A] rounded-full p-1"
            />
            <h1 className="py-4 font-semibold text-lg text-white">
              Yoga Básico
            </h1>
            <p className=" text-[#AEAFB2]">
              Esta es la técnica de respiración más común que encontrarás en el
              yoga.
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="mt-4 size-6 fill-white group-hover:ml-[90%] transition-all duration-1000"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="py-4 px-8 hover:bg-[#83161A] rounded-md mx-auto transition-all duration-500 group flex flex-col justify-between">
          <div>
            <img
              src={LevantamientoDePesas}
              alt="LevantamientoDePesas - GYM Smart"
              className="w-14 bg-[#8B958A] rounded-full p-1"
            />
            <h1 className="py-4 font-semibold text-lg text-white">
              Levantamiento de pesas
            </h1>
            <p className=" text-[#AEAFB2]">
              Intenta levantar el máximo peso de una barra cargada con placas de
              peso.
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="mt-4 size-6 fill-white group-hover:ml-[90%] transition-all duration-1000"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Programs;
