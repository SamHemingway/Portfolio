import React from "react";
import Logo from "../Logo";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import IconList from "../IconList";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.wrapper}>
      <nav>
        <div className={styles.leftSide}>
          <Logo />
          <IconList />
        </div>
        <ul className={styles.navBar}>
          <li
            role="menuitem"
            className={styles.navLink}
          >
            <a href="#">why sam?</a>
          </li>
          <li
            role="menuitem"
            className={styles.navLink}
          >
            <a href="#">projects</a>
          </li>
          <li
            role="menuitem"
            className={styles.navButton}
          >
            <button>let's talk</button>
          </li>
        </ul>
        <HamburgerMenu />
      </nav>
    </header>
  );
}

export default React.memo(Header);
