import React from "react";
import styles from "./CollapsibleCardDeck.module.css";
import { Disclosure as Card } from "@headlessui/react";
import Parser from "html-react-parser";
import { motion } from "framer-motion";
import { ReducedMotionContext } from "../../contexts/ReducedMotionProvider";

function CollapsibleCardDeck({ data, doubleColumn = false, cardsOpen }) {
  const shouldReduceMotion = React.useContext(ReducedMotionContext);

  const [expanded, setExpanded] = React.useState(window.innerWidth > 785);

  const variantsTitle = {
    start: {
      backgroundPosition: "1em 0em",
      transition: { duration: "0.75", ease: "easeOut" },
    },

    hover: {
      backgroundPosition: shouldReduceMotion ? "1em 0em" : "1em 1em",
      backgroundColor: "hsla(33, 99%, 75%, 1)",
    },

    tap: {
      backgroundPosition: shouldReduceMotion ? "1em 0em" : "1em 1.5em",
      backgroundColor: "hsla(33, 99%, 75%, 1)",
    },
  };

  const variantsIcon = {
    start: { scale: 1, transition: { duration: "0.75", ease: "easeOut" } },
    hover: { scale: shouldReduceMotion ? 1 : 1.05 },
    tap: { scale: shouldReduceMotion ? 1 : 0.95 },
  };

  const variantsPanel = {
    start: { opacity: 0 },
    end: { opacity: 1 },
  };

  const variantsPanelText = {
    start: { y: shouldReduceMotion ? 0 : -20, opacity: 0 },
    end: { y: 0, opacity: 1 },
  };

  function handleOpenCards(index) {
    if (expanded) return index < cardsOpen ? true : false;
    if (!expanded) {
      if (cardsOpen) return index < cardsOpen ? true : false;
      return false;
    }
  }

  return (
    <ul className={`${styles.deck} ${doubleColumn && styles.deckDouble}`}>
      {data.map((item, index) => {
        return (
          <Card
            as="li"
            key={item.id}
            className={styles.card}
            defaultOpen={handleOpenCards(index)}
          >
            {({ open }) => {
              return (
                <>
                  <motion.div
                    variants={variantsTitle}
                    whileTap="tap"
                    whileFocus="hover"
                    whileHover="hover"
                    animate="start"
                    className={`${styles.cardTitleBG} ${styles[item.id]}`}
                    tabIndex={-1}
                  >
                    <Card.Button className={styles.cardTitle}>
                      {item.title}

                      <motion.div
                        variants={variantsIcon}
                        initial="start"
                        animate="start"
                        whileHover="hover"
                        whileFocus="hover"
                        whileTap="tap"
                        tabIndex={-1}
                      >
                        <ExpandIcon
                          open={open}
                          shouldReduceMotion={shouldReduceMotion}
                        />
                      </motion.div>
                    </Card.Button>
                  </motion.div>
                  <Card.Panel>
                    <motion.div
                      variants={variantsPanel}
                      initial="start"
                      animate="end"
                    >
                      <motion.div
                        variants={variantsPanelText}
                        className={styles.cardBody}
                        initial="start"
                        animate="end"
                      >
                        {Parser(item.content)}
                      </motion.div>
                    </motion.div>
                  </Card.Panel>
                </>
              );
            }}
          </Card>
        );
      })}
    </ul>
  );
}

function ExpandIcon({ open, shouldReduceMotion }) {
  function iconAnimation() {
    if (open) {
      return shouldReduceMotion ? { opacity: 0 } : { d: "M 50 50 L 50 50" };
    }

    return { d: "M 50 30 L 50 70", opacity: 1 };
  }

  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={styles.icon}
    >
      <motion.ellipse
        cx="50"
        cy="50"
        rx="40"
        ry="40"
        className={styles.iconCircle}
      ></motion.ellipse>
      <motion.path
        className={styles.iconLine}
        d="M 70 50 L 30 50"
      ></motion.path>
      <motion.path
        className={styles.iconLine}
        animate={iconAnimation()}
        d="M 50 30 L 50 70"
      ></motion.path>
    </motion.svg>
  );
}

export default CollapsibleCardDeck;
