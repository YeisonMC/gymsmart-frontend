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
      <div className="flex items-center justify-center h-screen">
        <Form />
      </div>
    </section>
  );
};

export default LoginPage;
