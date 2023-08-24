import React from "react";
import Logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <img src={Logo} alt="Logo Kasa" />
      <div className="navigation">
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>À Propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
