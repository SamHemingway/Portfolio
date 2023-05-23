import React from "react";
import styles from "./HamburgerMenu.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import HamburgerIcon from "../HamburgerIcon";
import MobileNavigationModal from "../MobileNavigationModal/MobileNavigationModal";

function HamburgerMenu({ menuIsOpen, setMenuIsOpen, navLinks }) {
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
            toggleHandler={toggleMenu}
            navLinks={navLinks}
          />
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

export default HamburgerMenu;
