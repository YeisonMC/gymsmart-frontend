import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const CustomerHomePage = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <div>
      <p>Bienvenido Usuarioss</p>
      <h1>{user?.nombre}</h1>
      <h1>{user?.apellido}</h1>
      <button onClick={handleLogout}>Cerrar Sesion</button>
    </div>
  );
};

export default CustomerHomePage;
