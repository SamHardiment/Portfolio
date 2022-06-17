import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Navbar = () => {
  // references in another doc
  // const aboutMe = useRef(null);
  // const skills = useRef(null);
  // const aboutMe = useRef(null);
  // const aboutMe = useRef(null);
  const TestRef = useRef(null);

  const scrollDown = (ref) => {
    console.log(ref);

    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <h2>SamH</h2>
      <ul>
        <li onClick={() => scrollDown({ TestRef })}>About Me</li>
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
