import React from "react";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import Headshot from "../Headshot";
import Pills from "../Pills";
import { ReducedMotionContext } from "../../contexts/ReducedMotionProvider";
import SlideIntoView from "../SlideIntoView";

function Hero() {
  const shouldReduceMotion = React.useContext(ReducedMotionContext);

  const variantsHeader = {
    start: {
      opacity: 0,
    },
    end: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const variantsLead = {
    start: {
      opacity: 0,
    },
    end: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 3,
      },
    },
    endReducedMotion: {
      opacity: 1,
      transition: {
        duration: 0,
        delay: 3,
      },
    },
  };

  const skills = [
    "HTML5",
    "JavaScript",
    "CSS",
    "React",
    "Vite",
    "Framer Motion",
    "Styled Components",
  ];

  return (
    <SlideIntoView>
      <div className={`wrapper ${styles.heroWrapper}`}>
        <Headshot
          subject="sam"
          altText="A stylised cariacuture of Sam smiling warmly."
          shouldDelay
        />
        <motion.h1
          className={styles.heroHeader}
          variants={variantsHeader}
          initial={shouldReduceMotion ? null : "start"}
          animate="end"
        >
          hire a jnr frontend developer with a growth mindset
        </motion.h1>
      </div>
      <motion.article
        className={styles.leadWrapper}
        variants={variantsLead}
        initial={shouldReduceMotion ? null : "start"}
        animate={shouldReduceMotion ? "endReducedMotion" : "end"}
      >
        <div className="wrapper">
          <h2 className={styles.leadHeader}>
            It's <em>great</em> to meet you. I'm&nbsp;Sam!
          </h2>
          <p className={styles.leadBody}>
            An ex-startup salesperson who realised that the most satisfying part
            of his last role was building <em>on-brand, accessible and fun</em>{" "}
            custom demo instances with CSS to help my team try and land Fortune
            100 companies.
          </p>
          <Pills content={skills} />
        </div>
      </motion.article>
    </SlideIntoView>
  );
}

export default Hero;
