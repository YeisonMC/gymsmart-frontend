import { useState } from "react";

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      nombre: "",
      correo: "",
      mensaje: "",
    });
  };

  return { formData, handleChange, resetForm };
};
