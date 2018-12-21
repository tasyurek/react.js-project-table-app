import React, { Component } from "react";

class SignIn extends Component {
  state = {
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
          <h3>Sign in</h3>
          <div className="input-field">
            <input type="email" id="email" onChange={this.handleChange} />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input type="password" id="password" onChange={this.handleChange} />
            <label htmlFor="password">Password</label>
          </div>
          <button className="btn blue darken-2">Sign in</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
