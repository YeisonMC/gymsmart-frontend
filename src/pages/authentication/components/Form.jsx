import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../context/AuthContext";

const Form = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      contrasena: contrasena,
    };

    try {
      const result = await axios.post(
        // "http://localhost:3000/gym/smart/usuarios/api/post/usuarios/login",
        "https://gymsmart-backend.onrender.com/gym/smart/usuarios/api/post/usuarios/login",
        data
      );
      console.log(result.data);
      login(result.data.user);
      toast.success("Inicio de sesión exitoso. Redirigiendo...", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
      setTimeout(() => {
        navigate("/user/", { replace: true });
      }, 2000);
    } catch (error) {
      toast.dismiss();
      toast.error("Credenciales no válidas. Por favor, intente de nuevo.", {
        position: "top-right",
        autoClose: 2300,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
      console.log(error);
    }
  };

  return (
    <>
      <form
        className="w-full max-w-screen-sm px-4 py-10 bg-white backdrop-blur-lg  md:mx-0 rounded-xl sm:p-10"
        onSubmit={handleLogin}
      >
        <div className="px-8 mx-auto">
          <div className="mt-5">
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              E-mail
            </label>
            <input
              className="text-black border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              contrasena
            </label>
            <input
              className="text-black border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="text"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </div>
          <div className="text-right mb-4">
            <a
              className="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer"
              href="#"
            >
              Forgot Password?
            </a>
          </div>

          <div className="mt-5">
            <button
              className="py-2 px-4 bg-color-rojo   text-white w-full transition ease-in duration-300 text-center font-semibold shadow-md rounded-lg"
              type="submit"
            >
              Iniciar sesión
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b md:w-1/4"></span>
            <a
              className="text-xs text-gray-500 uppercase  hover:underline"
              href="#"
            >
              or sign up
            </a>
            <span className="w-1/5 border-b md:w-1/4"></span>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
