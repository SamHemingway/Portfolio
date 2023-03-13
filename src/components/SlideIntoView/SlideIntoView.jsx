import React from "react";
import { motion, useInView } from "framer-motion";
import { ReducedMotionContext } from "../../contexts/ReducedMotionProvider";

function SlideIntoView({ children, id }) {
  const shouldReduceMotion = React.useContext(ReducedMotionContext);
  const ref = React.useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ y: "0px" }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? "0px" : shouldReduceMotion ? "0px" : "50px",
        transition: {
          duration: 0.5,
          type: "spring",
          stiffness: 100,
        },
      }}
      id={id}
    >
      {children}
    </motion.section>
  );
}

export default SlideIntoView;
