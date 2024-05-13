import React, { useContext } from "react";
import '../Card/index.css';
const Card = ({
  name,
  age,
  profession,
  nationality,
  flag,
  imagen,
  qualification,
  id,
}) => {
  return (
    <div className="Card">
    <img id="persona" src={imagen} alt={name} />

    <h1 id="name">
        {name[0]} {name[1]}
    </h1>
    <p id="edad">{age}</p>
    <img id="pais" src={flag} alt={nationality} />
    <p id="profesion">{profession}</p>

    <p id="clasificacion">Calificación: {qualification}</p>
    </div>
);
};

export default Card;
