import React, { useRef } from "react";

import { Navbar, Header } from "./layout";
import { About } from "./pages";
import { Skills } from "./pages";
import "./app.css";

export const App = () => {
  // References for each component
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
      <Header />
      <About />
      <Skills />
      <div ref={skills}></div>
    </>
  );
};
