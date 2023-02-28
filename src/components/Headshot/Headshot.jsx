import React from "react";
import styles from "./Headshot.module.css";
import { motion } from "framer-motion";
function Headshot({ subject, altText }) {
  const variants = {
    start: {
      opacity: 0,
      x: 50,
      y: 50,
    },
    end: {
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
    <motion.picture
      className={styles.headshot}
      variants={variants}
      initial="start"
      animate="end"
    >
      <source
        srcSet={`src/assets/images/${subject}.avif`}
        type="image/avif"
      />
      <source
        srcSet={`src/assets/images/${subject}.webp`}
        type="image/webp"
      />
      <img
        src={`src/assets/images/${subject}.png`}
        alt={altText}
      />
    </motion.picture>
  );
}

export default Headshot;
