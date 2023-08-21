import React from "react";
import { useParams } from "react-router-dom";
import Logements from "../database/logements.json";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Rating from "../components/Rating";
import SlideshowCollapse from "../components/SlideshowCollapse";
import Footer from "../components/Footer";

const Slideshow = () => {
  const { id } = useParams();
  const selectedHouse = Logements.find((logement) => logement.id === id);
  const slides = selectedHouse.pictures;

  return (
    <div>
      <Header />
      <Slider slides={slides} />
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
          <Rating value={selectedHouse.rating} />
        </div>
      </div>
      <div className="slideshow-collapse">
        <SlideshowCollapse title="Description">
          <p>{selectedHouse.description}</p>
        </SlideshowCollapse>
        <SlideshowCollapse title="Équipements">
          {selectedHouse.equipments.map((equipment, index) => (
            <p key={index} className="equipment">
              {equipment}
            </p>
          ))}
        </SlideshowCollapse>
      </div>
      <Footer />
    </div>
  );
};

export default Slideshow;
