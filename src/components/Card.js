import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ logement }) => {
  return (
    <li className="card">
      <p className="card-title">{logement.title}</p>
      <NavLink to="/slideshow/">
        <img src={logement.cover} alt="Logement" />
        <div className="card-gradient"></div>
      </NavLink>
    </li>
  );
};

export default Card;
