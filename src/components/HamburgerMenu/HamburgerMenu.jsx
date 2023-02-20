import React from "react";
import styles from "./HamburgerMenu.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import IconList from "../IconList";
import Button from "../Button";
import { motion, useReducedMotion } from "framer-motion";
import HamburgerIcon from "../HamburgerIcon";
import MobileNavigationModal from "../MobileNavigationModal/MobileNavigationModal";

function HamburgerMenu() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();
  function toggleMenu() {
    const nextMenuIsOpen = !menuIsOpen;
    setMenuIsOpen(nextMenuIsOpen);
  }

  return (
    <>
      <Dialog.Root key="navigationMenuMobile">
        <HamburgerIcon
          menuIsOpen={menuIsOpen}
          toggleHandler={toggleMenu}
          shouldReduceMotion={shouldReduceMotion}
        />
        <Dialog.Portal>
          <Dialog.Overlay className={styles.overlay} />
          <Dialog.Close
            onClick={toggleMenu}
            className={styles.closeNav}
          >
            <span className="sr-only">Close Menu</span>
          </Dialog.Close>
          <MobileNavigationModal
            menuIsOpen={menuIsOpen}
            toggleHandler={toggleMenu}
            shouldReduceMotion={shouldReduceMotion}
            setMenuIsOpen={setMenuIsOpen}
          />
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

export default HamburgerMenu;
