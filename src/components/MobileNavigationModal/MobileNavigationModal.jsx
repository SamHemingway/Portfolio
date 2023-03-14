import React from "react";
import styles from "./MobileNavigationModal.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import IconList from "../IconList";
import Button from "../Button";
import { motion } from "framer-motion";
import { PopupButton } from "react-calendly";

import { ReducedMotionContext } from "../../contexts/ReducedMotionProvider";

function MobileNavigationModal({ toggleHandler }) {
  const shouldReduceMotion = React.useContext(ReducedMotionContext);

  const variantsContent = {
    end: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const variantsMenuItems = {
    start: {
      opacity: 0,
      x: -50,
    },
    end: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <Dialog.Content
      className={styles.content}
      onInteractOutside={toggleHandler}
      onEscapeKeyDown={toggleHandler}
    >
      <Dialog.Title className="sr-only">Navigation</Dialog.Title>
      <motion.ul
        className={`${styles.navList} stack`}
        variants={variantsContent}
        initial={shouldReduceMotion ? null : "start"}
        animate="end"
      >
        <Dialog.Close
          asChild
          className={styles.close}
          onClick={toggleHandler}
        >
          <motion.li variants={variantsMenuItems}>
            <a
              href="#why"
              className={styles.navItem}
            >
              why sam?
            </a>
          </motion.li>
        </Dialog.Close>
        <Dialog.Close
          asChild
          className={styles.close}
          onClick={toggleHandler}
        >
          <motion.li variants={variantsMenuItems}>
            <a
              href="#projects"
              className={styles.navItem}
            >
              projects
            </a>
          </motion.li>
        </Dialog.Close>
        <Dialog.Close
          asChild
          className={styles.close}
          onClick={toggleHandler}
        >
          <motion.li variants={variantsMenuItems}>
            <a
              href="#faqs"
              className={styles.navItem}
            >
              faqs
            </a>
          </motion.li>
        </Dialog.Close>
        <Dialog.Close
          asChild
          className={styles.close}
          onClick={toggleHandler}
        >
          <motion.li variants={variantsMenuItems}>
            <IconList
              forceVisible={true}
              iconSize="large"
            />
          </motion.li>
        </Dialog.Close>
        <Dialog.Close
          asChild
          className={styles.close}
          onClick={toggleHandler}
        >
          <motion.li variants={variantsMenuItems}>
            <Button
              variant="cta"
              stretch={true}
            >
              <a href="#hire">Let's talk</a>
            </Button>
          </motion.li>
        </Dialog.Close>
      </motion.ul>
    </Dialog.Content>
  );
}

export default MobileNavigationModal;
