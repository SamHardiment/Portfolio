import React, { useRef } from "react";

import { Navbar } from "./layout";
import { About } from "./pages";
import "./app.css";

export const App = () => {
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  return (
    <>
      <Navbar
        about={about}
        skills={skills}
        projects={projects}
        contact={contact}
      />
      <h2>Website Under Construction</h2>
      <About />
      <h3 ref={about}>Test</h3>
      <h4 ref={skills}>test-2</h4>
      <h5 ref={projects}>test-3</h5>
      <h6 ref={contact}>test-4</h6>
    </>
  );
};
