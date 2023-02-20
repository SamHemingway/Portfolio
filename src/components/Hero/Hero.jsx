import React from "react";
import styles from "./Hero.module.css";
import { motion, useReducedMotion } from "framer-motion";

function Hero() {
  const variants = {
    start: {
      opacity: 0,
      y: 100,
    },
    end: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.section
      layout
      className={`wrapper ${styles.heroWrapper}`}
    >
      <motion.h1
        className={styles.heroHeader}
        variants={variants}
        initial="start"
        animate="end"
      >
        here's some header text that is a placeholder for now
      </motion.h1>
    </motion.section>
  );
}

export default Hero;
