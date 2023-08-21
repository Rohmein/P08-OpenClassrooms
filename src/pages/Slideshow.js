import React from "react";
import { useParams } from "react-router-dom";
import Logements from "../database/logements.json";
import ArrowLeft from "../assets/img/arrow-left.png";
import ArrowRight from "../assets/img/arrow-right.png";
import Header from "../components/Header";
// import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

const Slideshow = () => {
  const { id } = useParams();
  const selectedHouse = Logements.find((logement) => logement.id === id);

  return (
    <div>
      <Header />
      <div className="carousel">
        <div className="carousel-banner">
          <img
            className="carousel-picture"
            src={selectedHouse.pictures[0]}
            alt={selectedHouse.pictures}
          />
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
      </div>
      <div className="description-container">
        <div className="description">
          <h1>{selectedHouse.title}</h1>
          <p>{selectedHouse.location}</p>
          <div className="tag-container">
            {selectedHouse.tags.map((tag, index) => (
              <p key={index} className="tag">
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className="proprietaire-container">
          <div className="proprietaire">
            <h2>{selectedHouse.host.name}</h2>
            <img
              className="photo-proprietaire"
              src={selectedHouse.host.picture}
              alt={selectedHouse.host.name}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Slideshow;
