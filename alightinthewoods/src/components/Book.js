import React from "react";
import styles from "./Book.module.scss";
const Book = ({ imgUrl, title, index, bookMark }) => {
  return (
    <div className={styles.bookContainer}>
      <img
        className="min-h-screen h-full w-full object-cover aspect-auto"
        src={imgUrl}
        alt="chapter1"
      />
      <div className={styles.bookHoverMask}>
        <div>
          <div className={styles.leftBaton}></div>
          <div className={styles.rightBaton}></div>
          <img
            className={styles.bookConner1}
            src="https://alightinthewoods.net/images/borders/border_corner_piece.svg"
            alt="conner"
          />
          <img
            className={styles.bookConner2}
            src="https://alightinthewoods.net/images/borders/border_corner_piece.svg"
            alt="conner"
          />
          <img
            className={styles.bookConner3}
            src="https://alightinthewoods.net/images/borders/border_corner_piece.svg"
            alt="conner"
          />
          <img
            className={styles.bookConner4}
            src="https://alightinthewoods.net/images/borders/border_corner_piece.svg"
            alt="conner"
          />
        </div>
      </div>
      <div className={styles.bookMask}>
        <img className={styles.bookMark} src={bookMark} alt="chapter1" />
        <span className={styles.borderHorizonTop}></span>
        <div className={styles.bookTitle}>
          Hidden
          <br /> Hollow
        </div>
        <div className={styles.bookNumber}>
          <h1>0{index}</h1>
          <p>BOOK</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
