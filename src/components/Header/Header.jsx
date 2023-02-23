import React from "react";
import Logo from "../Logo";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import IconList from "../IconList";
import styles from "./Header.module.css";
import Button from "../Button";
import NavLinks from "../NavLinks/";

function Header() {
  const navItems = [
    { text: "why sam", id: "why" },
    { text: "projects", id: "projects" },
    { text: "FAQs", id: "faqs" },
  ];

  return (
    <header className={styles.wrapper}>
      <nav>
        <div className={styles.leftSide}>
          <Logo />
          <IconList />
        </div>
        <NavLinks data={navItems} />
        <Button variant="letsTalk">let's talk</Button>
        <HamburgerMenu />
      </nav>
    </header>
  );
}

export default React.memo(Header);
