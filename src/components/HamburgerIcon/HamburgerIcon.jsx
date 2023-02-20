import React from "react";
import styles from "./HamburgerIcon.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";

function HamburgerIcon({ menuIsOpen, toggleHandler, shouldReduceMotion }) {
  let animation = menuIsOpen ? "end" : undefined;

  const variantsBox = {
    end: !shouldReduceMotion ? undefined : { fill: "white" },
  };

  const variantsLine1 = {
    end: shouldReduceMotion ? undefined : { d: "M25 45h80M20", rotate: 45 },
  };
  const variantsLine2 = {
    end: shouldReduceMotion ? undefined : { opacity: 0 },
  };
  const variantsLine3 = {
    end: shouldReduceMotion ? undefined : { d: "M23.75 56.25h80", rotate: -45 },
  };

  return (
    <Dialog.Trigger
      className={styles.icon}
      onClick={toggleHandler}
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
          d="M20 30h60M20"
          strokeLinecap="round"
          variants={variantsLine1}
          animate={animation}
        ></motion.path>
        <motion.path
          className={styles.line}
          d="M20 50h60M20"
          strokeLinecap="round"
          variants={variantsLine2}
          transition={{ duration: 0.1 }}
          animate={animation}
          opacity="1"
        ></motion.path>
        <motion.path
          className={styles.line}
          d="M20 70h60"
          strokeLinecap="round"
          variants={variantsLine3}
          animate={animation}
        ></motion.path>
      </motion.svg>
      <span class="sr-only">Menu</span>
    </Dialog.Trigger>
  );
}

export default HamburgerIcon;
