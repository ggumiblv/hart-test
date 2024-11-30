import React from "react";
import FooterIcon from "../../assets/icons/footer-icon";
import Button from "../../ui/button";
import styles from "./index.module.scss";
import Link from "../../ui/link";
import SocialMediaIcons from "../social-media-icons";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_top}>
        <FooterIcon width="20" height="20" stroke="white" fill="white" />
        <div className={styles.footer_nav_links}>
          <Button type="ghost" title="Главная" />
          <Button type="ghost" title="Кейсы" />
          <Button type="ghost" title="Услуги" />
          <Button type="ghost" title="Контакты" />
          <Button type="ghost" title="Вакансии" />
          <Button type="ghost" title="Новости" />
        </div>
        <SocialMediaIcons theme={"light"} />
      </div>

      <div className={styles.footer_bottom}>
        <div className={styles.footer_info}>
          <Link text={"+7 843 123 45 67"} href={""} />
          <Link text={"info@whiteframe.ru"} href={""} />
        </div>

        <div className={styles.footer_copyright}>
          © 2021 – White Frame, Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
