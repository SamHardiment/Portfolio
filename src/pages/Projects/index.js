import React, { useState } from "react";

import "./index.css";
import { ProjectCard } from "../../components";

export const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "smallTalk",
      skills: ["Javascript", "Jest", "Heroku", "Netlify", "NodeJS"],
      desc: "SmallTalk is the place to be if you want to post a quirky comment, funny gif or rant about how you are overworked :( ",
      link: "https://github.com/SamHardiment/smallTalk_Client",
    },
    {
      id: 2,
      name: "RooTeen",
      skills: [
        "Javascript",
        "Jest",
        "Heroku",
        "Netlify",
        "NodeJS",
        "PostgreSQL",
      ],
      desc: "RooTeen is an addictive habit tracker which has a colourful designed to retain user attention to help build better habits",
      link: "https://github.com/SamHardiment/Lap-2-Portfolio-Client",
    },
  ]);
  return (
    <>
      <div className="project-header">
        <h4 className="heading--4">My Projects</h4>
        <div className="underline-3"></div>
      </div>
      <div className="project-section">
        <ProjectCard projects={projects} />
      </div>
    </>
  );
};
