import React from "react";
import BannerImage from "../../assets/img/home/banner.jpg";
import { Link } from "react-router-dom";
import Form from "./components/Form";

const LoginPage = () => {
  return (
    <section className="relative bg-gradient-to-r h-screen text-white overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-2xl ">
        <img
          src={BannerImage}
          alt="BannerImage - gymSmart"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,.7)] backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 grid grid-cols-2 items-center h-screen max-w-screen-2xl w-11/12 mx-auto">
        <div className=""> pasdasdasdasd</div>
        <div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
