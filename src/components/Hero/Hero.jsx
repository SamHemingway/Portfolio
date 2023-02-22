import React from "react";
import styles from "./Hero.module.css";
import { motion, useReducedMotion } from "framer-motion";
import Headshot from "../Headshot";
import Pills from "../Pills";

function Hero() {
  const variants = {
    start: {
      opacity: 0,
    },
    end: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const skills = [
    "HTML5",
    "CSS",
    "JavaScript",
    "React",
    "Vite",
    "Framer Motion",
    "Radix UI",
    "CSS Modules",
    "Styled Components",
  ];

  return (
    <section>
      <div className={`${styles.heroWrapper} wrapper`}>
        <Headshot
          subject="sam"
          altText="A stylised cariacuture of Sam smiling warmly."
        />
        <motion.h1
          className={styles.heroHeader}
          variants={variants}
          initial="start"
          animate="end"
        >
          hire a jnr frontend developer with a growth mindset
        </motion.h1>
      </div>
      <article className={styles.leadWrapper}>
        <div className={`wrapper`}>
          <h2>It's great to meet you.</h2>
          <p>
            I'm Sam: an experienced SaaS startup salesperson who realised that
            the most satisfying part of his last role was building{" "}
            <em>on-brand, accessible and fun</em> custom demo instances with CSS
            to help my team try and land Fortune 100 companies.
          </p>
        </div>
      </article>
      <Pills
        content={skills}
        style={{
          inlineSize: "clamp(343px, 90vw, 1080px)",
          marginInline: "auto",
        }}
      />
    </section>
  );
}

export default Hero;
