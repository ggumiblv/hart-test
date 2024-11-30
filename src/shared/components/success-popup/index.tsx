import React from "react";
import styles from "./index.module.scss";
import LetterIcon from "../../assets/icons/letter-icon";
import Button from "../../ui/button";

interface SuccessPopupProps {
  onClose: () => void;
}

const SuccessPopup: React.FC<SuccessPopupProps> = ({ onClose }) => {
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <div className={styles.icon}>
          <LetterIcon />
        </div>
        <div className={styles.textBlock}>
          <h3>Сообщение отправлено</h3>
          <p>Наши менеджеры свяжутся с вами в ближайшее время.</p>
        </div>
        <Button type="dark" title="Закрыть" onClick={onClose} />
      </div>
    </div>
  );
};

export default SuccessPopup;
