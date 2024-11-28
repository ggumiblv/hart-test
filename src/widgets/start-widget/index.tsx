import React from "react";
import styles from "./index.module.scss";
import ArrowRightIcon from "../../shared/assets/icons/arrow-right-icon";
import InfoCard from "../../shared/ui/info-card";

const StartBlock: React.FC = () => {
  const words = ["проектируем", "разрабатываем", "внедряем", "сопровождаем"];

  return (
    <div className={styles.startBlock}>
      <div className={styles.startBlock_title}>
        <h1 className={styles.startBlock_title_h}>
          Цифровые решения <br /> для бизнеса и государства
        </h1>

        <div className={`${styles.words} ${styles.desktopWords}`}>
          {words.map((word, index) => (
            <React.Fragment key={index}>
              <span>{word}</span>
              {index < words.length - 1 && <ArrowRightIcon />}
            </React.Fragment>
          ))}
        </div>

        <div className={`${styles.words} ${styles.mobileWords}`}>
          {words.map((word, index) => (
            <div key={index} className={styles.wordWithIcon}>
              <ArrowRightIcon />
              <span>{word}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.startBlock_info}>
        <InfoCard text="Заказная разработка программного обеспечения" />
        <InfoCard text="Автоматизация бизнес-процессов" />
        <InfoCard text="Цифровая трансформация бизнеса и государства" />
        <InfoCard text="Техническая поддержка информационных систем" />
      </div>
    </div>
  );
};

export default StartBlock;
