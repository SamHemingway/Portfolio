import React from "react";
import { useReducedMotion } from "framer-motion";

export const ReducedMotionContext = React.createContext();

function ReducedMotionProvider({ children }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <ReducedMotionContext.Provider value={shouldReduceMotion}>
      {children}
    </ReducedMotionContext.Provider>
  );
}

export default ReducedMotionProvider;
