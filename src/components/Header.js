import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

const Header = () => {
  return (
    <div className="header-container">
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
