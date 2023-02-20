import React from "react";
import styles from "./Button.module.css";
function Button({ children, variant, stretch, size }) {
  let computedStyles = ``;
  if (variant) computedStyles += `${styles[variant]}`;
  if (stretch) computedStyles += ` ${styles.stretch}`;
  if (size) computedStyles += ` ${styles[size]}`;

  return <button className={computedStyles}>{children}</button>;
}

export default Button;
