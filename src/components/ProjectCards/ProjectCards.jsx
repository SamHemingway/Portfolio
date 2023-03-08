import React from "react";
import styles from "./ProjectCards.module.css";
import Parser from "html-react-parser";
import { motion } from "framer-motion";
import { ReducedMotionContext } from "../../contexts/ReducedMotionProvider";

function ProjectCards({ projects }) {
  const shouldReduceMotion = React.useContext(ReducedMotionContext);

  const variantsTransition = {
    duration: shouldReduceMotion ? 0 : 0.15,
  };

  const variants = {
    initial: {
      scale: 1,
      transition: variantsTransition,
    },
    hover: {
      scale: 1.025,
      transition: variantsTransition,
    },
    tap: { scale: 0.975 },
    transition: variantsTransition,
  };

  return (
    <ul className={styles.deck}>
      {projects.map((project) => {
        return (
          <motion.li
            key={project.id}
            className={`${styles.cardWrapper} ${
              project.important && styles.importantCard
            }`}
            variants={variants}
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
