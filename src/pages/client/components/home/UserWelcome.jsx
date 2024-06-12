import React, { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import ImagePerfil from "../../../../assets/img/home/perfil.jpg";

const UserWelcome = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="flex justify-between">
      <div>
        <h1 className="text-4xl font-bold">
          <span className="max-md:block">Hola,</span> {user?.nombre}
        </h1>
        <p className="text-">Bienvenid@ de vuelta</p>
      </div>
      <div>
        <img
          className="rounded-md w-14 cursor-pointer"
          src={ImagePerfil}
          alt=""
        />
      </div>
    </nav>
  );
};

export default UserWelcome;
