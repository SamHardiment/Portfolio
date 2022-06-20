import React from "react";
import { Carousel } from "../../components";
// import { ReactComponent as Js } from "../../images/javascript-js-seeklogo.com.svg";
import js from "../../images/javascript-js-seeklogo.com.svg";
import rt from "../../images/react-seeklogo.com.svg";
import node from "../../images/node-node-js-seeklogo.com.svg";
import jt from "../../images/jest-seeklogo.com.svg";

import redux from "../../images/redux-seeklogo.com.svg";
import docker from "../../images/docker-seeklogo.com.svg";
import netlify from "../../images/netlify-seeklogo.com.svg";
import postgresql from "../../images/postgresql-seeklogo.com.svg";
import heroku from "../../images/heroku-seeklogo.com.svg";
import mongodb from "../../images/mongodb-seeklogo.com.svg";
import bootstrap from "../../images/bootstrap-seeklogo.com.svg";

import "./index.css";

export const Skills = () => {
  return (
    <div className="skills-container">
      <div></div>
      <div>
        <h2 className="skills-title">Skills</h2>
        <div className="underline-2"></div>
      </div>
      <div className="carousel-section">
        <Carousel>
          <img src={js} alt="Javascript Logo" />
          <img src={rt} alt="React Logo" />
          <img src={node} alt="NodeJS Logo" />
          <img src={jt} alt="Jest Logo" />
          <img src={redux} alt="Redux Logo" />
          <img src={docker} alt="Docker Logo" />
          <img src={netlify} alt="NetlifyLogo" />
          <img src={postgresql} alt="PostgreSQL Logo" />
          <img src={heroku} alt="Heroku Logo" />
          <img src={mongodb} alt="MongoDB Logo" />
          <img src={bootstrap} alt="Bootstrap Logo" />
        </Carousel>
      </div>
    </div>
  );
};
