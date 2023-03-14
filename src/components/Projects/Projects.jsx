import React from "react";
import ProjectCards from "../ProjectCards";
import styles from "./Projects.module.css";
import SlideIntoView from "../SlideIntoView";

function Projects() {
  const projectData = [
    {
      title: "Coming Soon",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
      id: "project-a",
      heroImg: "project-a",
      href: "#projects",
    },
    {
      title: "Immortal Tracker",
      content:
        "<p>My favourite video game has 85 unique campaigns to complete.</p><p>Unfortunately, the game doesn’t help you track your progress, and whilst a spreadsheet does the job, I felt the community deserved better.</p><p>If you only have time for one, pick this.</p>",
      id: "immortal-tracker",
      heroImg: "immortal-tracker",
      href: "#projects",
      important: true,
    },
    {
      title: "Coming Soon",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
      id: "project-b",
      heroImg: "project-b",
      href: "#projects",
    },
  ];

  return (
    <SlideIntoView id="projects">
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
    </SlideIntoView>
  );
}

export default Projects;
