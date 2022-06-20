import React from "react";

import "./index.css";
import github from "../../images/github-seeklogo.com.svg";

export const Footer = () => {
  // Button function to scroll to the top of the page
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // github link

  const navigateGitHub = () => {
    window.open("https://github.com/SamHardiment");
  };

  return (
    <div className="footer">
      <div className="contacts">
        <img
          className="image-links"
          src={github}
          alt="Github Logo"
          onClick={navigateGitHub}
        />
      </div>
      <div className="btn-container">
        <button className="topBtn" onClick={goToTop}>
          Jump to the Top
        </button>
      </div>
    </div>
  );
};
