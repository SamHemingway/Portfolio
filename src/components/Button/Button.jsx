import React from "react";
import styles from "./Button.module.css";
function Button({ children, variant, stretch, size, tabIndex }) {
  let computedStyles = ` ${styles.button}`;
  if (variant) computedStyles += ` ${styles[variant]}`;
  if (stretch) computedStyles += ` ${styles.stretch}`;
  if (size) computedStyles += ` ${styles[size]}`;

  return (
    <button
      className={computedStyles}
      tabIndex={tabIndex}
    >
      {children}
    </button>
  );
}

export default Button;
