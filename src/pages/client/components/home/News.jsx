import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../../../assets/css/Navbar.css";

const News = () => {
  const [courseSchedules, setCourseSchedules] = useState([]);

  useEffect(() => {
    const fetchCourseSchedules = async () => {
      try {
        const response = await axios.get(
          "https://gymsmart-backend.onrender.com/gym/smart/horarios-cursos/api/get/todos-horarios-cursos"
          // "http://localhost:3000/gym/smart/horarios-cursos/api/get/todos-horarios-cursos"
        );
        setCourseSchedules(response.data);
      } catch (error) {
        console.error("Error al obtener los cursos: ", error);
      }
    };
    fetchCourseSchedules();
  }, []);

  return (
    // 141d24
    // overflow-y-auto
    <section className="p-4">
      <h1 className="font-bold text-2xl text-[#262628]">Horarios</h1>
      <p>Calendario de cursos</p>
      <div className="mt-1 py-3 flex flex-col gap-2 max-h-[300px] overflow-hidden overflow-y-auto">
        {courseSchedules.map((courseSchedules) => (
          <div
            className="bg-[#262628] shadow-lg py-4 px-2 rounded-xl"
            key={courseSchedules.id_horario}
          >
            <div className="flex items-center gap-4">
              <h1 className="text-white bg-[#4d4d51] py-4 px-3 rounded-xl">
                {courseSchedules.dia.slice(0, 4)}..
              </h1>
              <div className="">
                <h3 className="font-bold text-xl text-white ">
                  Proxima clase de {courseSchedules.nombre_curso}
                </h3>
                <div className="flex gap-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-gray-300"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-[#AEAFB2]">
                    {courseSchedules.hora_inicio.slice(0, 5)} -
                  </p>
                  <p className="text-[#AEAFB2]">
                    {courseSchedules.hora_fin.slice(0, 5)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
