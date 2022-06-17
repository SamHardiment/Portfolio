import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Navbar = () => {
  const TestRef = useRef(null);

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
        <li onClick={() => scrollDown({ aboutMe })}>About Me</li>
        <li onClick={() => scrollDown({ skills })}>Skills</li>
        <li onClick={() => scrollDown({ projects })}>Projects</li>
        <li onClick={() => scrollDown({ contact })}>Contact Me</li>
      </ul>
      <h3 ref={TestRef}>Test</h3>
      <h4>test-2</h4>
    </>
  );
};

export default Navbar;
