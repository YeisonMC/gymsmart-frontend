import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../context/AuthContext";
import ImagePerfil from "../../../assets/img/home/perfil.jpg";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LabelForm from "../components/profile/LabelForm";
import InputForm from "../components/profile/InputForm";

const Profile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    contrasena: "",
    fecha_nacimiento: "",
    genero: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        nombre: user.nombre,
        apellido: user.apellido,
        email: user.email,
        contrasena: user.contrasena,
        fecha_nacimiento: user.fecha_nacimiento.split("T")[0] || "",
        // fecha_nacimiento: user.fecha_nacimiento,
        genero: user.genero,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3000/gym/smart/usuarios/api/put/editar-usuarios/${user.id_usuario}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Error al actualizar el usuario");
      }

      const updatedUser = await response.json();
      // alert("Perfil actualizado con éxito");
      console.log("Usuario actualizado:", updatedUser);
      toast.success("Actualización exitosa", {
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
      updateUser(updatedUser);
    } catch (error) {
      alert("Error al actualizar el perfil: " + error.message);
    }
  };

  console.log(user?.id_usuario);
  return (
    <section className="mt-8 max-w-screen-2xl w-11/12 mx-auto h-screen">
      <h1 className="font-bold text-3xl text-[#262628]">Perfil</h1>
      <div className="flex gap-10 my-2">
        {/* <p>Cambia tu foto de perfil y edita tu informacion. </p> */}
        <div className="shadow-[rgba(0,_0,_0,_0.18)_0px_3px_6px] py-4 rounded-md">
          <h1 className="mb-2 text-center text-2xl font-medium">
            {user?.nombre} {user?.apellido}
          </h1>
          <img src={ImagePerfil} alt="" className="rounded-full mx-auto" />
          <div className="text-center w-[60%] mt-4 mx-auto bg-[#F1F4FD] rounded-md border-2 border-[#E0E3ED] py-3">
            {/* <inp type="file">Cambiar Foto</inp> */}
            {/* <a href="">Cambiar Foto</a> */}
            {/* <input type="file" /> */}
            <span>JPG o PNG</span>
            <p>
              Sube un nuevo avatar. La imagen se redimensionará automáticamente.
            </p>
            <p className="mt-1">
              El tamaño máximo es de <b>2Mb</b>
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-[650px] shadow-[rgba(0,_0,_0,_0.18)_0px_3px_6px] p-4  rounded-md"
        >
          <h1 className="font-bold text-3xl text-[#262628]">Editar Perfil</h1>
          <p className="mb-2">
            Cambia tu foto de perfil y edita tu informacion.
          </p>
          <div className="flex gap-x-10 mb-2">
            <div className="w-full">
              <LabelForm>Nombre</LabelForm>
              {/* <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          /> */}
              <InputForm
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                maxLength={15}
              ></InputForm>
            </div>
            <div className="w-full">
              <LabelForm>Apellidos</LabelForm>
              <InputForm
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
              ></InputForm>

              {/* <input
                  type="text"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                /> */}
            </div>
          </div>
          <div className="flex gap-x-10 my-4">
            <div className="w-full">
              <LabelForm>Correo</LabelForm>
              <InputForm
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              ></InputForm>
              {/* <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            /> */}
            </div>

            <div className="w-full">
              <LabelForm>Contraseña</LabelForm>
              <InputForm
                type="password"
                name="contrasena"
                value={formData.contrasena}
                onChange={handleChange}
                readOnly
                disabled
              ></InputForm>
              {/* <input
              type="password"
              name="contrasena"
              value={formData.contrasena}
              onChange={handleChange}
            /> */}
            </div>
          </div>

          <div className="flex gap-x-10 mb-2">
            <div className="w-full">
              <LabelForm>Fecha de Nacimiento</LabelForm>
              <InputForm
                type="date"
                name="fecha_nacimiento"
                value={formData.fecha_nacimiento}
                onChange={handleChange}
              ></InputForm>
              {/* <input
              type="text"
              name="fecha_nacimiento"
              value={formData.fecha_nacimiento}
              onChange={handleChange}
            /> */}
            </div>
            <div className="w-full">
              <LabelForm>Género</LabelForm>
              <select
                name="genero"
                value={formData.genero}
                onChange={handleChange}
                className="w-full border-[1.9px] border-[#d9d9da] h-12 px-2 rounded-lg focus:border-[#AEAFB2] focus:outline-none focus:ring-[#AEAFB2] font-normal transition duration-500"
              >
                <option disabled value="">
                  Selecciona un género
                </option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
              </select>
              {/* <InputForm
                type="text"
                name="genero"
                value={formData.genero}
                onChange={handleChange}
              ></InputForm> */}
              {/* <input
              type="text"
              name="genero"
              value={formData.genero}
              onChange={handleChange}
            /> */}
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#262628] text-white mt-2 px-4 py-3 rounded-lg"
          >
            Actualizar Perfil
          </button>
        </form>
      </div>
    </section>
  );
};

export default Profile;
