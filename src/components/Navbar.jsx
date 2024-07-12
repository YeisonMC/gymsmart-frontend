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
            <Link
              to={""}
              className="text-lg hover:text-gray-300 hover:scale-105 transition-all duration-500"
            >
              Sobre nosotros
            </Link>
            <Link
              to={""}
              className="text-lg hover:text-gray-300 hover:scale-105 transition-all duration-500"
            >
              Servicios
            </Link>
            <Link
              to={""}
              className="text-lg hover:text-gray-300 hover:scale-105 transition-all duration-500"
            >
              Precios
            </Link>
            <Link
              to={""}
              className="text-lg hover:text-gray-300 hover:scale-105 transition-all duration-500"
            >
              Contactanos
            </Link>
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
