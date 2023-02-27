import React from "react";
import CardDeck from "../CardDeck/CardDeck";
import styles from "./WhySam.module.css";

function WhySam() {
  const traits = [
    {
      title: "curious",
      content:
        "<p>The best professional compliment I ever received from a sales pro with decades of experience:</p><p>“Sam, it's clear that you're a student of the craft (of sales) — it'll take you far.”</p><p>If there's a better way to do something, I want to know about it. I pride myself on learning it.</p>",
      id: "curious",
    },
    {
      title: "coachable",
      content:
        "<p>Have you ever listened to your recorded voice and wanted to die inside?</p><p>I did that, every Friday, as me and my manager reviewed my calls to find actionable feedback to improve my output.</p><p>I can't wait to see how much I learn from coding reviews with seasoned pros.</p><p>I still hate the sound of my voice, however.</p>",
      id: "coachable",
    },
    {
      title: "meticulous",
      content:
        "<p>When you're in the final stages of winning a deal against multiple strong competitors, details matter.</p><p>The same goes for a web app — the design team works incredibly hard to delight users so they come back.</p><p>It's those smaller details that have an outsized impact. I make sure that they're covered.</p>",
      id: "meticulous",
    },
    {
      title: "empathetic",
      content:
        "<p>I've worked on projects with multiple stakeholders who all have their own agendas.</p><p>If you hire me, when the designer Slacks me to say the padding isn't quite right in that feature, I'll appreciate that I work with people who take such pride in their work and make sure they feel heard.</p>",
      id: "empathetic",
    },
    {
      title: "forward thinking",
      content:
        "<p>I hate that feeling of knowing you've taken a shorcut that might cause issues further down the line.</p><p>If there's a way to build something so that it's easily repeatable, scalable and modular, I'll do it.</p><p>Yes, it might take a little longer now. But you're saving you and your teammates much more time in the future. Totally worth it.</p>",
      id: "forward",
    },
    {
      title: "autonomous",
      content:
        "<p>At start-ups, there's rarely a playbook to follow.</p><p>I love it</p><p>There's nothing more rewarding than independently finding, testing and implementing a solution to a problem.</p>",
      id: "autonomous",
    },
  ];

  return (
    <section
      className="wrapper"
      aria-label="Why hire sam?"
    >
      <h2 style={{ textAlign: "left" }}>sam is...</h2>
      <CardDeck data={traits} />
    </section>
  );
}

export default WhySam;
