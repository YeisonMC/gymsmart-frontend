import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Navbar />
      <section className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
};

export default App;
