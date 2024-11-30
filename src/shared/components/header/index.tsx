import React, { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";
import LogoIcon from "../../assets/icons/logo-icon";
import Button from "../../ui/button";
import SocialMediaIcons from "../social-media-icons";

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(currentScrollPos < prevScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
            <SocialMediaIcons theme={"dark"} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
