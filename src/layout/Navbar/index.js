import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Navbar = ({ about, skills, projects, contact }) => {
  // Function that takes a reference and scrolls to it.
  //Reference provided by props
  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <h2>SamH</h2>
      <ul>
        <li onClick={() => scrollDown(about)}>About Me</li>
        <li onClick={() => scrollDown(skills)}>Skills</li>
        <li onClick={() => scrollDown(projects)}>Projects</li>
        <li onClick={() => scrollDown(contact)}>Contact Me</li>
      </ul>
    </>
  );
};

export default Navbar;
