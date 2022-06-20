import React from "react";

import "./index.css";
import { ProjectCard } from "../../components";

export const Projects = () => {
  const projects = [
    {
      name: "smallTalk",
      skills: ["Javascript", "Jest", "Heroku", "Netlify", "NodeJS"],
      desc: "SmallTalk is the place to be if you want to post a quirky comment, funny gif or rant about how you are overworked :( ",
      link: "https://github.com/SamHardiment/smallTalk_Client",
    },
  ];
  return <ProjectCard projects={projects} />;
};
