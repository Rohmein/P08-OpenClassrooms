import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchData } from "./API";
import Card from "./Card";

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
      .then((data) => setData(data))
      .catch((error) =>
        console.error("Erreur de récupération des éléments", error)
      );
  }, []);

  return (
    <div className="main-container">
      <ul>
        {data.map((logement) => (
          <NavLink key={logement.id} to={`slideshow/${logement.id}`}>
            <Card logement={logement} />
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Main;
