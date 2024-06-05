import React, { useState, useLayoutEffect } from "react";
import { Route, Routes } from "react-router-dom";
import UserNavbar from "../components/auth/UserNavbar";
import HomeUsuario from "../pages/client/HomeUsuario";
import NotFound from "../pages/error/NotFound";
import MyCurses from "../pages/client/curses/MyCurses";
import Profile from "../pages/client/profile/Profile";
import UserFooter from "../components/auth/UserFooter";

const RouterAuth = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useLayoutEffect(() => {
    function handleWindowResize() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 768) {
        setIsNavbarOpen(true);
      } else {
        setIsNavbarOpen(false);
      }
    }

    window.addEventListener("resize", handleWindowResize);
    handleWindowResize(); // Llamada inicial

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <UserNavbar
        isNavbarOpen={isNavbarOpen}
        setIsNavbarOpen={setIsNavbarOpen}
      />
      <section className="ml-[17em] max-md:ml-0">
        <div className="hidden max-md:block">
          <button onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
            {isNavbarOpen ? "Cerrar" : "Abrir"}
          </button>
        </div>
        <Routes>
          <Route path="/" element={<HomeUsuario />} />
          <Route path="/mycurses" element={<MyCurses />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <UserFooter />
      </section>
    </>
  );
};

export default RouterAuth;
