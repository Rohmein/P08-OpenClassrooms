import React from "react";
import { useLocation } from "react-router-dom";
import homeBanner from "../assets/img/banner1.png";
import aboutBanner from "../assets/img/banner2.png";

const Banner = () => {
  const location = useLocation();

  return (
    <div className="banner">
      <h1>
        {location.pathname === "/" ? "Chez vous, partout et ailleurs" : ""}
      </h1>
      <div className="banner-gradient"></div>
      {location.pathname === "/" ? (
        <img className="home-banner" src={`${homeBanner}`} alt="Home Banner" />
      ) : (
        ""
      )}
      {location.pathname === "/about" ? (
        <img
          className="about-banner"
          src={`${aboutBanner}`}
          alt="About Banner"
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Banner;
