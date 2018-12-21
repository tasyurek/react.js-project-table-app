import React, { Component } from "react";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = params => {
    this.setState({
      [params.target.id]: params.target.value
    });
  };
  handleSubmit = params => {
    params.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <h3>Create new project</h3>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input type="text" id="title" onChange={this.handleChange} />
            <label htmlFor="title">Title</label>
          </div>
          <div className="input-field">
            <textarea
              type="tex"
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
            <label htmlFor="content">Project Content</label>
          </div>
          <div className="input-field">
            <button className="btn blue darken-1">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateProject;
