import React, { Component } from "react";

class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
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
          <h3>Sign up</h3>
          <div className="input-field">
            <input type="text" id="firstName" onChange={this.handleChange} />
            <label htmlFor="firstName">Fist name</label>
          </div>
          <div className="input-field">
            <input type="text" id="lastName" onChange={this.handleChange} />
            <label htmlFor="lastName">Last name</label>
          </div>
          <div className="input-field">
            <input type="email" id="email" onChange={this.handleChange} />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input type="password" id="password" onChange={this.handleChange} />
            <label htmlFor="password">Password</label>
          </div>
          <button className="btn blue darken-2">Sign up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
