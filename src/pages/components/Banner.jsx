import React from "react";
import BannerImage from "../../assets/img/home/banner.jpg";
import { Link } from "react-router-dom";
import GymSmart1 from "../../assets/img/landing/GymSmart1.png";

const Banner = () => {
  return (
    <section className="relative bg-gradient-to-r h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={BannerImage}
          alt="BannerImage - gymSmart"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-70 "></div>
      </div>

      <div className="relative z-10 grid grid-cols-2 max-xl:grid-cols-1 items-center h-screen max-w-screen-xl w-11/12 mx-auto">
        <div>
          <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl font-bold leading-tight mb-4 uppercase">
            Bienvenido a
          </h1>
          <h1 className="text-6xl max-lg:text-5xl max-md:text-4xl  font-bold leading-tight mb-4 uppercase">
            GYM Smart
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            earum magni id voluptatem cupiditate modi inventore dolore ullam
            blanditiis, quisquam officia optio iusto, aliquid aliquam! Fuga
            harum debitis ipsam adipisci?
          </p>
          <Link className="bg-[#83161A] px-6 py-3 inline-flex gap-2 rounded-xl group">
            <p className="font-medium ">Comienzar</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 transition-transform duration-300 group-hover:translate-x-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>
        <div className="mx-auto max-lg:hidden ">
          <img src={GymSmart1} alt="GymSmart1" className="bg-shadow" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
