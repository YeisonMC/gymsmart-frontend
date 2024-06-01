import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/authentication/LoginPage";
import { ToastContainer, Slide } from "react-toastify";
import CustomerHomePage from "./pages/client/CustomerHomePage";

const App = () => {
  return (
    <>
      <Navbar />
      <section className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/customerhomepage" element={<CustomerHomePage />} />
        </Routes>
      </section>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2300}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
        transition={Slide}
      />
    </>
  );
};

export default App;
