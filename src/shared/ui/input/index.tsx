import React, { useState } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

export type Theme = "light" | "dark";
export type Size = "input" | "textarea"; 

interface InputProps {
  theme: Theme;
  size: Size;  
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Input: React.FC<InputProps> = ({
  theme,
  size,
  placeholder,
  value = "", 
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const inputClass = classNames(styles.input, styles[theme], styles[size], {
    [styles.active]: isFocused,
    [styles.filled]: value.length > 0,
  });

  if (size === "textarea") {
    return (
      <textarea
        className={inputClass}
        placeholder={placeholder}
        value={value || ""} 
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    );
  }

  return (
    <input
      className={inputClass}
      placeholder={placeholder}
      value={value || ""} 
      onChange={onChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default Input;
