import React from "react";
import styles from "./MobileNavigationModal.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import IconList from "../IconList";
import Button from "../Button";
import { motion } from "framer-motion";

import { AnimationContext } from "../../contexts/AnimationProvider";

function MobileNavigationModal({ toggleHandler }) {
  const { variants } = React.useContext(AnimationContext);

  return (
    <Dialog.Content
      className={styles.content}
      onInteractOutside={toggleHandler}
      onEscapeKeyDown={toggleHandler}
    >
      <Dialog.Title className="sr-only">Navigation</Dialog.Title>
      <motion.ul
        className={`${styles.navList} stack`}
        variants={variants.childrenShortStagger}
        initial="start"
        animate="end"
      >
        <Dialog.Close
          asChild
          className={styles.close}
          onClick={toggleHandler}
        >
          <motion.li variants={variants.springRight}>
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
          <motion.li variants={variants.springRight}>
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
          <motion.li variants={variants.springRight}>
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
          <motion.li variants={variants.springRight}>
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
          <motion.li variants={variants.springRight}>
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
