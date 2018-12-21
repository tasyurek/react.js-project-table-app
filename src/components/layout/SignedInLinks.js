import React from "react";
import { Link, NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to="/create">New Projects</NavLink>
      </li>
      <li>
        <Link to="/">Sign out</Link>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating blue darken-2 z-depth-0">
          OCT
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
