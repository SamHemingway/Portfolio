import React from "react";
import styles from "./Heading.module.css";
import { motion } from "framer-motion";
import { AnimationContext } from "../../../contexts/AnimationProvider";

function Header({ level, children, ...delegated }) {
  const TagPrimitive = `h${level || 1}`;
  const { variants } = React.useContext(AnimationContext);

  const Tag = React.forwardRef((props, ref) => (
    <TagPrimitive
      ref={ref}
      {...props}
    />
  ));

  const MotionTag = motion(Tag);

  let computedStyles = `${styles.headerBase}`;
  if (level) computedStyles += ` ${styles[level]}`;

  return (
    <MotionTag
      className={computedStyles}
      {...delegated}
      variants={variants.fadeNoDelay}
      initial="start"
      animate="end"
    >
      {children}
    </MotionTag>
  );
}

export default Header;
