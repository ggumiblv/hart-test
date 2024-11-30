import React from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

type NewsCardProps = {
  date: string;
  title: string;
  titleColor?: "primary" | "secondary";
  text: string;
};

const NewsCard: React.FC<NewsCardProps> = ({
  date,
  title,
  titleColor = "primary",
  text,
}) => {
  return (
    <div className={styles.newsCard}>
      <div className={styles.newsCard_title}>
        <p className={styles.newsCard_title_date}>{date}</p>
        <h3
          className={classNames(
            styles.newsCard_title_title,
            styles[titleColor],
          )}
        >
          {title}
        </h3>
      </div>
      <p className={styles.newsCard_text}>{text}</p>
    </div>
  );
};

export default NewsCard;
