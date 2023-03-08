import React from "react";
import ProjectCards from "../ProjectCards";
import styles from "./Projects.module.css";
import { motion, useInView } from "framer-motion";
import { ReducedMotionContext } from "../../contexts/ReducedMotionProvider";

function Projects() {
  const shouldReduceMotion = React.useContext(ReducedMotionContext);

  const projectData = [
    {
      title: "Coming Soon",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
      id: "project-a",
      heroImg: "project-a",
      href: "/project-a",
    },
    {
      title: "Immortal Tracker",
      content:
        "<p>My favourite video game has 85 unique campaigns to complete.</p><p>Unfortunately, the game doesn’t help you track your progress, and whilst a spreadsheet does the job, I felt the community deserved better.</p><p>If you only have time for one, pick this.</p>",
      id: "immortal-tracker",
      heroImg: "immortal-tracker",
      href: "/immortal-tracker",
      important: true,
    },
    {
      title: "Coming Soon",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
      id: "project-b",
      heroImg: "project-b",
      href: "/project-b",
    },
  ];

  const ref = React.useRef(null);
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
      id="projects"
    >
      <h2 className={`wrapper ${styles.heading}`}>stuff i'm working on.</h2>
      <div
        className={styles.projectsWrapper}
        aria-label="Sam's projects"
      >
        <div className={`wrapper`}>
          <article>
            <ProjectCards projects={projectData} />
          </article>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
