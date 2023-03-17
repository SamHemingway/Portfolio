import React from "react";
import Logo from "../Logo";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import IconList from "../IconList";
import styles from "./Header.module.css";
import Button from "../Button";
import NavLinks from "../NavLinks/";
import { motion } from "framer-motion";
import { AnimationContext } from "../../contexts/AnimationProvider";
import { PopupButton } from "react-calendly";

function Header({ menuIsOpen, setMenuIsOpen }) {
  const { variants } = React.useContext(AnimationContext);
  const navItems = [
    { text: "why sam", id: "#why" },
    { text: "projects", id: "#projects" },
    { text: "FAQs", id: "#faqs" },
  ];

  return (
    <motion.header
      className={styles.wrapper}
      variants={variants.springDown}
      initial="start"
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
          as="div"
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
