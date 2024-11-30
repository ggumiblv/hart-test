import React from "react";
import styles from "./index.module.scss";
import FbIcon from "../../assets/icons/fb-icon";
import GplayIcon from "../../assets/icons/gplay-icon";
import IgIcon from "../../assets/icons/ig-icon";
import VkIcon from "../../assets/icons/vk-icon";

interface SocialMediaIconsProps {
  theme: "light" | "dark";
}

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({
  theme = "light",
}) => {
  return (
    <div
      className={`${styles.social_icons} ${
        theme === "dark" ? styles.dark : ""
      }`}
    >
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <IgIcon width="24" height="24" />
      </a>
      <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
        <VkIcon width="24" height="24" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
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
  );
};

export default SocialMediaIcons;
