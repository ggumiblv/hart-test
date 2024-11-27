import React, { useState } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";
import CrossIcon from "../../assets/icons/cross-icon";
import CrossIconHover from "../../assets/icons/cross-icon-hover";
import MenuIcon from "../../assets/icons/menu-icon"; 

export type ButtonType = "ghost" | "light" | "cross" | "dark" | "circle" | "menu"; 

interface ButtonProps {
  type: ButtonType;
  title?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type, title, disabled = false, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonClass = classNames(styles.button, styles[type], {
    [styles.disabled]: disabled,
  });

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <button
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={title}
    >
      {type === "cross" ? (
        isHovered ? (
          <CrossIconHover width="20" height="20" stroke="black" />
        ) : (
          <CrossIcon width="20" height="20" stroke="black" />
        )
      ) : type === "menu" ? (
        <MenuIcon width="24" height="24" /> 
      ) : (
        title
      )}
    </button>
  );
};

export default Button;
