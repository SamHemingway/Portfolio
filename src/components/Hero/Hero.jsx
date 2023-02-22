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
      <div className={`${styles.heroWrapper}`}>
        <motion.h1
          className={styles.heroHeader}
          variants={variants}
          initial="start"
          animate="end"
        >
          hire a jnr frontend developer with a growth mindset
        </motion.h1>
        <Headshot
          subject="sam"
          altText="A stylised cariacuture of Sam smiling warmly."
        />
        <article>
          <div className={`${styles.leadContent}`}>
            <h2>It's great to meet you.</h2>
            <article className={styles.leadBody}>
              <p>
                I'm Sam: an experienced SaaS startup salesperson who realised
                that the most satisfying part of his last role was building{" "}
                <em>on-brand, accessible and fun</em> custom demo instances with
                CSS to help my team try and land Fortune 100 companies.
              </p>
              <p>Why move to web dev?</p>
              <ul>
                <li>
                  <em>I missed building things.</em>
                </li>
                <li>I've always been an undercover nerd.</li>
              </ul>
              <p>
                I hope you can help me make a career of scratching these two
                itches.
              </p>
            </article>
          </div>
        </article>
        <div className={styles.test}></div>
      </div>
      <Pills
        content={skills}
        style={{
          background: "var(--clr-secondary-300)",
          color: "var(--clr-primary-700)",
          marginBlockStart: "0",
          paddingBlock: "1rem",
        }}
      />
    </section>
  );
}

export default Hero;
