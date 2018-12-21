import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = () => {
  return (
    <div className="project-list section">
      <h2>Projects</h2>
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
    </div>
  );
};

export default ProjectList;
