import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  //   useEffect(() => {
  //     const storedUser = localStorage.getItem("user");
  //     console.log("Datos del usuario en localStorage:", storedUser);
  //   }, []);

  //   const storedUser = localStorage.getItem("user");

  //   if (storedUser) {
  //     return children;
  //   } else {
  //     return <Navigate to="/login" replace />;
  //   }
  // };
  // console.log(user);

  const storedUser2 =
    localStorage.getItem("user") || console.log("no estas logeado");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log("Datos del usuario en localStorage:", storedUser);
  }, []);

  if (storedUser2) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
