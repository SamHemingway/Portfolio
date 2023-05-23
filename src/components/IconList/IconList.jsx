import React from "react";
import styles from "./IconList.module.css";

const data = [
  {
    link: "https://github.com/SamHemingway",
    src: "/assets/icons/github.svg",
    ariaLabel: "Go to Sam's GitHub page",
  },
  {
    link: "https://www.linkedin.com/in/sam-hemingway/",
    src: "/assets/icons/linked-in.svg",
    ariaLabel: "Go to Sam's LinkedIn page",
  },
  {
    link: "/assets/Sam Hemingway - Frontend Developer.pdf",
    src: "/assets/icons/download.svg",
    ariaLabel: "Download Sam's resumé in PDF format",
  },
];

function Socials({ forceVisible = false, iconSize }) {
  const inlineStyles = forceVisible ? { display: "flex" } : undefined;

  const iconStyles =
    iconSize === "large" ? `${styles.icon} ${styles.large}` : styles.icon;
  const wrapperStyles =
    iconSize === "large"
      ? `${styles.wrapper} ${styles.largeWrapper}`
      : styles.wrapper;
  return (
    <ul
      className={wrapperStyles}
      style={inlineStyles}
    >
      {data.map(({ link, src, ariaLabel }, index) => {
        return (
          <li
            key={index}
            className={styles.test}
          >
            <a
              href={link}
              aria-label={ariaLabel}
            >
              <img
                src={src}
                alt=""
                className={iconStyles}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Socials;
