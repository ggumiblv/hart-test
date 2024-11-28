import React from 'react';
import styles from './index.module.scss';

interface SwiperCardProps {
  imageSrc: string; 
  text: string;
}

const SwiperCard: React.FC<SwiperCardProps> = ({ imageSrc, text }) => {
  return (
    <div className={styles.swiperCard}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={text} />
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default SwiperCard;
