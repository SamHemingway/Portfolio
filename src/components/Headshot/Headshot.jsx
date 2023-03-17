import React from "react";
import styles from "./Headshot.module.css";
import { motion, useInView } from "framer-motion";
import { AnimationContext } from "../../contexts/AnimationProvider";

function Headshot({ subject, altText, animate = true }) {
  const ref = React.useRef();

  const isInView = useInView(ref, { once: true });

  const { variants } = React.useContext(AnimationContext);

  return (
    <motion.picture
      className={styles.headshot}
      variants={animate && variants.springUp}
      initial="start"
      animate={isInView ? "end" : "start"}
      transition={{ delay: 2 }}
      ref={ref}
    >
      <source
        srcSet={`/assets/images/${subject}.avif`}
        type="image/avif"
      />
      <source
        srcSet={`/assets/images/${subject}.webp`}
        type="image/webp"
      />
      <img
        src={`/assets/images/${subject}.png`}
        alt={altText}
      />
    </motion.picture>
  );
}

export default Headshot;
