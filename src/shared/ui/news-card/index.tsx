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

// < NewsCard date={"10 октября 2021"} title={"Заголовок новости в одну строку"} text={"С 2005 года White Frame тесно сотрудничает с клиентами, чтобы воплотить их идеи в жизнь в виде мощного программного обеспечения. "} />
// <br />
// < NewsCard date={"10 октября 2021"} titleColor="secondary" title={"Заголовок новости в две строки, потому что так тоже бывает"} text={"С 2005 года White Frame тесно сотрудничает с клиентами, чтобы воплотить их идеи в жизнь в виде мощного программного обеспечения. "} />
// <br />
// < NewsCard date={"10 октября 2021"} title={"Заголовок новости в одну строку"} text={"С 2005 года White Frame тесно сотрудничает с клиентами, чтобы воплотить их идеи в жизнь в виде мощного программного обеспечения. "} />
