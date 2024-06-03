import React from "react";

const Footer = () => {
  return (
    <footer className="bg-color-background py-6">
      <div className="max-w-screen-2xl w-11/12 mx-auto">
        <div className="flex gap-[5%] my-4 max-md:flex-col">
          <div className="w-[45%] max-lg:w-[80%] max-sm:w-[100%]">
            <h1 className="font-semibold text-base text-gray-100">GymSmart</h1>
            <div className="w-[50%] max-sm:w-[100%]">
              <p className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Eveniet
                eius libero culpa.
              </p>
              <form action="" className="mt-6 flex gap-4 items-center">
                <a href="">Tu correo</a>
                <a
                  href=""
                  className="bg-[#2f3f4a] py-2 px-4 rounded-lg text-gray-100"
                >
                  Enviar
                </a>
              </form>
            </div>
          </div>
          <div className="w-[50%] max-lg:w-[90%] max-sm:w-[100%] grid grid-cols-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-md:mt-10">
            <div className="px-4 max-md:px-0">
              <h1 className="font-semibold text-base text-gray-100 uppercase">
                Servicios
              </h1>
              <div className="flex flex-col gap-1 mt-4 text-gray-400 text-sm">
                <a href="">Flex Muscle</a>
                <a href="">Cardio Exercise</a>
                <a href="">Basic Yoga</a>
                <a href="">Weigth Lading</a>
              </div>
            </div>
            <div className="px-4">
              <h1 className="font-semibold text-base text-gray-100 uppercase">
                Precios
              </h1>
              <div className="flex flex-col gap-1 mt-4 text-gray-400 text-sm">
                <a href="">Mensual</a>
                <a href="">Trimestral</a>
                <a href="">Semestral</a>
                <a href="">Anual</a>
              </div>
            </div>
            <div className="px-4">
              <h1 className="font-semibold text-base text-gray-100 uppercase">
                Campañas
              </h1>
              <ul className="mt-4 text-gray-400 text-sm space-y-1">
                <li className="">
                  <a href="">About Us</a>
                </li>
                <li className="">
                  <a href="">Carrers</a>
                </li>
                <li className="">
                  <a href="">Costumer</a>
                </li>
                <li className="">
                  <a href="">Parthers</a>
                </li>
              </ul>
              {/* <div className="flex flex-col gap-1 mt-4 text-gray-400 text-sm">
                <a href="">About Us</a>
                <a href="">Carrers</a>
                <a href="">Costumer</a>
                <a href="">Parthers</a>
              </div> */}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center text-gray-300 max-md:flex-col-reverse max-md:items-start">
          <div className="text-sm max-md:mt-2">
            &copy; Copyrigth GymSmart 2024. Todos los derechos reservados
          </div>
          <div className="flex gap-3">
            <a
              href=""
              className="bg-[#2f3f4a] rounded-full p-2 transition duration-500 hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131c.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
                />
              </svg>
            </a>
            <a
              href=""
              className="bg-[#2f3f4a] rounded-full p-2 transition duration-500 hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 14 14"
              >
                <g fill="none">
                  <g clipPath="url(#primeTwitter0)">
                    <path
                      fill="currentColor"
                      d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
                    />
                  </g>
                  <defs>
                    <clipPath id="primeTwitter0">
                      <path fill="#fff" d="M0 0h14v14H0z" />
                    </clipPath>
                  </defs>
                </g>
              </svg>
            </a>
            <a
              href=""
              className="bg-[#2f3f4a] rounded-full p-2 transition duration-500 hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417c.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046c.78.035 1.204.166 1.486.275c.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485c.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598c-.28.11-.704.24-1.485.276c-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598a2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485c-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486c.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276c.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92a.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217a4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
