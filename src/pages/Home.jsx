import React from "react";
import Hero from "../components/Hero";
import WhySam from "../components/WhySam";
import Projects from "../components/Projects";
import FAQs from "../components/FAQs";
import styles from "./Home.module.css";
import Pills from "../components/Pills";

function Home() {
  const skills = [
    "HTML5",
    "JavaScript",
    "CSS",
    "React",
    "Vite",
    "Framer Motion",
    "Styled Components",
  ];

  return (
    <>
      <Hero
        image
        title="Hire a jnr frontend developer with startup soft skills"
      >
        <h2 className={styles.leadHeader}>
          <span role="text">
            It's <em>great</em> to meet you. I'm Sam!
          </span>
        </h2>
        <p
          role="text"
          className={styles.leadBody}
        >
          An ex-startup salesperson who realised that the most satisfying part
          of his last role was building <em>on-brand and fun</em> custom demo
          instances with CSS to help my team try and land Fortune 100 companies.
        </p>
        <p
          role="text"
          className={styles.leadBody}
        >
          After getting laid off, I thought to myself: "That was fun. Let's
          learn more".
        </p>
        <p
          role="text"
          className={styles.leadBody}
        >
          Now, here we are: attempting a career change whilst most tech
          companies are cutting down on staff, rather than adding them.{" "}
          <em>Perfect timing</em> 👌
        </p>
        <Pills content={skills} />
      </Hero>
      <WhySam />
      <Projects />
      <FAQs />
    </>
  );
}

export default Home;
