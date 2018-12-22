import React from "react";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-1 project-summary grey darken-3 white-text">
      <div className="card-content">
        <span className="card-title">{project.title}</span>
        <p>{project.content}</p>
        <div className="project-summary-info">
          <p>Posted by Onurc</p>
          <p>21 Dec 2018, 22:34</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
