import React from "react";

const ProjectSummary = () => {
  return (
    <div className="card z-depth-1 project-summary grey darken-3 white-text">
      <div className="card-content">
        <span className="card-title">Project Title</span>
        <p>
          I am a very simple card. I am good at containing small bits of
          information. I am convenient because I require little markup to use
          effectively.
        </p>
        <div className="project-summary-info">
          <p>Posted by Onurc</p>
          <p>21 Dec 2018, 22:34</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
