import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import homeBanner from "../assets/img/banner1.png";
import aboutBanner from "../assets/img/banner2.png";

const Banner = () => {
  const location = useLocation();
  const [bannerImage, setBannerImage] = useState("");

  const getImageForPage = (pathname) => {
    if (pathname === "/") {
      return homeBanner;
    } else if (pathname === "/about") {
      return aboutBanner;
    }
  };

  useState(() => {
    const image = getImageForPage(location.pathname);
    setBannerImage(image);
  }, [location.pathname]);

  return (
    <div className="banner">
      <h1>
        {location.pathname === "/" ? "Chez vous, partout et ailleurs" : ""}
      </h1>
      <div className="banner-gradient"></div>
      <img src={`${bannerImage}`} alt="Banner" />
    </div>
  );
};

export default Banner;
