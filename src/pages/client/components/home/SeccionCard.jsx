import React, { useEffect, useState } from "react";
import { fetchCursos } from "../../../../apis/curses/CursesApi";
import { Link } from "react-router-dom";

const SeccionCard = () => {
  const [cursos, setCursos] = useState([]);

  // useEffect(() => {
  //   const fetchCursos = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:3000/gym/smart/cursos/api/get/todos-cursos"
  //       );
  //       setCursos(response.data);
  //     } catch (error) {
  //       console.error("Error al obtener los cursos:", error);
  //     }
  //   };

  //   fetchCursos();
  // }, []);

  useEffect(() => {
    const getCursos = async () => {
      try {
        const data = await fetchCursos();
        setCursos(data);
      } catch (error) {
        console.error("Error al obtener los cursos:", error);
      }
    };

    getCursos();
  }, []);

  return (
    <>
      <h1 className="font-bold text-3xl text-[#262628]">Nuestros cursos</h1>
      <div className="mt-4 mb-7 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-6">
        {cursos.map((curso) => (
          <Link
            to={`/user/curses/${curso.id_curso}`}
            key={curso.id_curso}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              className="w-full h-48 object-cover"
              src={curso.imagen}
              alt={curso.nombre}
            />
            <div className="px-4 py-2">
              <h3 className="font-bold text-xl mb-2">{curso.nombre}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default SeccionCard;
