import React from "react";
import { NavLink } from "react-router-dom";

const AuthNav = () => (
  <div>
    <NavLink to="/register" exact className="link" activeClassName="activeLink">
      REGISTER
    </NavLink>
    <NavLink to="/login" exact className="link" activeClassName="activeLink">
      LOGIN
    </NavLink>
  </div>
);

export default AuthNav;
