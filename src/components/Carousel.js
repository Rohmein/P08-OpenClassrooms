import React from "react";
import Star from "../assets/img/star.png";
import ArrowLeft from "../assets/img/arrow-left.png";
import ArrowRight from "../assets/img/arrow-right.png";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-banner">
        <img
          className="arrow arrow-left"
          src={ArrowLeft}
          alt="Flèche gauche du carousel"
        />
        <img
          className="arrow arrow-right"
          src={ArrowRight}
          alt="Flèche droite du carousel"
        />
        <div className="number">1/4</div>
      </div>
      <div className="description-container">
        <div className="informations">
          <h1>Nom du logement</h1>
          <p>Ville, département</p>
          <p className="tag">Tag</p>
        </div>
        <div className="proprietaire-container">
          <div className="proprietaire">
            <h2>Romain Hautefeuille</h2>
            <div className="photo-proprietaire"></div>
          </div>
          <div className="stars">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
