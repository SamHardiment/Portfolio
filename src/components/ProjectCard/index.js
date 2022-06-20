import React from "react";

import pic1 from "../../images/scottishsam.jpg";
import "./index.css";

export const ProjectCard = ({ projects }) => {
  const renderCards = () =>
    projects.map((p) => (
      <div className="card-container">
        <div className="projectCard">
          <div className="card-front card-content"></div>
          <div className="card-back card-content">
            <a href="#">
              <img className="cardImg" src={pic1} alt="Image of project" />
            </a>
          </div>
        </div>
        <div className="projectInfo">
          <h5 className="heading--5">{p.name}</h5>

          <p className="projectText">{p.desc}</p>
        </div>
        <div className="projectSkills">
          <h6 className="project-skill-title">Skills Used</h6>
          <ul className="projectList">
            {p.skills.map((s) => (
              <li>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    ));

  return (
    <>
      <div className="card-wrapper">{renderCards()}</div>
    </>
  );
};
