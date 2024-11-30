import React from "react";
import styles from "./index.module.scss";

interface LinkProps {
  text: string;
  href: string;
}

const Link: React.FC<LinkProps> = ({ text, href }) => {
  return (
    <a href={href} className={styles.link}>
      {text}
    </a>
  );
};

export default Link;
