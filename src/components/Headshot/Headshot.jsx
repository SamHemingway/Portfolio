import React from "react";
import styles from "./Headshot.module.css";
import { motion, useInView } from "framer-motion";
import { ReducedMotionContext } from "../../contexts/ReducedMotionProvider";

function Headshot({ subject, altText, shouldDelay }) {
  const ref = React.useRef();

  const isInView = useInView(ref, { once: true });

  const distanceToShift = window.innerWidth * 0.05;
  const variants = {
    start: {
      opacity: 0,
      x: distanceToShift,
      y: distanceToShift,
    },
    end: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        delay: shouldDelay ? 2 : 0,
      },
    },
  };

  const shouldReduceMotion = React.useContext(ReducedMotionContext);

  return (
    <motion.picture
      className={styles.headshot}
      variants={variants}
      initial={shouldReduceMotion ? null : "start"}
      animate={isInView ? "end" : "start"}
      ref={ref}
    >
      <source
        srcSet={`/src/assets/images/${subject}.avif`}
        type="image/avif"
      />
      <source
        srcSet={`/src/assets/images/${subject}.webp`}
        type="image/webp"
      />
      <img
        src={`/src/assets/images/${subject}.png`}
        alt={altText}
      />
    </motion.picture>
  );
}

export default Headshot;
