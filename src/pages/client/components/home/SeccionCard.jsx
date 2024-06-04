import axios from "axios";
import React, { useEffect, useState } from "react";

const SeccionCard = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/gym/smart/cursos/api/get/todos-cursos"
        );
        setCursos(response.data);
      } catch (error) {
        console.error("Error al obtener los cursos:", error);
      }
    };

    fetchCursos();
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-6">
        {cursos.map((curso) => (
          <div
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
          </div>
        ))}
      </div>
    </>
  );
};

export default SeccionCard;
