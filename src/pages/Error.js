import React from "react";
import Header from "./components/Header";
import { NavLink } from "react-router-dom";
import Footer from "./components/Footer";

const Error = () => {
  return (
    <div>
      <Header />
      <div className="error-container">
        <p className="error">404</p>
        <p className="error-text">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <NavLink to="/">
          <p className="error-link">Retourner sur la page d'accueil</p>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
