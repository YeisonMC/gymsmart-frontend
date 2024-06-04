import React from "react";
import { Route, Routes } from "react-router-dom";
import UserNavbar from "../components/auth/UserNavbar";
import HomeUsuario from "../pages/client/HomeUsuario";
import NotFound from "../pages/error/NotFound";
import MyCurses from "../pages/client/curses/MyCurses";
import Profile from "../pages/client/profile/Profile";

const RouterAuth = () => {
  return (
    <>
      <UserNavbar />
      <Routes>
        <Route path="/" element={<HomeUsuario />} />
        <Route path="/mycurses" element={<MyCurses />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RouterAuth;
