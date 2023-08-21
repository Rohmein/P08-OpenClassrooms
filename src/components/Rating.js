import React from "react";
import EmptyStar from "../assets/img/star.png";
import FullStar from "../assets/img/active-star.png";

const Rating = ({ value }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= value) {
      stars.push(
        <img
          className="star full-star"
          key={i}
          src={FullStar}
          alt="Étoile pleine"
        />
      );
    } else {
      stars.push(
        <img
          className="star empty-star"
          key={i}
          src={EmptyStar}
          alt="Étoile vide"
        />
      );
    }
  }

  return <div>{stars}</div>;
};

export default Rating;
