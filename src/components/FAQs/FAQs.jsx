import React from "react";
import CollapsibleCardDeck from "../CollapsibleCardDeck";
import SlideIntoView from "../SlideIntoView";

function FAQs() {
  const questions = [
    {
      title: "Where are you based?",
      content: (
        <p>
          Montréal, Canada, where I have permanent residency (I'm originally
          from the UK)!
        </p>
      ),
      id: "where",
    },
    {
      title: "Do you speak French?",
      content: (
        <p lang="fr">
          Oui, au niveau B2. Il faut dire que je n'ai jamais eu l'occasion de
          l'utiliser dans la vie professionnelle - tous les emplois que j'ai
          occupés jusqu'à présent l'ont été a les entreprises où l'anglais est
          la langue principale.
        </p>
      ),
      id: "langue",
    },
    {
      title: "What makes you different?",
      content: (
        <>
          <p>
            Well it's certainly not a degree in Computer Science (I studied
            landscape architecture at school, in case you're curious!).
          </p>
          <p>
            You're definitely interviewing more experienced candidates, with
            better technical skills than me.
          </p>
          <p>
            What differentiates me comes down to soft-skills. I've worked at
            companies ranging from{" "}
            <a href="https://www.nationwide.co.uk">national banks</a>, to{" "}
            <a href="https://www.poka.io">start-ups</a>, to being the 4th sales
            hire at one of the{" "}
            <a href="https://www.hopin.com">
              fastest growing companies in history
            </a>
            who had a front row seat as it scaled from 100 to more than 1000
            employees in under a year.
          </p>
          <p>
            When you hire me, you know that{" "}
            <a href="#why">
              I already know how to be an effective and productive teammember
            </a>
            .
          </p>
        </>
      ),
      id: "different",
    },
    {
      title: "12 months without work?",
      content: (
        <>
          <p>A very valid question. Here's the short version:</p>
          <ul>
            <li>1 month to refresh and recharge post lay-off.</li>
            <li>
              2 months interviewing for sales positions before realising I
              didn't want to do it anymore.
            </li>
            <li>4 months of debilitating long COVID symptoms — fun!</li>
            <li>
              5+ months of solid coding, with a focus on React and
              accessibility.
            </li>
          </ul>
        </>
      ),
      id: "gap",
    },
    {
      title: "How did you learn to code?",
      content: (
        <>
          <p>
            Self-taught. I looked at boot camps, but outside of the networking
            opportunities, I wasn't convinced they were value for money.
          </p>
          <p>If you're interested in which specific courses I completed:</p>
          <ul>
            <li>
              <a href="https://css-for-js.dev/">
                <cite>CSS for JS developers</cite> by Josh Comeau
              </a>
            </li>
            <li>
              <a href="https://www.joyofreact.com/">
                <cite>The Joy of React</cite> by Josh Comeau
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com/course/the-complete-javascript-course/">
                <cite>JS Bootcamp</cite> by Jonas Schmedtmann
              </a>
            </li>
          </ul>
          <p>Otherwise, I independently honed my skills via resources like:</p>
          <ul>
            <li>
              <a href="https://www.frontendmentor.io/profile/SamHemingway">
                Frontend Mentor
              </a>{" "}
              to get experience building sites from Figma files.
            </li>
            <li>
              <a href="https://www.codewars.com/users/SamHemingway">Codewars</a>{" "}
              to test my understanding of basic JS concepts.
            </li>
            <li>
              Using official documentation to learn React libraries like{" "}
              <a href="https://www.framer.com/motion/">Framer Motion</a>,{" "}
              <a href="https://www.radix-ui.com/">Radix UI</a> &{" "}
              <a href="https://headlessui.com/">Headless UI</a>.
            </li>
          </ul>
        </>
      ),
      id: "learn",
    },
    {
      title: "Career change & layoffs?",
      content: (
        <>
          <p>
            I know, I know. Crazy decision.{" "}
            <a href="https://hired.com/state-of-software-engineers/2023/">
              Interview interest for Junior engineers is flatlining
            </a>
            , and the safe option would've been to get another well-paying sales
            job.
          </p>
          <p>
            Blame my sales background: I relish the opportunity to win against
            the odds.
          </p>
        </>
      ),
      id: "change",
    },
  ];

  return (
    <SlideIntoView id="faqs">
      <div className="wrapper">
        <h2>faqs</h2>
        <CollapsibleCardDeck
          data={questions}
          doubleColumn
        />
      </div>
    </SlideIntoView>
  );
}

export default FAQs;
