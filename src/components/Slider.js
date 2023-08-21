import React, { useState } from "react";
import ArrowLeft from "../assets/img/arrow-left.png";
import ArrowRight from "../assets/img/arrow-right.png";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel-banner">
        <img
          className="carousel-picture"
          src={slides[currentIndex]}
          alt={`Slide n°${currentIndex}`}
        />
        <img
          className="arrow arrow-left"
          src={ArrowLeft}
          alt="Flèche gauche du carousel"
          onClick={goToPrevious}
        />
        <img
          className="arrow arrow-right"
          src={ArrowRight}
          alt="Flèche droite du carousel"
          onClick={goToNext}
        />
        {slides.length > 1 && (
          <div className="carousel-numbers">
            {currentIndex + 1} / {slides.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
