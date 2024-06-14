import React, { useState, useLayoutEffect } from "react";
import { Route, Routes } from "react-router-dom";
import UserNavbar from "../components/auth/UserNavbar";
import HomeUsuario from "../pages/client/HomeUsuario";
import NotFound from "../pages/error/NotFound";
import MyCurses from "../pages/client/curses/MyCurses";
import Profile from "../pages/client/profile/Profile";
import UserFooter from "../components/auth/UserFooter";
import IdCurses from "../pages/client/curses/IdCurses";
import Subscriptions from "../pages/client/subscriptions/Subscriptions";

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
    handleWindowResize();

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
        <div className="hidden max-md:mt-4 max-md:block max-w-screen-2xl w-11/12 mx-auto">
          <p className="hidden absolute z-40">Abrir</p>
          <a
            className="cursor-pointer"
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-9 "
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <Routes>
          <Route path="/" element={<HomeUsuario />} />
          <Route path="/mycurses" element={<MyCurses />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/curses/:id" element={<IdCurses />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <UserFooter />
      </section>
    </>
  );
};

export default RouterAuth;
