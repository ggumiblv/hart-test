import React from "react";
import FooterIcon from "../../assets/icons/footer-icon";
import Button from "../button";
import IgIcon from "../../assets/icons/ig-icon";
import VkIcon from "../../assets/icons/vk-icon";
import FbIcon from "../../assets/icons/fb-icon";
import GplayIcon from "../../assets/icons/gplay-icon";
import styles from "./index.module.scss";

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
        <div className={styles.footer_social_icons}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IgIcon width="24" height="24" />
          </a>
          <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
            <VkIcon width="24" height="24" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FbIcon width="24" height="24" />
          </a>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GplayIcon width="24" height="24" />
          </a>
        </div>
      </div>

      <div className={styles.footer_bottom}>
        <div className={styles.footer_info}>
          <a href="tel:+78431234567" className={styles.footer_link}>
            +7 843 123 45 67
          </a>
          <a href="mailto:info@whiteframe.ru" className={styles.footer_link}>
            info@whiteframe.ru
          </a>
        </div>

        <div className={styles.footer_copyright}>
          © 2021 – White Frame,
          Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
