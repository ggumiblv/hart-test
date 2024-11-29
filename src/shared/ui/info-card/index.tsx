import React from "react";
import styles from "./index.module.scss";

interface InfoCardProps {
  text: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ text }) => {
  return (
    <div className={styles.infoCard}>
      <p>{text}</p>
    </div>
  );
};

export default InfoCard;

// <InfoCard text={"Заказная разработка программного обеспечения"} /> <br />
// <InfoCard text={"Цифровая трансформация бизнеса и государства"} /> <br />
// <InfoCard text={"Автоматизация бизнес-процессов"} /> <br />
// <InfoCard text={"Техническая поддержка информационных систем"} /> <br />
