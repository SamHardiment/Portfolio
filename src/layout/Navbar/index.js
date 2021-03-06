import React from "react";

import "./index.css";

export const Navbar = ({ about, skills, projects, contact }) => {
  // Function that takes a reference and scrolls to it.
  //Reference provided by props
  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <h3 className="signature">SamH</h3>
      </div>
      <ul className="navbar-links">
        <li onClick={() => scrollDown(about)}>About Me</li>
        <li onClick={() => scrollDown(skills)}>Skills</li>
        <li onClick={() => scrollDown(projects)}>Projects</li>
        <li onClick={() => scrollDown(contact)}>Contact Me</li>
      </ul>
    </div>
  );
};
