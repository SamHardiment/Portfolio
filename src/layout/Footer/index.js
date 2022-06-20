import React from "react";

import "./index.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="contacts"></div>
      <div className="btn-container">
        <button onClick={goToTop}>Jump to the Top</button>
      </div>
    </div>
  );
};
