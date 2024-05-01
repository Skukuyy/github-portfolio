import React from "react";
import projectsData from "../data/projects_data.json";
import "../css/projectcard.css";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


function Project() {
  return (
    <>
      {projectsData.project.map((item) => (
        <div className="card-container">
          <div className="card">
            <img src={item.image} alt={item.name} className="card-img" />
            <div className="card-content">
              <h5 className="title-project">{item.name}</h5>
              <p className="description-project">{item.description}</p>
              <div className="buttons-container">

              <Link to={item.githubLink} className="link">
              <button
               className="btn-github"
               >
                Code <FaGithub 
                className="icon-github"
                size={12}
                />
              </button></Link>
              {item.showDemo ? <button className="btn-demo">
                Demo <FaExternalLinkAlt 
                className="icon-link"
                size={12} 
                />
              </button> : null}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Project;
