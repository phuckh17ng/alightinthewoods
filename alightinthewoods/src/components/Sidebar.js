import React from "react";
import styles from "./Sidebar.module.scss";
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hamburger__icon}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Sidebar;
