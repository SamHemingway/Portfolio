import React from "react";
import ProjectCards from "../ProjectCards";
import styles from "./Projects.module.css";
import SlideIntoView from "../SlideIntoView";

function Projects() {
  const projectData = [
    {
      title: "Coming Soon",
      content:
        "<p>I know, there should be 3 projects in your portfolio before applying to jobs. I'm working on it!</p>",
      id: "project-a",
      heroImg: "underConstruction",
      href: "#projects",
      disabled: true,
    },
    {
      title: "Immortal Tracker",
      content:
        "<p>My favourite video game has 88 unique campaigns to complete.</p><p>Unfortunately, the game doesn’t help you track your progress, and whilst a spreadsheet does the job, I felt the community deserved better.</p><p>If you only have time for one, pick this.</p>",
      id: "immortal-tracker",
      heroImg: "immortalTracker",
      href: "/immortal-tracker",
      important: true,
      disabled: false,
    },
    {
      title: "Coming Soon",
      content:
        "<p>I know, there should be 3 projects in your portfolio before applying to jobs. I'm working on it!</p>",
      id: "project-b",
      heroImg: "underConstruction",
      href: "#projects",
      disabled: true,
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
