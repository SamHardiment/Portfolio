import React from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

export const Footer = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer">
      <div className="contacts"></div>
      <div className="btn-container">
        <button className="topBtn" onClick={goToTop}>
          Jump to the Top
        </button>
      </div>
    </div>
  );
};
