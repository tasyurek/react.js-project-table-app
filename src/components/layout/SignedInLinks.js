import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">New Projects</NavLink>
      </li>
      <li>
        <NavLink to="/">Sign out</NavLink>
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
