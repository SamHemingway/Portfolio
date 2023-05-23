import React from "react";
import styles from "./Button.module.css";
function Button({ children, variant, stretch, size, tabIndex, ...delegated }) {
  let computedStyles = ` ${styles.button}`;
  if (variant) computedStyles += ` ${styles[variant]}`;
  if (stretch) computedStyles += ` ${styles.stretch}`;
  if (size) computedStyles += ` ${styles[size]}`;

  const hasButtonChild = React.Children.toArray(children).some((child) => {
    return child.type.name === "PopupButton2";
  });

  return hasButtonChild ? (
    <div
      className={computedStyles}
      tabIndex={tabIndex}
    >
      {children}
    </div>
  ) : (
    <button
      className={computedStyles}
      tabIndex={tabIndex}
      {...delegated}
    >
      {children}
    </button>
  );
}

export default Button;
