import React from "react";
import { Carousel } from "../../components";
// import { ReactComponent as Js } from "../../images/javascript-js-seeklogo.com.svg";
import js from "../../images/javascript-js-seeklogo.com.svg";
import rt from "../../images/react-seeklogo.com.svg";
import node from "../../images/node-node-js-seeklogo.com.svg";
import jt from "../../images/jest-seeklogo.com.svg";

import "./index.css";

export const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="carousel-section">
        <Carousel>
          <img src={js} alt="Javascript Logo" />
          <img src={rt} alt="React Logo" />
          <img src={node} alt="NodeJS Logo" />
          <img src={jt} alt="Jest Logo" />
        </Carousel>
      </div>
    </div>
  );
};
