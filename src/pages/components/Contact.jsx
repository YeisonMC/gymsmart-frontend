import React from "react";

const Contact = () => {
  return (
    <>
      <div className="pt-14 pb-32" id="contactos">
        <h1 className="text-white text-center">Contactanos</h1>
        <div className="flex flex-col  bg-white border-0 rounded-xl max-w-screen-md mx-auto mt-8 md:flex-0 ">
          <div className="flex-auto p-6">
            <form role="form text-left">
              <div className="mb-4">
                <input
                  aria-describedby="email-addon"
                  aria-label="Name"
                  placeholder="Name"
                  className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-[#6b070a] focus:bg-white focus:outline-none focus:transition-shadow"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <input
                  aria-describedby="email-addon"
                  aria-label="Email"
                  placeholder="Email"
                  className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-[#6b070a] focus:bg-white focus:outline-none focus:transition-shadow"
                  type="email"
                />
              </div>
              <div className="mb-4">
                <input
                  aria-describedby="password-addon"
                  aria-label="Password"
                  placeholder="Password"
                  className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-[#6b070a] focus:bg-white focus:outline-none focus:transition-shadow"
                  type="password"
                />
              </div>
              <div className="text-center">
                <button
                  className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer  hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl bg-[#6b070a]"
                  type="button"
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
