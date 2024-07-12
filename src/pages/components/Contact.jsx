import React from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import { useContactForm } from "../../hooks/useContactForm";

const Contact = () => {
  const { formData, handleChange, resetForm } = useContactForm();

  const sendEmail = async (e) => {
    e.preventDefault();

    toast.info("Enviando correo...");

    try {
      const result = await emailjs.sendForm(
        "service_49wzh78",
        "template_jyrguyn",
        e.target,
        "h1qEM6zh2JL5wwGkp"
      );
      toast.success("¡Correo enviado con éxito!");

      resetForm();
    } catch {
      toast.error("Hubo un error al enviar el correo.");
    }
  };

  return (
    <>
      <div className="pt-14 pb-32" id="contactos">
        <h1 className="text-white text-center text-3xl font-bold">
          Contactanos
        </h1>
        <div className="flex flex-col  bg-white border-0 rounded-xl max-w-screen-md mx-auto mt-8 md:flex-0 ">
          <div className="flex-auto p-6" onSubmit={sendEmail}>
            <form role="form text-left">
              <div className="mb-4">
                <input
                  id="nombres"
                  name="nombre"
                  type="text"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Nombre"
                  className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-[#6b070a] focus:bg-white focus:outline-none focus:transition-shadow"
                />
              </div>
              <div className="mb-4">
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  value={formData.correo}
                  onChange={handleChange}
                  placeholder="Correo"
                  className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-[#6b070a] focus:bg-white focus:outline-none focus:transition-shadow"
                />
              </div>
              <textarea
                name="mensaje"
                placeholder="Escribe"
                className="w-full px-4 py-3 max-h-36 h-24 resize-y text-black bg-white border border-gray-200 rounded-xl appearance-none placeholder:text-gray-400 focus:border-[#6b070a] focus:bg-white focus:outline-none focus:transition-shadow sm:text-sm"
                maxLength={150}
                value={formData.mensaje}
                onChange={handleChange}
                required
              ></textarea>
              <div className="text-center">
                <button
                  className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer  hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl bg-[#6b070a]"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
