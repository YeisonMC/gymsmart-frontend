import React from "react";
import Banner from "./components/Banner";
import Programs from "./components/Programs";
import About from "./components/About";
import Suscripcions from "./components/Suscripcions";
import Contact from "./components/Contact";

const HomePage = () => {
  return (
    <>
      {/* bg-color-background */}
      <section className="bg-[#0e0e0e]">
        <Banner />
        <nav className="max-w-screen-xl w-11/12 mx-auto">
          <Programs />
          <About />
          <Suscripcions />
          <Contact />
        </nav>
      </section>
    </>
  );
};

export default HomePage;
