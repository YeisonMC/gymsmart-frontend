import React, { useState } from "react";
import axios from "axios";
import { toast, Slide } from "react-toastify";

const RegisterForm = ({ onBackToLogin }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    contrasena: "",
    fecha_nacimiento: "",
    genero: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://gymsmart-backend.onrender.com/gym/smart/usuarios/api/post/usuarios/register",
        formData
      );
      console.log(response.data);
      toast.success("Registro exitoso. Por favor, inicie sesión.", {
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
      onBackToLogin();
    } catch (error) {
      toast.error("Error en el registro. Por favor, intente de nuevo.", {
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
      console.error(error);
    }
  };

  return (
    <form
      className="w-full max-w-screen-sm px-4 py-10 bg-white backdrop-blur-lg md:mx-0 rounded-xl sm:p-10"
      onSubmit={handleSubmit}
    >
      <h1 className="text-center text-2xl text-black font-bold mb-5">
        Registrarse
      </h1>
      <div className="px-8 mx-auto">
        {["nombre", "apellido", "email", "contrasena", "fecha_nacimiento"].map(
          (field) => (
            <div key={field} className="mb-4">
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                {field.charAt(0).toUpperCase() +
                  field.slice(1).replace("_", " ")}
              </label>
              <input
                className="text-black border rounded-lg px-3 py-2 mt-1 text-sm w-full"
                type={
                  field === "email"
                    ? "email"
                    : field === "contrasena"
                    ? "password"
                    : field === "fecha_nacimiento"
                    ? "date"
                    : "text"
                }
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
              />
            </div>
          )
        )}
        <div className="mb-4">
          <label className="font-semibold text-sm text-gray-600 pb-1 block">
            Género
          </label>
          <select
            className="text-black border rounded-lg px-3 py-2 mt-1 text-sm w-full"
            name="genero"
            value={formData.genero}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div className="mt-6">
          <button
            className="py-2 px-4 bg-color-rojo text-white w-full transition ease-in duration-300 text-center font-semibold shadow-md rounded-lg"
            type="submit"
          >
            Registrarse
          </button>
        </div>
        <div className="mt-4 text-center">
          <a
            className="text-xs text-gray-500 hover:underline cursor-pointer"
            onClick={onBackToLogin}
          >
            ¿Ya tienes una cuenta? Inicia sesión
          </a>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
