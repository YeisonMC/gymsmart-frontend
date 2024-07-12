import React from "react";

const Suscripcions = () => {
  return (
    <section className="relative bg-gradient-to-r h-screen text-white overflow-hidden">
      <div className="  text-center    ">
        <h1 className="text-5xl font-bold leading-tight mb-4 uppercase">
          Precios
        </h1>
        <h1 className="text-4xl font-bold leading-tight mb-4 uppercase">
          Nuestros planes Especiales
        </h1>
      </div>
      <div className="w-100%] max-lg:w-[90%] max-sm:w-[100%] grid grid-cols-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-1 max-md:mt-10">
        <div className="px-4 max-md:px-0">
          <h1 className="font-semibold text-base text-gray-100 uppercase">
            PAQUETE BASICO
          </h1>
          <div className="flex flex-col gap-1 mt-4 text-gray-400 text-sm">
            <a href="">Flex Muscle</a>
            <a href="">Cardio Exercise</a>
            <a href="">Basic Yoga</a>
            <a href="">Weigth Lading</a>
          </div>
        </div>
        <div className="px-4 max-md:px-0">
          <h1 className="font-semibold text-base text-gray-100 uppercase">
            PAQUETE PREMIUN
          </h1>
          <div className="flex flex-col gap-1 mt-4 text-gray-400 text-sm">
            <a href="">Flex Muscle</a>
            <a href="">Cardio Exercise</a>
            <a href="">Basic Yoga</a>
            <a href="">Weigth Lading</a>
          </div>
        </div>
        <div className="px-4 max-md:px-0">
          <h1 className="font-semibold text-base text-gray-100 uppercase">
            PAQUETE DIAMANTE
          </h1>
          <div className="flex flex-col gap-1 mt-4 text-gray-400 text-sm">
            <a href="">Flex Muscle</a>
            <a href="">Cardio Exercise</a>
            <a href="">Basic Yoga</a>
            <a href="">Weigth Lading</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suscripcions;
