import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ImagePerfil from "../../assets/img/home/perfil.jpg";
import SeccionCard from "./components/home/SeccionCard";

const HomeUsuario = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <>
      <section className="mt-2 max-w-screen-2xl mx-auto">
        {/* <h1>Bienvenid@, {user.nombre} </h1> */}
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-bold">Hola, {user?.nombre}</h1>
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
        <div className="flex gap-[4%]">
          <div className="w-[66%] bg-blue-200">
            <h1>A buena hora</h1>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDDEkHu4GFkKrUvS1Pd-08La22a2ZZgt6sKg&s"
              alt=""
            />
          </div>
          <div className="w-[30%] bg-red-200">
            <h1>Noticias</h1>
          </div>
        </div>
        <SeccionCard />
        <div className=""></div>
        {/* <h1>{user?.nombre}</h1> */}
        {/* <h1>{user?.apellido}</h1> */}
        <button
          className="bg-color-rojo text-white py-2 px-2 rounded-md"
          onClick={handleLogout}
        >
          Cerrar Sesion
        </button>
      </section>
    </>
  );
};

export default HomeUsuario;
