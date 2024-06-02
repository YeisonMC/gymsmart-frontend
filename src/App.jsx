import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { ToastContainer, Slide } from "react-toastify";
import RouterApp from "./routes/RouterApp";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import RouterAuth from "./routes/RouterAuth";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<RouterApp />} />
          <Route
            path="/user/*"
            element={
              <ProtectedRoute>
                <RouterAuth />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </AuthProvider>
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
