import React from "react";
import styles from "./HamburgerMenu.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import IconList from "../IconList";
import Button from "../Button";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";

function HamburgerMenu() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();
  function handleOpenMenu() {
    const nextMenuIsOpen = !menuIsOpen;
    setMenuIsOpen(nextMenuIsOpen);
  }

  let animation = menuIsOpen ? "end" : undefined;

  const variantsBox = {
    end: !shouldReduceMotion ? undefined : { fill: "white" },
  };

  const variantsLine1 = {
    end: shouldReduceMotion ? undefined : { d: "M25 45h80M20", rotate: 45 },
  };
  const variantsLine2 = {
    end: shouldReduceMotion ? undefined : { opacity: 0 },
  };
  const variantsLine3 = {
    end: shouldReduceMotion ? undefined : { d: "M23.75 56.25h80", rotate: -45 },
  };

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
    <>
      <Dialog.Root key="navigationMenuMobile">
        <Dialog.Trigger
          className={styles.icon}
          onClick={handleOpenMenu}
        >
          <motion.svg
            viewBox="2.5 2.5 95 95"
            className={styles.svg}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
          >
            <defs>
              <linearGradient
                id="gradient-0"
                x1="50"
                x2="50"
                y1="2.5"
                y2="97.5"
                gradientUnits="userSpaceOnUse"
                spreadMethod="pad"
              >
                <stop
                  offset="0"
                  stopColor="#FFF"
                  stopOpacity="0.2"
                ></stop>
                <stop
                  offset="1"
                  stopColor="#FFF"
                  stopOpacity="0.05"
                ></stop>
              </linearGradient>
            </defs>
            <motion.rect
              width="95"
              height="95"
              x="2.5"
              y="2.5"
              fill="url(#gradient-0)"
              ry="10"
              variants={variantsBox}
              animate={animation}
            ></motion.rect>
            <motion.path
              className={styles.line}
              d="M20 30h60M20"
              strokeLinecap="round"
              variants={variantsLine1}
              animate={animation}
            ></motion.path>
            <motion.path
              className={styles.line}
              d="M20 50h60M20"
              strokeLinecap="round"
              variants={variantsLine2}
              transition={{ duration: 0.1 }}
              animate={animation}
              opacity="1"
            ></motion.path>
            <motion.path
              className={styles.line}
              d="M20 70h60"
              strokeLinecap="round"
              variants={variantsLine3}
              animate={animation}
            ></motion.path>
          </motion.svg>
          <span class="sr-only">Menu</span>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.overlay} />
          <motion.div>
            <Dialog.Content
              className={styles.content}
              onInteractOutside={handleOpenMenu}
            >
              <Dialog.Close onClick={handleOpenMenu}>Close</Dialog.Close>
              <Dialog.Title className="sr-only">Navigation</Dialog.Title>
              <motion.ul
                className={`${styles.navList} stack`}
                variants={variantsContent}
                initial="start"
                animate="end"
              >
                <motion.li variants={variantsMenuItems}>
                  <a
                    href="#"
                    className={styles.navItem}
                  >
                    why sam?
                  </a>
                </motion.li>
                <motion.li variants={variantsMenuItems}>
                  <a
                    href="#"
                    className={styles.navItem}
                  >
                    projects
                  </a>
                </motion.li>
                <motion.li variants={variantsMenuItems}>
                  <IconList
                    forceVisible={true}
                    iconSize="large"
                  />
                </motion.li>
                <motion.li variants={variantsMenuItems}>
                  <Button
                    variant="cta"
                    stretch={true}
                  >
                    let's talk
                  </Button>
                </motion.li>
              </motion.ul>
            </Dialog.Content>
          </motion.div>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

export default HamburgerMenu;
