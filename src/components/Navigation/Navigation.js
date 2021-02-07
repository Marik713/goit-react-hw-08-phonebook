import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { authSelectors } from "../../redux/auth";

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink to="/" exact className="link" activeClassName="activeLink">
      HOME
    </NavLink>

    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact
        className="link"
        activeClassName="activeLink"
      >
        CONTACTS
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
