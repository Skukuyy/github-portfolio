import React from "react";
import Project from "../Components/Project";
import "../css/projects.css";

const Projects = () => {
  return (
    <>
      <div className="projects-main-container">
        <div className="header-container">
          <h1 className="about-text">Projectos</h1>
          <h1 className="dot-projects">.</h1>
          <h1 className="line-projects">_____</h1>
          <div className="list-projects"></div>
        </div>
        <div className="wrapper-projects-container">
          <ul>
            <li>
              <Project />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Projects;
