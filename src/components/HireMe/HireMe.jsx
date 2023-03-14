import React from "react";
import styles from "./HireMe.module.css";
import Headshot from "../Headshot";
import SlideIntoView from "../SlideIntoView";
import { motion } from "framer-motion";
import { ReducedMotionContext } from "../../contexts/ReducedMotionProvider";
import { PopupButton } from "react-calendly";
import Button from "../Button";

function HireMe() {
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
  return (
    <SlideIntoView id="hire">
      <div className={`wrapper ${styles.heroWrapper}`}>
        <Headshot
          subject="rupert"
          altText="A stylised cariacuture of Sam's handsome dog, Rupert, waiting patiently for treats."
        />
        <motion.h2
          className={styles.heroHeader}
          variants={variantsHeader}
          initial={shouldReduceMotion ? null : "start"}
          animate="end"
        >
          hire me so I can buy more treats for rupert.
        </motion.h2>
      </div>
      <motion.article
        className={styles.leadWrapper}
        variants={variantsLead}
        initial={shouldReduceMotion ? null : "start"}
        animate={shouldReduceMotion ? "endReducedMotion" : "end"}
      >
        <div className={`wrapper ${styles.content}`}>
          <p className={styles.content}>
            That's right, I'm not above taking advantage of the fact that my dog
            is <em>outrageously handsome</em> to try and snag a job.
          </p>
          <p>
            I'd be happy to tell you more about him (and, answer any quesitons
            you might have about me, of course).
          </p>
          <Button
            variant="cta"
            size="large"
            stretch={window.innerWidth <= 500}
          >
            <PopupButton
              url="https://calendly.com/hemingway/hiresam"
              rootElement={document.getElementById("root")}
              text="Let's talk"
              styles={{
                background: "none",
                border: "none",
                cursor: "pointer",
                textTransform: "uppercase",
                color: "inherit",
              }}
            />
          </Button>
        </div>
      </motion.article>
    </SlideIntoView>
  );
}

export default HireMe;
