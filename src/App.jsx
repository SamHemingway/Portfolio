import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhySam from "./components/WhySam";

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
      </main>
    </ReducedMotionProvider>
  );
}

export default App;
