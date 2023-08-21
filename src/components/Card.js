import React from "react";

const Card = ({ logement }) => {
  return (
    <li className="card">
      <p className="card-title">{logement.title}</p>
      <img src={logement.cover} alt="Logement" />
      <div className="card-gradient"></div>
    </li>
  );
};

export default Card;
