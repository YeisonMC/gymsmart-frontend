import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/authentication/LoginPage";
import NotFound from "../pages/error/NotFound";
import Navbar from "../components/Navbar";

const RouterApp = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RouterApp;
