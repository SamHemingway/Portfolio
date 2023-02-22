import React from "react";
import styles from "./Headshot.module.css";
function Headshot({ subject, altText }) {
  return (
    <picture className={styles.headshot}>
      <source
        srcSet={`src/assets/images/${subject}.avif`}
        type="image/avif"
      />
      <source
        srcSet={`src/assets/images/${subject}.webp`}
        type="image/webp"
      />
      <img
        src={`src/assets/images/${subject}.png`}
        alt={altText}
      />
    </picture>
  );
}

export default Headshot;
