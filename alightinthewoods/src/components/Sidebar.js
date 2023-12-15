import React, { useState } from "react";
import styles from "./Sidebar.module.scss";
const Sidebar = () => {
  const [sidebarShow, setSidebarShow] = useState(false);
  const handleSidebarOnClick = () => {
    setSidebarShow(!sidebarShow);
  };

  return (
    <div className="relative h-full">
      <div className={styles.container}>
        <div className={styles.hamburgerMenu}>
          <div
            className={styles.hamburger__icon}
            onClick={handleSidebarOnClick}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={styles.sidebarNavigate}>
          <div className={styles.sidebarChapter}>
            <div className={styles.chapterIcon}>
              <img
                src={
                  "https://alightinthewoods.net/images/sidebar-chapters-icon.svg"
                }
                alt="chapter"
              />
            </div>
            <div className={styles.sidebarTitle}>BOOKS</div>
          </div>
          <div className={styles.sidebarChapter}>
            <div className={styles.chapterIcon}>
              <img
                src={
                  "https://alightinthewoods.net/images/sidebar-explore-icon.svg"
                }
                alt="chapter"
              />
            </div>
            <div className={styles.sidebarTitle}>EXPLORE</div>
          </div>
          <div className="h-full flex flex-col items-center">
            <span className={styles.borderHorizonTop}></span>
            <div className={styles.sideBarMainTitle}>BOOKS</div>
            <span className={styles.borderHorizonBottom}></span>
          </div>
        </div>
        <div className={styles.sidebarSettings}>
          <img
            src={"https://alightinthewoods.net/images/settings-icon.svg"}
            alt="settings"
          />
        </div>
      </div>

      <div
        className={`h-screen absolute top-0 left-[4.6rem] z-50 bg-[#222222] ${
          sidebarShow ? "w-[600px]" : "w-0"
        }`}
      ></div>
    </div>
  );
};

export default Sidebar;
