import React, { useState } from "react";
import styles from "./Book.module.css";
const Book = ({ imgUrl, title, index, bookMark }) => {
  const [bookOpenState, setBookOpenState] = useState(false);

  const handleOpenBook = () => {
    setBookOpenState(!bookOpenState);
  };
  return (
    <div
      className={`${styles.bookContainer} ${bookOpenState && styles.bookOpen}`}
      onClick={handleOpenBook}
    >
      <img
        className="min-w-full aspect-auto object-cover absolute top-0 left-0 min-h-screen"
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
