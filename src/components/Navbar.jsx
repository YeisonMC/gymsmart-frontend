import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
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
};

export default Navbar;
