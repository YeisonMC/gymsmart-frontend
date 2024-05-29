import React from "react";
import Banner from "./components/Banner";
import Programs from "./components/Programs";

const HomePage = () => {
  return (
    <>
      <section className="bg-color-background">
        <Banner />
        <nav className="max-w-screen-xl w-11/12 mx-auto">
          <Programs />
        </nav>
      </section>
    </>
  );
};

export default HomePage;
