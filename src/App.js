import React, { useRef } from "react";

import { Navbar, Header, Footer } from "./layout";
import { About } from "./pages";
import { Skills } from "./pages";
import "./app.css";
import { A_SectionDivider, B_SectionDivider } from "./components";

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
      <div ref={about}></div>
      <About />
      <A_SectionDivider />
      <div ref={skills}></div>
      <Skills />
      <B_SectionDivider />
      <div ref={projects}></div>
      <A_SectionDivider />
      <div ref={contact}></div>
      <Footer />
    </>
  );
};
