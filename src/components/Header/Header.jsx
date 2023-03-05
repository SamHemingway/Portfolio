import React, { useEffect } from "react";
import Logo from "../Logo";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import IconList from "../IconList";
import styles from "./Header.module.css";
import Button from "../Button";
import NavLinks from "../NavLinks/";
import { motion } from "framer-motion";
import { AnimationContext } from "../../contexts/AnimationProvider";

function Header({ menuIsOpen, setMenuIsOpen }) {
  const { shouldReduceMotion, revealTimer } =
    React.useContext(AnimationContext);
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
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 50,
      },
    },
  };

  return (
    revealTimer && (
      <motion.header
        className={styles.wrapper}
        variants={variants}
        initial={shouldReduceMotion ? null : "start"}
        animate="finish"
      >
        <nav>
          <div className={styles.leftSide}>
            <Logo menuIsOpen={menuIsOpen} />
            <IconList />
          </div>
          <NavLinks data={navItems} />
          <Button variant="letsTalk">let's talk</Button>
          <HamburgerMenu
            menuIsOpen={menuIsOpen}
            setMenuIsOpen={setMenuIsOpen}
          />
        </nav>
      </motion.header>
    )
  );
}

export default React.memo(Header);
