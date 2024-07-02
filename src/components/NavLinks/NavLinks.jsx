import React from "react";
import styles from "./NavLinks.module.css";

function NavLinks({ data }) {
  return (
    <ul className={styles.navBar}>
      {data.map((item) => {
        return (
          <li
            role="menuitem"
            className={styles.navItem}
            key={item.id}
          >
            <a
              href={item.id}
              className={styles.navLink}
            >
              {item.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default NavLinks;
