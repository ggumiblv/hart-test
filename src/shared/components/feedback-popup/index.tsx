import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import ArrowRightIcon from "../../assets/icons/arrow-right-icon";
import Button from "../../ui/button";
import Input from "../../ui/input";

interface FeedbackPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeedbackPopup: React.FC<FeedbackPopupProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700); // Определяем, мобильное устройство или нет

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    console.log({
      name,
      phone,
      comment,
    });
    setName("");
    setPhone("");
    setComment("");
  };

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <div className={styles.arrowIcon}>
          <ArrowRightIcon />
        </div>
        <div className={styles.form}>
          <div className={styles.formHeader}>
            Свяжитесь с нами
            <Button type="cross" onClick={onClose} />
          </div>
          <div className={styles.formContent}>
            <div className={styles.column}>
              <Input
                theme="light"
                size="input"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                theme="light"
                size="input"
                placeholder="Телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className={styles.column}>
              <Input
                theme="light"
                size={isMobile ? "input" : "textarea"} // Меняем размер в зависимости от ширины экрана
                placeholder="Комментарий"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <div className={styles.column}>
              <Button type="dark" title="Отправить" onClick={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPopup;
