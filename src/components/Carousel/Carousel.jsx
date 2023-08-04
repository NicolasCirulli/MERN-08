import "./carousel.css";
import { useState, useEffect } from "react";

const Carousel = () => {
  const [contador, setContador] = useState(0);
  const [datos, setDatos] = useState([]);
  const prev = () => {
    if (contador == 0) {
      setContador(events.length - 1);
    } else {
      setContador(contador - 1);
    }
  };

  useEffect(() => {
    // este como tiene el array vacio, se ejecuta solo cuando monta el componente
    fetch("https://mindhub-xj03.onrender.com/api/amazing")
      .then((response) => response.json())
      .then((data) => setDatos(data.events));
  }, []);

  useEffect(() => {
    // este useEffect se ejecuta cada vez que cambia el estado contador
    console.log("Cuando cambia contador:", contador);
  }, [contador]);

  const next = () => {
    if (contador == datos.length - 1) {
      setContador(0);
    } else {
      setContador(contador + 1);
    }
  };

  return (
    <div className="carousel">
      <button onClick={prev}> {"<"} </button>

      {datos.length > 0 ? (
        <img className="carousel-img" src={datos[contador].image} alt="" />
      ) : (
        <h2> Cargando... </h2>
      )}

      <button onClick={next}> {">"} </button>
    </div>
  );
};

export default Carousel;

// renderiza monta re-render desmonta

// useEffect -> sin array en todos los re-render
// useEffect -> [] solo cuando monta
// useEffect -> [ estado ] cuando cambia ese estado
// useEffect -> [ estado1, estado2 ] cuando cambia cualquiera de esos estados
