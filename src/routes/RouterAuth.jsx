import React from "react";
import { Route, Routes } from "react-router-dom";
import UserNavbar from "../components/auth/UserNavbar";
import HomeUsuario from "../pages/client/HomeUsuario";
import NotFound from "../pages/error/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "../pages/authentication/LoginPage";

const RouterAuth = () => {
  return (
    <>
      <UserNavbar />
      <Routes>
        <Route path="/" element={<HomeUsuario />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RouterAuth;
