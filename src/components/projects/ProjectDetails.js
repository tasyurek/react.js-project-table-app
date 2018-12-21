import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card project-summary">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            sit hic fugit sint, consectetur laboriosam omnis, neque similique
            modi, assumenda eligendi odio quod consequuntur? Tempore asperiores
            nulla aut nobis inventore?
          </p>
        </div>
        <div className="card-action project-summary-info">
          <p>Posted by Onurc</p>
          <p>21 Dec 2018, 22:34</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
