import React, { useState } from "react";
import styles from "./Sidebar.module.css";
const Sidebar = () => {
  const [sidebarShow, setSidebarShow] = useState(false);
  const handleSidebarOnClick = () => {
    setSidebarShow(!sidebarShow);
  };

  return (
    <div className="relative h-full">
      <div className={styles.containerMask}></div>
      <div className={styles.container}>
        <div className={styles.hamburgerMenu}>
          <div
            className={`${styles.hamburger__icon__close} ${
              sidebarShow && styles.hamburger__icon__open
            }`}
            onClick={handleSidebarOnClick}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div
          className={`${styles.sidebarNavigate} ${
            sidebarShow ? "opacity-0" : "opacity-100"
          }`}
        >
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
        className={`${styles.sidebarContainer} ${
          sidebarShow
            ? "w-[480px] transition-all duration-700 ease-in-out"
            : "w-0 transition-all duration-500 ease-in-out"
        }`}
      >
        <div
          className={`${styles.sidebarContent} ${
            sidebarShow
              ? styles.sidebarShowAnimation
              : styles.sidebarHideAnimation
          }`}
        >
          <div className={styles.sidebarTitleContainer}>
            <div className={styles.sidebarContentTitle}>
              BOOKS<p>00/06</p>
            </div>
            <div className={styles.sidebarContentTitle}>
              EXPLORE<p>00/17</p>
            </div>
            <div className={styles.sidebarContentTitle}>
              BESTIARY<p>00/03</p>
            </div>
            <div className={styles.sidebarContentTitle}>SLOW TV</div>
          </div>
          <div className={styles.openingSoon}>
            <p>OPENING SOON</p>
            <span>STORE</span>
          </div>

          <div className={styles.contact}>
            <div className={styles.contactBox}>
              <p>join the discussion</p>
              <span>discord</span>
            </div>
            <div className={styles.contactBox}>
              <p>watch</p>
              <span>youtube</span>
            </div>
            <div className={styles.contactBox}>
              <p>listen</p>
              <span>all audio</span>
            </div>
            <div className={styles.contactBox}>
              <p>subscribe</p>
              <span>get notified</span>
            </div>
          </div>
          <div className={styles.sidebarFooter}>
            <p>Privacy Policy</p>
            <p>Terms and conditions</p>
            <p>Copyright 2023</p>
          </div>
        </div>
      </div>
      <div
        className={`${styles.sidebarBackdrop} ${
          sidebarShow ? styles.show : styles.hide
        }`}
      ></div>
    </div>
  );
};

export default Sidebar;
