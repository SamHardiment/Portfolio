import React from "react";

import "./index.css";
export const ProjectCard = () => {
  return (
    <>
      <div class="projectCard">
        <div class="card-front card-content"></div>
        <div class="card-back card-content">
          <a href="#">
            <img
              class="cardImg"
              src="https://th.bing.com/th/id/R.eb704af5fd646749c9d12d7ca393d66c?rik=%2fBU1gXuDfYv1yA&riu=http%3a%2f%2fwww.robert-lacy.com%2fwp-content%2fuploads%2f2012%2f03%2fMidsummerBonfire-Hasmark-Denmark1-150x150.jpg&ehk=dWkf%2bDMlbVPK5kRlavXzYPSY0R%2f6WlZKCuZ2vENzT%2fE%3d&risl=&pid=ImgRaw&r=0"
              alt="Image of project"
            />
          </a>
        </div>
      </div>
      <div class="projectInfo">
        <h5 class="heading--5">Creating My Own API</h5>
        <p class="projectText">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis autem
          vitae quod praesentium aperiam inventore earum impedit obcaecati quas
          perferendis.
        </p>
      </div>
      <div class="projectSkills">
        <ul class="projectList">
          <li>JavaScript</li>
          <li>NodeJS</li>
          <li>Express</li>
          <li>Jest</li>
        </ul>
      </div>
    </>
  );
};
