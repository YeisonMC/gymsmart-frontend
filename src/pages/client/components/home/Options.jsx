import React from "react";

const Options = () => {
  return (
    <section className="mt-4 grid grid-cols-3 gap-32">
      <div className="bg-[#f2f3f8] rounded-md flex items-center shadow-lg px-4 py-4 gap-3 cursor-pointer hover:scale-105 transition duration-500 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="bg-[#bebec0] rounded-lg w-12 p-2 fill-black"
        >
          <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
        </svg>
        <div>
          <h1 className="text-lg font-semibold">En directo</h1>
          <p className="text-sm">12 directos</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-8 ml-4"
        >
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="bg-[#f2f3f8] rounded-md flex justify-center items-center shadow-lg px-4 py-2">
        <div>
          <h1>Próximamente</h1>
          <p>12 vistos</p>
        </div>
        flecha
      </div>
      <div className="bg-[#f2f3f8] rounded-md flex justify-center items-center shadow-lg px-4 py-2">
        <div>
          <h1>Terminado</h1>
          <p>12 vistos</p>
        </div>
        flecha
      </div>
    </section>
  );
};

export default Options;
