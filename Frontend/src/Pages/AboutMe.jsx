import React from "react";
import "../css/aboutme.css";
import {
  TechStackFrontendImages,
  TechStackBackendImages,
  TechStackExtraImages,
} from "../Components/TechStackImages";

const AboutMe = () => {
  return (
    <>
      <div className="about-container">
        <div className="header-section">
          <h1 className="about-text">Sobre Mi</h1>
          <h1 className="dot">.</h1>
          <h1 className="line">_____</h1>
        </div>

        <div className="text-paragraph-container">
          <p className="paragraph">
            Desarrollador Frontend y actualmente estudiando en la carrera de Desarrollo de Software.
            Mi especialización es en el desarrollo de sitios web y trabajo principalmente con React y Javascript
            perfeccionando cada detalle para asegurar la máxima compatibilidad y rendimiento en una variedad de dispositivos y navegadores.
            Me destaco por estar constantemente actualizando mis habilidades para mantenerme al tanto de las últimas tendencias y mejores prácticas en el desarrollo web.
            <br></br>
            <br></br>
            Durante mi tiempo libre  exploro mi lado creativo a través de la ilustración. También me gusta jugar videojuegos y cantar
            {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            venenatis commodo odio, a consequat orci tempor ac. Duis eu sapien
            auctor tellus iaculis euismod vitae non ante. Morbi vulputate
            ultricies sodales. Curabitur in tempor odio. Ut elementum pretium
            arcu, in imperdiet ipsum porta sit amet. Proin purus nulla, commodo
            a diam eget, mattis tempus odio. Vivamus fermentum vehicula lectus
            non sodales. Aenean dignissim ut mauris a varius. Nunc sed tincidunt
            massa. Morbi ornare condimentum augue auctor iaculis. Aliquam
            consectetur blandit congue. Pellentesque auctor volutpat felis, eget
            placerat elit mollis id. Vivamus ullamcorper tincidunt ex, eget
            aliquet nisl iaculis quis. Duis at lacinia ante. Donec lacinia
  posuere imperdiet.*/}
          </p>
          </div>
          <div className="education-and-tech-stack">
            <div className="education-section">
              <h3 className="substitle-text">Educación:</h3>
              <div className="list">
                <ul>
                  <li>
                    <h4>Desarrollo de Software</h4>
                    <div className="name-and-year">
                      <h5>Terciario Urquiza N°49 Rosario</h5>
                      <h5>2021 - Presente</h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tech-section">
              <h3 className="substitle-text">Habilidades:</h3>
              <div className="list" id="skills">
                <ul>
                  <li>
                    <h4>Frontend</h4>
                    <div className="tech-main-container">
                      <TechStackFrontendImages />
                    </div>
                  </li>
                  <li>
                    <h4>Backend</h4>
                    <div className="tech-main-container">
                      <TechStackBackendImages />
                    </div>
                  </li>
                  <li>
                    <h4>Extra</h4>
                    <div className="tech-main-container">
                      <TechStackExtraImages />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default AboutMe;
