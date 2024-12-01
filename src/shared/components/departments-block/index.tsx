import React, { useState } from "react";
import styles from "./index.module.scss";
import DepartmentCard from "../../ui/department-card";
import ArrowRightIcon from "../../assets/icons/arrow-right-icon";
import Button from "../../ui/button";
import FeedbackPopup from "../feedback-popup";
import SuccessPopup from "../success-popup"; // Убедитесь, что этот компонент существует

const DepartmentsBlock: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false); // Состояние для попапа успеха

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleCloseSuccessPopup = () => {
    setIsSuccessPopupOpen(false);
  };

  return (
    <div className={styles.widget}>
      <div className={styles.widget_grid}>
        <DepartmentCard
          title="вэб"
          description="Разработка и поддержка порталов, сайтов, web-приложений, и много много много всего умеем."
        />
        <DepartmentCard
          title="приложения"
          description="Разработка и поддержка порталов, сайтов, web-приложений, и много много много всего умеем."
        />
        <DepartmentCard
          title="blockchain"
          description="Разработка и поддержка порталов, сайтов, web-приложений, и много много много всего умеем."
        />
        <DepartmentCard
          title="игры"
          description="Разработка и поддержка порталов, сайтов, web-приложений, и много много много всего умеем."
        />
        <DepartmentCard
          title="дизайн"
          description="Разработка и поддержка порталов, сайтов, web-приложений, и много много много всего умеем."
        />
        <DepartmentCard
          title="интернет-маркетинг"
          description="Разработка и поддержка порталов, сайтов, web-приложений, и много много много всего умеем."
        />

        <div className={styles.widget_info}>
          <span className={styles.widget_text}>консультируем :)</span>
          <ArrowRightIcon />
        </div>

        <div className={styles.widget_button}>
          <Button
            type="light"
            title="Свяжитесь с нами"
            onClick={handleOpenPopup}
          />
        </div>
      </div>

      {isPopupOpen && (
        <FeedbackPopup
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          onSubmit={() => {
            setIsPopupOpen(false);
            setIsSuccessPopupOpen(true); // Открываем попап успеха
          }}
        />
      )}

      {isSuccessPopupOpen && (
        <SuccessPopup onClose={handleCloseSuccessPopup} />
      )}
    </div>
  );
};

export default DepartmentsBlock;
