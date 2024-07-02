import React from "react";
import styles from "./Resume.module.css";
function Resume({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div
          className={styles.resumeWrapper}
          key={crypto.randomUUID()}
        >
          <div className={styles.resumeJobOverview}>
            <h2 className={styles.companyHeading}>{item.company}</h2>
            <h3>{item.position}</h3>
            <p>{item.duration}</p>
            <p>{item.location}</p>
          </div>
          <div>
            <ul className={styles.resumeExperienceList}>
              {item.details.map((bullet) => (
                <li key={crypto.randomUUID()}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Resume;
