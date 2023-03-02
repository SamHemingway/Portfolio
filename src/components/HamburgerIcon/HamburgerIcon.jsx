import React from "react";
import styles from "./HamburgerIcon.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { ReducedMotionContext } from "../../contexts/ReducedMotionProvider";
import useScrollbarWidth from "../../hooks/useScrollbarWidth";

function HamburgerIcon({ menuIsOpen, toggleHandler }) {
  const shouldReduceMotion = React.useContext(ReducedMotionContext);
  let animation = menuIsOpen ? "open" : "closed";

  const variantsBox = {
    open: !shouldReduceMotion ? undefined : { fill: "black" },
  };

  const variantsLine1 = {
    open: shouldReduceMotion
      ? undefined
      : { d: "M 25 25 L 75 75", stroke: "white" },
  };
  const variantsLine2 = {
    open: shouldReduceMotion ? undefined : { opacity: 0 },
  };
  const variantsLine3 = {
    open: shouldReduceMotion
      ? undefined
      : { d: "M 25 75 L 75 25", stroke: "white" },
  };

  const scrollbarWidth = useScrollbarWidth();

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
