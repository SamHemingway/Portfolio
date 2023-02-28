import React from "react";
import Logo from "../Logo";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import IconList from "../IconList";
import styles from "./Header.module.css";
import Button from "../Button";
import NavLinks from "../NavLinks/";
import { motion } from "framer-motion";

function Header() {
  const navItems = [
    { text: "why sam", id: "why" },
    { text: "projects", id: "projects" },
    { text: "FAQs", id: "faqs" },
  ];

  const variants = {
    start: {
      opacity: 0,
      y: -50,
    },
    finish: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        delay: 1,
        type: "spring",
        stiffness: 50,
      },
    },
  };

  return (
    <motion.header
      className={styles.wrapper}
      variants={window.scrollY === 0 && variants}
      initial="start"
      animate="finish"
    >
      <nav>
        <div className={styles.leftSide}>
          <Logo />
          <IconList />
        </div>
        <NavLinks data={navItems} />
        <Button variant="letsTalk">let's talk</Button>
        <HamburgerMenu />
      </nav>
    </motion.header>
  );
}

export default React.memo(Header);
