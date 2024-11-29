import styles from "./index.module.scss";
import NewsCard from "../../ui/news-card";
import NewsIcon from "../../assets/icons/news-icon";

const NewsBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <NewsIcon />
      </div>

      <div className={styles.newsCards}>
        <NewsCard
          date={"10 октября 2021"}
          title={"Заголовок новости в одну строку"}
          text={
            "С 2005 года White Frame тесно сотрудничает с клиентами, чтобы воплотить их идеи в жизнь в виде мощного программного обеспечения."
          }
        />
        <NewsCard
          date={"10 октября 2021"}
          titleColor="secondary"
          title={"Заголовок новости в две строки, потому что так тоже бывает"}
          text={
            "С 2005 года White Frame тесно сотрудничает с клиентами, чтобы воплотить их идеи в жизнь в виде мощного программного обеспечения."
          }
        />
        <NewsCard
          date={"10 октября 2021"}
          title={"Заголовок новости в одну строку"}
          text={
            "С 2005 года White Frame тесно сотрудничает с клиентами, чтобы воплотить их идеи в жизнь в виде мощного программного обеспечения."
          }
        />
      </div>
    </div>
  );
};

export default NewsBlock;
