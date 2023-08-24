import React from "react";
import Logo from "../../assets/img/footer-logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <img src={Logo} alt="Logo Kasa" />
      <p>
        <span>&#169;</span> 2020 Kasa. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
