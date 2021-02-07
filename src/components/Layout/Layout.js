import React from "react";
import styles from "./Layout.module.css";
import AppBar from "../AppBar/AppBar";

const Layout = ({ children }) => (
  <div className={styles.container}>
    <AppBar />
    {children}
  </div>
);

export default Layout;
