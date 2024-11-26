import React from "react";
import classNames from "classnames";
import styles from "./index.module.scss"; 

interface LinkProps {
  href: string;
  title?: string;
  onClick?: () => void;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top"; 
}

const Link: React.FC<LinkProps> = ({
  href,
  title,
  onClick,
  className,
  target = "_self",
}) => {
  const linkClass = classNames(styles.link, className);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <a
      href={href}
      className={linkClass}
      onClick={handleClick}
      aria-label={title}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {title}
    </a>
  );
};

export default Link;
