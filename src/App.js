import React, { useRef } from "react";

import { Navbar, Header, Footer } from "./layout";
import { About, Skills, Projects } from "./pages";

import "./app.css";
import { A_SectionDivider, B_SectionDivider } from "./components";

export const App = () => {
  // References for each component
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const Div = React.forwardRef((props, ref) => (
    <div ref={ref} className="reference-div">
      {props.children}
    </div>
  ));

  return (
    <>
      <Navbar
        about={about}
        skills={skills}
        projects={projects}
        contact={contact}
      />
      <Header />
      <Div ref={about}>
        <About />
      </Div>

      <A_SectionDivider />
      <Div ref={skills}>
        <Skills />
      </Div>

      <B_SectionDivider />
      <Div ref={projects}>
        <Projects />
      </Div>
      <Div ref={contact}></Div>
      <Footer />
    </>
  );
};

// What if I add the Skills/> component into each div that is created
