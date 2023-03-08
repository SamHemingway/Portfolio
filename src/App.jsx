import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhySam from "./components/WhySam";
import Projects from "./components/Projects";

import ReducedMotionProvider from "./contexts/ReducedMotionProvider";

function App() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  return (
    <ReducedMotionProvider>
      <Header
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
      />
      <main>
        <Hero menuIsOpen={menuIsOpen} />
        <WhySam />
        <Projects />
      </main>
    </ReducedMotionProvider>
  );
}

export default App;
