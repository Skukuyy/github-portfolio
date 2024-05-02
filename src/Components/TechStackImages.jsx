import React from "react";
import dataTeckStack from "../data/tech_stack_data.json";
import "../css/techstackimages.css";

function TechStackFrontendImages() {
  return (
    <>
      {dataTeckStack.frontend.map((item) => (
        <div className="image-and-name">
          <img
            src={item.image}
            alt={item.name}
            className="tech-stack-image"
          ></img>
          <h5>{item.name}</h5>
        </div>
      ))}
    </>
  );
}

function TechStackBackendImages() {
  return (
    <>
      {dataTeckStack.backend.map((item) => (
        <div className="image-and-name">
          <img
            src={item.image}
            alt={item.name}
            className="tech-stack-image"
          ></img>
          <h5>{item.name}</h5>
        </div>
      ))}
    </>
  );
}

function TechStackExtraImages() {
  return (
    <>
      {dataTeckStack.extra.map((item) => (
        <div className="image-and-name">
          <img
            src={item.image}
            alt={item.name}
            className="tech-stack-image"
          ></img>
          <h5>{item.name}</h5>
        </div>
      ))}
    </>
  );
}

export { TechStackFrontendImages, TechStackBackendImages, TechStackExtraImages };
