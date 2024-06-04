import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../context/AuthContext";

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
      alert("Perfil actualizado con éxito");
      console.log("Usuario actualizado:", updatedUser);
      updateUser(updatedUser);
    } catch (error) {
      alert("Error al actualizar el perfil: " + error.message);
    }
  };

  console.log(user?.id_usuario);
  return (
    <section className="ml-[18em]">
      <h1>Perfil</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Apellido:
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            name="contrasena"
            value={formData.contrasena}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Fecha de Nacimiento:
          <input
            type="text"
            name="fecha_nacimiento"
            value={formData.fecha_nacimiento}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Género:
          <input
            type="text"
            name="genero"
            value={formData.genero}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Actualizar Perfil</button>
      </form>
    </section>
  );
};

export default Profile;
