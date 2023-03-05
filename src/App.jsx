import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhySam from "./components/WhySam";
import { AnimationContext } from "./contexts/AnimationProvider";

function App() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const { revealTimer } = React.useContext(AnimationContext);

  return (
    <>
      {revealTimer && (
        <Header
          menuIsOpen={menuIsOpen}
          setMenuIsOpen={setMenuIsOpen}
        />
      )}
      <main>
        <Hero menuIsOpen={menuIsOpen} />
        {revealTimer && <WhySam />}
      </main>
    </>
  );
}

export default App;
