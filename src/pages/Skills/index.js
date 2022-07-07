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
import python from "../../images/python-seeklogo.com.svg";
import flask from "../../images/flask-seeklogo.com.svg";
import django from "../../images/django-seeklogo.com.svg";

import "./index.css";

export const Skills = () => {
  const logos = [
    { ref: js, name: "Javascript" },
    { ref: rt, name: "React" },
    { ref: node, name: "Node" },
    { ref: jt, name: "Jest" },
    { ref: redux, name: "Redux" },
    { ref: docker, name: "Docker" },
    { ref: netlify, name: "Netlify" },
    { ref: postgresql, name: "PostgreSQL" },
    { ref: heroku, name: "Heroku" },
    { ref: mongodb, name: "MongoDB" },
    { ref: bootstrap, name: "Bootstrap" },
    { ref: python, name: "Python" },
    { ref: flask, name: "Flask" },
    { ref: django, name: "Django" },
  ];
  return (
    <div className="skills-container">
      <div></div>
      <div>
        <h2 className="skills-title">Skills</h2>
        <div className="underline-2"></div>
      </div>
      <div className="carousel-section">
        <Carousel>
          {logos.map((obj) => (
            <img src={obj.ref} alt={obj.name} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
