import React from "react";
import Logo from "../Logo";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import IconList from "../IconList";
import styles from "./Header.module.css";
import Button from "../Button";
import NavLinks from "../NavLinks/";
import { motion } from "framer-motion";
import { ReducedMotionContext } from "../../contexts/ReducedMotionProvider";
import { PopupButton } from "react-calendly";

function Header({ menuIsOpen, setMenuIsOpen }) {
  const shouldReduceMotion = React.useContext(ReducedMotionContext);
  const navItems = [
    { text: "why sam", id: "#why" },
    { text: "projects", id: "#projects" },
    { text: "FAQs", id: "#faqs" },
  ];

  const variants = {
    start: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -50,
    },
    finish: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        delay: 3,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.header
      className={styles.wrapper}
      variants={window.scrollY === 0 && variants}
      initial={shouldReduceMotion ? null : "start"}
      animate="finish"
    >
      <nav>
        <div className={styles.leftSide}>
          <Logo menuIsOpen={menuIsOpen} />
          <IconList />
        </div>
        <NavLinks data={navItems} />
        <Button
          variant="letsTalk"
          tabIndex={-1}
        >
          <PopupButton
            url="https://calendly.com/hemingway/hiresam"
            rootElement={document.getElementById("root")}
            text="Let's talk"
            styles={{
              background: "none",
              border: "none",
              cursor: "pointer",
              textTransform: "uppercase",
            }}
          />
        </Button>
        <HamburgerMenu
          menuIsOpen={menuIsOpen}
          setMenuIsOpen={setMenuIsOpen}
        />
      </nav>
    </motion.header>
  );
}

export default React.memo(Header);
