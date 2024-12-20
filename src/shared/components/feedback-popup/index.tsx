import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import ArrowRightIcon from "../../assets/icons/arrow-right-icon";
import Button from "../../ui/button";
import Input from "../../ui/input";

interface FeedbackPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;  
}

const FeedbackPopup: React.FC<FeedbackPopupProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  const handleSubmit = async () => {
    setLoading(true);
    setError(""); 
  
    try {
      const response = await mockFetchRequest({ name, phone, comment });
  
      if (response.status === 200) {
        console.log('успех');
        onSubmit();
      } else {
        setError("error");
      }
    } catch (err) {
      setError("error");
    } finally {
      setLoading(false);
    }
  };
  
  const mockFetchRequest = (data: { name: string; phone: string; comment: string }) => {
    return new Promise<{ status: number }>((resolve) => {
      setTimeout(() => {
        resolve({ status: 200 });  
      }, 1500); 
    });
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
                size={isMobile ? "input" : "textarea"}
                placeholder="Комментарий"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <div className={styles.column}>
              <Button
                type="dark"
                title={loading ? "Отправка..." : "Отправить"}
                onClick={handleSubmit}
                disabled={loading}
              />
            </div>
            {error && <div className={styles.errorMessage}>{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPopup;
