import React from "react";
import styles from "./HamburgerIcon.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";

function HamburgerIcon({ menuIsOpen, toggleHandler, shouldReduceMotion }) {
  let animation = menuIsOpen ? "open" : "closed";

  const variantsBox = {
    open: !shouldReduceMotion ? undefined : { fill: "white" },
  };

  const variantsLine1 = {
    open: shouldReduceMotion ? undefined : { d: "M 25 25 L 75 75" },
  };
  const variantsLine2 = {
    open: shouldReduceMotion ? undefined : { opacity: 0 },
  };
  const variantsLine3 = {
    open: shouldReduceMotion ? undefined : { d: "M 25 75 L 75 25" },
  };

  function handleScrollbarMovement() {
    // Create a div with a scrollbar
    const div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflow = "scroll";
    div.style.position = "absolute";
    div.style.top = "-9999px";
    document.body.appendChild(div);

    // Measure the width of the scrollbar
    const scrollbarWidth = div.offsetWidth - div.clientWidth;

    // Remove the div from the DOM
    document.body.removeChild(div);

    return scrollbarWidth;
  }

  const scrollbarWidth = handleScrollbarMovement();

  return (
    <Dialog.Trigger
      className={styles.icon}
      onClick={toggleHandler}
      style={
        menuIsOpen && scrollbarWidth
          ? { position: "relative", right: `${scrollbarWidth}px` }
          : null
      }
    >
      <motion.svg
        viewBox="2.5 2.5 95 95"
        className={styles.svg}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
      >
        <defs>
          <linearGradient
            id="gradient-0"
            x1="50"
            x2="50"
            y1="2.5"
            y2="97.5"
            gradientUnits="userSpaceOnUse"
            spreadMethod="pad"
          >
            <stop
              offset="0"
              stopColor="#FFF"
              stopOpacity="0.2"
            ></stop>
            <stop
              offset="1"
              stopColor="#FFF"
              stopOpacity="0.05"
            ></stop>
          </linearGradient>
        </defs>
        <motion.rect
          width="95"
          height="95"
          x="2.5"
          y="2.5"
          fill="url(#gradient-0)"
          ry="10"
          variants={variantsBox}
          animate={animation}
        ></motion.rect>
        <motion.path
          className={styles.line}
          d="M 20 30 L 80 30"
          strokeLinecap="round"
          variants={variantsLine1}
          animate={animation}
        ></motion.path>
        <motion.path
          className={styles.line}
          d="M 20 50 L 80 50"
          strokeLinecap="round"
          variants={variantsLine2}
          transition={{ duration: 0.1 }}
          animate={animation}
          opacity="1"
        ></motion.path>
        <motion.path
          className={styles.line}
          d="M 20 70 L 80 70"
          strokeLinecap="round"
          variants={variantsLine3}
          animate={animation}
        ></motion.path>
      </motion.svg>
      <span className="sr-only">Menu</span>
    </Dialog.Trigger>
  );
}

export default HamburgerIcon;
