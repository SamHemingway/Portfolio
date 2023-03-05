import React from "react";
import { useReducedMotion } from "framer-motion";
export const AnimationContext = React.createContext();
export const ReducedMotionContext = React.createContext();

function AnimationProvider({ children }) {
  const [revealTimer, setRevealTimer] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  /* Why are we putting the reveal timer behind a timeout rather
     than simply using Framer Motions built-in delays?

     Simply put, the delay wasn't being respected by Chromium browsers,
     despite working fine in Safari/Firefox.

     Had to put this into a context instead to ensure consistency
     between browsers — PITA but necessary.
  */

  React.useEffect(() => {
    if (!window.sessionStorage.getItem("visited")) {
      setTimeout(() => {
        setRevealTimer(true);
      }, 2000);
      window.sessionStorage.setItem("visited", true);
    } else {
      setRevealTimer(true);
    }
  }, []);

  return (
    <AnimationContext.Provider value={{ revealTimer, shouldReduceMotion }}>
      {children}
    </AnimationContext.Provider>
  );
}

export default AnimationProvider;
