import React from "react";
import styles from "./index.module.scss";
import DepartmentCard from "../../shared/ui/department-card";
import ArrowRightIcon from "../../shared/assets/icons/arrow-right-icon";
import Button from "../../shared/ui/button";

const DepartmentsWidget: React.FC = () => {
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
          <Button type="light" title="Свяжитесь с нами" />
        </div>
      </div>
    </div>
  );
};

export default DepartmentsWidget;
