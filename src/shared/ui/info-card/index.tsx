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
