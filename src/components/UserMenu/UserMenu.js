import React from "react";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import styles from "./UserMenu.module.css";

const UserMenu = ({ avatar, userName, onLogout }) => (
  <div className={styles.container}>
    <img src={avatar} alt="" width="32" className={styles.avatar} />
    <span className={styles.name}>Welcome, {userName}</span>
    <button type="button" onClick={onLogout} className={styles.button}>
      Logout
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  userName: authSelectors.getUserName(state),
  avatar:
    "https://icon-library.net/images/avatar-icon-images/avatar-icon-images-8.jpg",
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu
);
