import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HireMe from "../components/HireMe";
import AnimationProvider from "../contexts/AnimationProvider";

export default function Root() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  return (
    <AnimationProvider>
      <Header
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
      />
      <main>
        <Outlet context={[menuIsOpen, setMenuIsOpen]} />
      </main>
      <HireMe />
      <Footer />
    </AnimationProvider>
  );
}
