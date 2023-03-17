import React from "react";
import { motion, useInView } from "framer-motion";
import { AnimationContext } from "../../contexts/AnimationProvider";

function SlideIntoView({ children, ...delegated }) {
  const { hasVisited, shouldReduceMotion } = React.useContext(AnimationContext);
  const ref = React.useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ y: "0px" }}
      animate={{
        opacity: isInView || hasVisited ? 1 : 0,
        y: isInView || hasVisited ? "0px" : shouldReduceMotion ? "0px" : "50px",
        transition: {
          duration: 0.5,
          type: "spring",
          stiffness: 100,
        },
      }}
      {...delegated}
    >
      {children}
    </motion.section>
  );
}

export default SlideIntoView;
