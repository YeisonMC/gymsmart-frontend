import axios from "axios";

const API_BASE_URL =
  "https://gymsmart-backend.onrender.com/gym/smart/cursos/api";
// const API_BASE_URL = "http://localhost:3000/gym/smart/cursos/api";

export const fetchCursos = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/get/todos-cursos`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los cursos:", error);
    throw error;
  }
};

export const fetchCursoById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/get/cursos-por-id/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los cursos:", error);
    throw error;
  }
};
