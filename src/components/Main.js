import React, { useEffect, useState } from "react";
import Card from "./Card";

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("./logements.json");
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      } else {
        console.error("Erreur lors de la requête.");
      }
    }
    fetchData();
  }, []);

  return (
    <div className="main-container">
      <ul>
        {data.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </ul>
    </div>
  );
};

export default Main;
