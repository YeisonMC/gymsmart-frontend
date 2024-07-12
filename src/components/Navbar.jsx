import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="fixed z-20 bg-[#6b070a] text-white w-full ">
        <div className="flex items-center justify-between max-w-screen-2xl w-11/12 mx-auto py-5">
          <Link to={"/"} className="font-bold text-2xl">
            GYM SMART
          </Link>
          <div className="flex items-center space-x-8 max-lg:hidden">
            <a
              href="#"
              className="text-lg hover:text-gray-300 hover:scale-105 transition-all duration-500"
            >
              Sobre nosotros
            </a>
            <a
              href="#servicios"
              className="text-lg hover:text-gray-300 hover:scale-105 transition-all duration-500"
            >
              Servicios
            </a>
            <a
              href="#elegirnos"
              className="text-lg hover:text-gray-300 hover:scale-105 transition-all duration-500"
            >
              Por qué elegirnos
            </a>
            <a
              href="#contactos"
              className="text-lg hover:text-gray-300 hover:scale-105 transition-all duration-500"
            >
              Contactanos
            </a>
            <Link
              to="/login"
              className="text-lg bg-black py-2 px-6 rounded-md hover:scale-105 transition duration-500 "
            >
              Ingresar
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
