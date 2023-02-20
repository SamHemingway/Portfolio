import React from "react";
import styles from "./Logo.module.css";
function Logo() {
  return (
    <a
      href="/"
      aria-label="Home"
      className={styles.logo}
    >
      sam<strong>hemingway</strong>
    </a>
  );
}

export default Logo;
