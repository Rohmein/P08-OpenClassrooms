import React from "react";
import Data from "../database/logements.json";
import Card from "./Card";

const Main = () => {
  const data = Data;
  console.log(data);

  return (
    <div className="main-container">
      {data.map((logement) => (
        <Card key={logement.id} logement={logement} />
      ))}
    </div>
  );
};

export default Main;
