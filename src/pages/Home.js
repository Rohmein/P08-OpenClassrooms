import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import { NavLink } from "react-router-dom";
import Card from "./components/Card";

const Home = (Logements) => {
  const logements = Logements.Logements;

  return (
    <div>
      <Header />
      <Banner />
      <div className="main-container">
        <ul>
          {logements.map((logement) => (
            <NavLink key={logement.id} to={`slideshow/${logement.id}`}>
              <Card logement={logement} />
            </NavLink>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
