import React, { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";
import LogoIcon from "../../assets/icons/logo-icon";
import Button from "../../ui/button";
import IgIcon from "../../assets/icons/ig-icon";
import VkIcon from "../../assets/icons/vk-icon";
import FbIcon from "../../assets/icons/fb-icon";
import GplayIcon from "../../assets/icons/gplay-icon";

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // состояние для Off-canvas меню

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(currentScrollPos < prevScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // переключение состояния меню

  return (
    <header
      className={classNames(styles.header, {
        [styles.hidden]: !isVisible,
      })}
    >
      <div className={styles.header_logo}>
        <LogoIcon width="220" height="30" />
      </div>

      <nav className={styles.header_nav}>
        {/* Кнопка для открытия меню в мобильной версии */}
        <div className={styles.header_nav_menu_button}>
          <Button type="menu" onClick={toggleMenu} />
        </div>

        <div className={styles.header_nav_links}>
          <div className={styles.header_nav_links_centered}>
            <Button type="ghost" title="Главная" />
            <Button type="ghost" title="Кейсы" />
            <Button type="ghost" title="Услуги" />
          </div>
          <div className={styles.header_nav_links_centered}>
            <Button type="ghost" theme="white" title="Контакты" />
            <Button type="ghost" theme="white" title="Вакансии" />
            <Button type="ghost" theme="white" title="Новости" />
          </div>
        </div>

        <div
          className={classNames(styles.offCanvasMenu, {
            [styles.open]: isMenuOpen,
          })}
        >
          <div className={styles.close_button}>
            <Button type="cross" onClick={toggleMenu} />
          </div>

          <div className={styles.offCanvas_links}>
            <Button
              type="ghost"
              theme="black"
              title="Главная"
              onClick={toggleMenu}
            />
            <Button
              type="ghost"
              theme="black"
              title="Кейсы"
              onClick={toggleMenu}
            />
            <Button
              type="ghost"
              theme="black"
              title="Услуги"
              onClick={toggleMenu}
            />
            <Button
              type="ghost"
              theme="black"
              title="Контакты"
              onClick={toggleMenu}
            />
            <Button
              type="ghost"
              theme="black"
              title="Вакансии"
              onClick={toggleMenu}
            />
            <Button
              type="ghost"
              theme="black"
              title="Новости"
              onClick={toggleMenu}
            />
          </div>

          <div className={styles.offCanvas_social_icons}>
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
      </nav>
    </header>
  );
};

export default Header;
