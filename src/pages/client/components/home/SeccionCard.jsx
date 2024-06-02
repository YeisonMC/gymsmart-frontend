import axios from "axios";
import React, { useEffect, useState } from "react";

const SeccionCard = () => {
  const [store, setStore] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/gym/smart/api/get/cursos")
      .then((response) => setStore(response.data))
      .catch((error) => console.log("Error en la API ", error));
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-6">
        {store.map((store) => (
          <div className="" key={store.id}>
            <div>
              <img className="w-full" src={store.imagen} alt={store.nombre} />
              <div className="px-4 py-2">
                <h3 className="font-bold text-xl">{store.nombre}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SeccionCard;
