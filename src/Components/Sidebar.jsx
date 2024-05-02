import React from "react";
import { NavLink } from "react-router-dom";
import { GrGithub } from "react-icons/gr";
import { IoLogoLinkedin } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import ScrollToAnchor from "./ScrollToAnchor";
import "../css/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="header-user-image">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="me"
            className="user-img"
          />
        </div>
        <div className="header-text">
          <p className="bold">Jesus Baldini</p>
          <p className="profession">Frontend Developer</p>
        </div>
      </div>
      <div className="sections">
        <ul>
          <li>
            <NavLink className="navlink-item" to={"/"}>
              Sobre Mi
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink-item" to={"/#skills"} onClick={ScrollToAnchor}>
              Habilidades
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink-item" to={"/Projects"}>
              Proyectos
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socials">
        <ul>
          <li>
            <NavLink
              target="_blank"
              to="https://www.linkedin.com/in/jesus-santiago-baldini-644a1025b/"
              className="navlink-item-socials"
            >
              <IoLogoLinkedin size={50} />
            </NavLink>
          </li>
          <li>
            <NavLink
              target="_blank"
              to="https://github.com/Skukuyy"
              className="navlink-item-socials"
            >
              <GrGithub size={50} />
            </NavLink>
          </li>
          <li>
            <NavLink target="_blank" to="" className="navlink-item-resume">
             Resume <IoDocumentText />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
