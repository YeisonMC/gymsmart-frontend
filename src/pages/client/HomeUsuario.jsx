import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ImagePerfil from "../../assets/img/home/perfil.jpg";
import SeccionCard from "./components/home/SeccionCard";
import News from "./components/home/News";
import "../../assets/css/Navbar.css";
import Options from "./components/home/Options";
import UserWelcome from "./components/home/UserWelcome";
import UserBanner from "./components/home/UserBanner";

const HomeUsuario = () => {
  // 2xl:bg-violet-100 xl:bg-red-100 lg:bg-blue-100 md:bg-green-100 sm:bg-yellow-200
  return (
    <>
      <section className="mt-8 max-md:mt-2 max-w-screen-2xl w-11/12 mx-auto">
        <UserWelcome />
        <div className=" flex gap-[3%] my-6 max-md:my-3 max-xl:flex-col ">
          {/* max-xl:w-[60%] */}
          <div className="w-[67%] max-xl:w-full ">
            <UserBanner />
            <Options />
          </div>
          {/* max-xl:w-[30%] */}
          <div className="w-[30%] max-xl:w-full max-md:mt-5 bg-[#f2f3f8] rounded-2xl shadow-lg">
            <News />
          </div>
        </div>
        <SeccionCard />
      </section>
    </>
  );
};

export default HomeUsuario;
