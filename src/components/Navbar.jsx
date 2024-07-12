import React from "react";
import { Link } from "react-router-dom";
import imagen1 from "../assets/images/imggym2.png";
import imagen2 from "../assets/images/gym4.png";

const Navbar = () => {
  let Links = [
    { name: "ACERCA DE", link: "/" },
    { name: "SERVICIOS", link: "/" },
    { name: "PRECIOS", link: "/" },
    { name: "LOGIN", link: "/" },
    { name: "REGISTRARME", link: "/" },
  ];
  return (
    <div className="absolute z-20 text-white ">
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-transparent py-4 md:px-10 px-7">
          <div
            className="font-bold text-2x1 cursor-pointer flex items-center font-[Poppind]
          text-white-800"
          >
            <span className="text-3x1 text-blue-800 mr-1 pt-2">
              <ion-icon name="barbell-outline"></ion-icon>
            </span>
            GYM SMART
          </div>
          <ul className="md:flex max-md:hidden md:items-center">
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl">
                <a
                  href={link.link}
                  className="text-white-800 hover:text-gray-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
  /* return (
    <header className="absolute z-20 flex gap-5 bg-black w-full py-3">
      <Link to="/" className="text-white">
        Header
      </Link>
      <Link to="/login" className="text-white">
        Login
      </Link>
    </header>
  );
  // return <div className="absolute z-10 text-white">Navbar</div>;
};*/
};
export default Navbar;
