import React from "react";
import styles from "./HireMe.module.css";
import Headshot from "../Headshot";

function HireMe() {
  return (
    <section className="wrapper">
      <div className={styles.sectionIntro}>
        <h2 className={styles.header}>
          hire me so I can afford treats for rupert.
        </h2>
        <Headshot
          subject="rupert"
          altText="A stylised cariacuture of Sam's handsome dog, Rupert, waiting patiently for treats."
        />
      </div>
      <article>
        <p>
          That's right, I'm not above taking advantage of the fact that my dog
          is <em>outrageously handsome</em> to try and snag a job.
        </p>
        <p>I'd be happy to tell you more about him (and me). You can:</p>
        <button>Book a meeting</button>
        <button>Connect on LinkedIn</button>
        <button>Email me</button>
        <p>
          Alternatively, walk into any Montréal pub showing Premier League
          football and look for the big guy who sounds like Jon Snow: 50/50 shot
          that's me.
        </p>
      </article>
    </section>
  );
}

export default HireMe;
