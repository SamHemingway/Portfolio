import React from "react";
import styles from "./ProjectCards.module.css";
import Parser from "html-react-parser";
import { motion } from "framer-motion";
import { AnimationContext } from "../../contexts/AnimationProvider";

function ProjectCards({ projects }) {
  const { variants } = React.useContext(AnimationContext);

  return (
    <ul className={styles.deck}>
      {projects.map((project) => {
        return (
          <motion.li
            key={project.id}
            className={`${styles.cardWrapper} ${
              project.important && styles.importantCard
            }`}
            variants={variants.projectCards}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            tabIndex={-1}
          >
            <a
              href={project.href}
              className={styles.card}
            >
              <picture className={styles.cardImage}>
                {/* <source
                srcset={`assets/images/${project.heroImage}.avif`}
                type="image/avif"
              />
              <source
                srcset={`assets/images/${project.heroImage}.webp`}
                type="image/webp"
              /> */}
                <img
                  src="https://picsum.photos/seed/picsum/900/300"
                  alt=""
                />
              </picture>
              <div className={styles.cardContent}>
                <h3 className={styles.cardHeader}>{project.title}</h3>
                {Parser(project.content)}
              </div>
            </a>
          </motion.li>
        );
      })}
    </ul>
  );
}

export default ProjectCards;
