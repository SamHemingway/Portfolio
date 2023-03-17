import React from "react";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import Headshot from "../Headshot";
import Pills from "../Pills";
import { AnimationContext } from "../../contexts/AnimationProvider";

function Hero() {
  const { variants } = React.useContext(AnimationContext);

  const skills = [
    "HTML5",
    "JavaScript",
    "CSS",
    "React",
    "Vite",
    "Framer Motion",
    "CSS Modules",
    "JSDoc",
  ];

  return (
    <>
      <div className={`wrapper ${styles.heroWrapper}`}>
        <Headshot
          subject="sam"
          altText="A stylised cariacuture of Sam smiling warmly."
        />
        <motion.h1
          className={styles.heroHeader}
          variants={variants.fadeNoDelay}
          initial="start"
          animate="end"
        >
          hire a jnr frontend developer with a growth mindset
        </motion.h1>
      </div>
      <motion.section
        className={styles.leadWrapper}
        variants={variants.fade}
        initial={"start"}
        animate={"end"}
      >
        <div className="wrapper">
          <h2 className={styles.leadHeader}>
            <span role="text">
              It's <em>great</em> to meet you. I'm Sam!
            </span>
          </h2>
          <p
            role="text"
            className={styles.leadBody}
          >
            An ex-startup salesperson who realised that the most satisfying part
            of his last role was building <em>on-brand, accessible and fun</em>{" "}
            custom demo instances with CSS to help my team try and land Fortune
            100 companies.
          </p>
          <p
            role="text"
            className={styles.leadBody}
          >
            After getting laid off, I thought to myself: "That was fun. Let's
            learn more".
          </p>
          <p
            role="text"
            className={styles.leadBody}
          >
            Now, here we are: attempting a career change whilst most tech
            companies are cutting down on staff, rather than adding them.
          </p>
          <p
            role="text"
            className={styles.leadBody}
          >
            <em>Perfect timing</em> 👌
          </p>
          <Pills content={skills} />
        </div>
      </motion.section>
    </>
  );
}

export default Hero;
