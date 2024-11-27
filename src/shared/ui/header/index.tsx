import React, { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";
import LogoIcon from "../../assets/icons/logo-icon";
import Button from "../button";

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(currentScrollPos < prevScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

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
          <Button type="menu" onClick={() => console.log("Menu clicked")} />
        </div>
        <div className={styles.header_nav_links}>
          <div className={styles.header_nav_links_centered}>
            <Button type="ghost" title="Главная" />
            <Button type="ghost" title="Кейсы" />
            <Button type="ghost" title="Услуги" />
          </div>
          <div className={styles.header_nav_links_centered}>
            <Button type="ghost" title="Контакты" />
            <Button type="ghost" title="Вакансии" />
            <Button type="ghost" title="Новости" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
