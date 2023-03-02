import React from "react";
import styles from "./CardDeck.module.css";
import { Disclosure as Card } from "@headlessui/react";
import Parser from "html-react-parser";
import { motion } from "framer-motion";

function CardDeck({ data }) {
  const [expanded, setExpanded] = React.useState(window.innerWidth > 785);

  const variantsTitle = {
    start: {
      backgroundPosition: "1em 0em",
      transition: { duration: "0.75", ease: "easeOut" },
    },

    hover: { backgroundPosition: "1.5em 1em" },
  };

  const variantsIcon = {
    start: { scale: 1, transition: { duration: "0.75", ease: "easeOut" } },
    hover: { scale: 1.15 },
    tap: { scale: 0.9 },
  };

  const variantsPanel = {
    start: { opacity: 0 },
    end: { opacity: 1 },
  };

  const variantsPanelText = {
    start: { y: -20, opacity: 0 },
    end: { y: 0, opacity: 1 },
  };

  return (
    <ul className={styles.deck}>
      {data.map((item, index) => {
        return (
          <Card
            as="li"
            key={item.id}
            className={styles.card}
            defaultOpen={expanded ? true : index > 1 ? false : true}
          >
            {({ open }) => {
              return (
                <>
                  <motion.div
                    variants={variantsTitle}
                    whileHover="hover"
                    whileTap="tap"
                    animate="start"
                    className={`${styles.cardTitleBG} ${styles[item.id]}`}
                  >
                    <Card.Button className={styles.cardTitle}>
                      {item.title}

                      <motion.div
                        variants={variantsIcon}
                        initial="start"
                        animate="start"
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <ExpandIcon open={open} />
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

function ExpandIcon({ open }) {
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
        animate={open ? { d: "M 50 50 L 50 50" } : { d: "M 50 30 L 50 70" }}
        // transition={{ type: "tween" }}
        d="M 50 30 L 50 70"
      ></motion.path>
    </motion.svg>
  );
}

export default CardDeck;
