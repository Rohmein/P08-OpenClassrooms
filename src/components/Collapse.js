import React, { useState } from "react";
import Arrow from "../assets/img/arrow.png";

const Collapse = ({ title, children }) => {
  const [rotateArrow, setRotateArrow] = useState(0);
  const maxRotation = -180;
  const [isOpen, setIsOpen] = useState(false);

  const rotateArrowClick = () => {
    const leftRotation = rotateArrow === 0 ? maxRotation : 0;
    setRotateArrow(leftRotation);
  };

  const showTextClick = () => {
    setIsOpen(!isOpen);
  };

  const toggleCollapse = () => {
    rotateArrowClick();
    showTextClick();
  };

  return (
    <div className="collapse">
      <div className="collapse-header">
        <h1>{title}</h1>
        <div onClick={toggleCollapse}>
          <img
            className="arrow"
            src={Arrow}
            alt="Arrow"
            style={{ transform: `rotate(${rotateArrow}deg)` }}
          />
        </div>
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;
