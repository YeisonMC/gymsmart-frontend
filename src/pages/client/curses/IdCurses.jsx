import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCursoById } from "../../../apis/curses/CursesApi";

const IdCurses = () => {
  const { id } = useParams();
  const [curso, setCurso] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCurso = async () => {
      try {
        const data = await fetchCursoById(id);
        setCurso(data);
        setLoading(false);
      } catch (error) {
        setError("Error al obtener el curso");
        setLoading(false);
      }
    };
    getCurso();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!curso) {
    return <div>Curso no encontrado</div>;
  }

  return (
    <>
      <div>
        <h1>{curso.nombre}</h1>
        <img src={curso.imagen} alt={curso.nombre} />
        <p>{curso.descripcion}</p>
        <p>Instructor: {curso.instructor}</p>
        <p>Categoría: {curso.categoria}</p>
      </div>
    </>
  );
};

export default IdCurses;
