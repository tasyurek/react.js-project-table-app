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
        <form onSubmit={this.handleSubmit}>
          <h3>Create new project</h3>
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
          <button className="btn button">Create</button>
        </form>
      </div>
    );
  }
}

export default CreateProject;
