import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ImagePerfil from "../../assets/img/home/perfil.jpg";
import SeccionCard from "./components/home/SeccionCard";
import Imagen from "../../assets/svg/ejercicio2.svg";
import News from "./components/home/News";
import "../../assets/css/Navbar.css";
import Options from "./components/home/Options";

const HomeUsuario = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <>
      <section className="mt-8 px-8 mx-auto">
        <div className="flex justify-between">
          <div>
            <h1 className="text-4xl font-bold">Hola, {user?.nombre}</h1>
            <p className="text-">Bienvenid@ de vuelta</p>
          </div>
          <div>
            <img
              className="rounded-md w-14 cursor-pointer"
              src={ImagePerfil}
              alt=""
            />
          </div>
        </div>
        <div className="flex gap-[3%] my-6">
          <div className="w-[67%]">
            <div className="bg-[#f2f3f8] h-[330px] w-full grid grid-cols-2 rounded-2xl shadow-lg">
              <div className="px-4 my-auto">
                <h1 className="text-3xl  font-bold leading-7">
                  Transforma tu vida, entrena con nosotros
                </h1>
                <p className="text-[#262628] my-2 2xl:w-[80%] xl:w-[100%]">
                  En nuestro gimnasio, te ayudaremos a alcanzar tus metas de
                  fitness y bienestar a través de programas personalizados y un
                  ambiente virtual motivador e interactivo.
                </p>
                <a
                  href="#"
                  className="2xl:mt-3 mt-2 bg-[#262628] text-gray-200 inline-flex items-center gap-3 px-4 py-3 rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                    <path
                      fillRule="evenodd"
                      d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>Calendario</p>
                </a>
              </div>
              <img
                className="2xl:w-[80%] xl:w-[100%] p-4 m-auto"
                src={Imagen}
                alt=""
              />
            </div>
            <Options />
          </div>
          <div className="w-[30%] bg-[#f2f3f8] rounded-2xl shadow-lg">
            <News />
          </div>
        </div>
        <SeccionCard />

        {/* <button
          className="bg-color-rojo text-white py-2 px-2 rounded-md"
          onClick={handleLogout}
        >
          Cerrar Sesion
        </button> */}
      </section>
    </>
  );
};

export default HomeUsuario;
