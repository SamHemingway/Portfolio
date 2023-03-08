import React from "react";
import styles from "./Logo.module.css";
function Logo({ menuIsOpen }) {
  return (
    <a
      href="#"
      aria-label="Home"
      className={styles.logo}
      // fix for a really weird bug where logo shifted when menu was opened up
      style={menuIsOpen ? { position: "relative", right: "0.75px" } : null}
    >
      sam<strong>hemingway</strong>
    </a>
  );
}

export default Logo;
