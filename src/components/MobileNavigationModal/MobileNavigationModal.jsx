import React from "react";
import styles from "./MobileNavigationModal.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import IconList from "../IconList";
import Button from "../Button";
import { motion } from "framer-motion";

import { AnimationContext } from "../../contexts/AnimationProvider";

function MobileNavigationModal({ toggleHandler, navLinks }) {
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
        {navLinks.map((data, index) => {
          return (
            <Dialog.Close
              asChild
              className={styles.close}
              onClick={toggleHandler}
              key={index}
            >
              <NavLink data={data} />
            </Dialog.Close>
          );
        })}
        <Dialog.Close
          asChild
          className={styles.close}
          onClick={toggleHandler}
        >
          <Socials />
        </Dialog.Close>
        <Dialog.Close
          asChild
          className={styles.close}
          onClick={toggleHandler}
        >
          <CTAButton
            variant="cta"
            stretch={true}
          >
            <a href="#hire">Let's talk</a>
          </CTAButton>
        </Dialog.Close>
      </motion.ul>
    </Dialog.Content>
  );
}

const NavLink = React.forwardRef(function ({ data }, ref) {
  const { variants } = React.useContext(AnimationContext);
  return (
    <motion.li
      variants={variants.springRight}
      ref={ref}
    >
      <a
        href={data.id}
        className={styles.navItem}
      >
        {data.text}
      </a>
    </motion.li>
  );
});

const Socials = React.forwardRef(function (props, ref) {
  const { variants } = React.useContext(AnimationContext);
  return (
    <motion.li
      variants={variants.springRight}
      ref={ref}
    >
      <IconList
        forceVisible={true}
        iconSize="large"
      />
    </motion.li>
  );
});

const CTAButton = React.forwardRef(function (
  { variant, stretch, children },
  ref
) {
  const { variants } = React.useContext(AnimationContext);
  return (
    <motion.li
      variants={variants.springRight}
      ref={ref}
    >
      <Button
        variant={variant}
        stretch={stretch}
      >
        {children}
      </Button>
    </motion.li>
  );
});

export default MobileNavigationModal;
