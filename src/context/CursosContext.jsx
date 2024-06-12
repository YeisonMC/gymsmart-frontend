import React, { createContext, useEffect, useState } from "react";

// const CursosContext = createContext();

const CursosContext = ({ children }) => {
  const [cursoActual, setCursoActual] = useState(null);

  const getCursoById = async (id) => {
    try {
      const data = await fetchCursoById(id);
      setCursoActual(data);
    } catch (error) {
      console.error("Error al obetener datos", error);
    }
  };

  return (
    <CursosContext.Provider value={{ cursoActual, getCursoById }}>
      {children}
    </CursosContext.Provider>
  );
};

export default CursosContext;
