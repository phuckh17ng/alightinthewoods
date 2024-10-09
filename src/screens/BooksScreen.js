import React from "react";
import Book from "../components/Book";
import styles from "./BooksScreen.module.css";

const data = [
  {
    url: require("../assets/ch1_cover.png"),
    bookMark: "https://alightinthewoods.net/images/icon-chapter1.svg",
    title: "Hidden <br /> Hollow",
  },
  {
    url: require("../assets/ETW-Hiding.png"),
    bookMark: "https://alightinthewoods.net/images/icon-chapter2.svg",
    title: "Hidden <br /> Hollow",
  },
  {
    url: require("../assets/ch5_cover.png"),
    bookMark: "https://alightinthewoods.net/images/icon-chapter3.svg",
    title: "Hidden <br /> Hollow",
  },
  {
    url: require("../assets/ch4_cover.png"),
    bookMark: "https://alightinthewoods.net/images/icon-chapter4.svg",
    title: "Hidden <br /> Hollow",
  },
  {
    url: require("../assets/ch2_cover.png"),
    bookMark: "https://alightinthewoods.net/images/icon-chapter5.svg",
    title: "Hidden <br /> Hollow",
  },
  {
    url: require("../assets/Fog_Small.png"),
    bookMark: "https://alightinthewoods.net/images/icon-chapter6.svg",
    title: "Hidden <br /> Hollow",
  },
];
const BooksScreen = () => {
  return (
    <div className={styles.container}>
      {data.map((item, index) => {
        return (
          <Book
            key={index}
            title={item.title}
            imgUrl={item.url}
            bookMark={item.bookMark}
            index={index + 1}
          />
        );
      })}
    </div>
  );
};

export default BooksScreen;
