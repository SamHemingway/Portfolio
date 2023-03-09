import React from "react";
import styles from "./FAQs.module.css";
import { Disclosure } from "@headlessui/react";

function FAQs() {
  return (
    <section className="wrapper">
      <h2>faqs</h2>
      <Disclosure>
        <Disclosure.Button>Where are you based?</Disclosure.Button>
        <Disclosure.Panel>
          Montréal, Canada, where I have permanent residency (I'm originally
          from the UK)!
        </Disclosure.Panel>
        <Disclosure.Button>Do you speak French?</Disclosure.Button>
        <Disclosure.Panel>
          Oui, au niveau B2. Mais je n'ai jamais eu l'occasion de l'utiliser
          dans la vie professionnelle - tous les emplois que j'ai occupés
          jusqu'à présent l'ont été a les entreprises où l'anglais est la langue
          principale.
        </Disclosure.Panel>
        <Disclosure.Button>
          What makes you different from other junior engineers?
        </Disclosure.Button>
        <Disclosure.Panel>
          <p>
            Well it's certainly not a degree in Computer Science (I studied
            landscape architecture at school, in case you're curious!).
          </p>
          <p>
            What differentiates me comes down to soft-skills. I've worked at
            companies ranging from{" "}
            <a href="https://www.nationwide.co.uk">national banks</a>, to{" "}
            <a href="https://www.poka.io">start-ups</a>, to being the 4th sales
            hire at one of the{" "}
            <a href="https://www.hopin.com">
              fastest growing companies in history
            </a>{" "}
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
        </Disclosure.Panel>
        <Disclosure.Button>
          You've been out of work for over a year... what happened?!
        </Disclosure.Button>
        <Disclosure.Panel>
          <p>A very valid question. The short version:</p>
          <ul>
            <li>
              I spent ~3 months interviewing for sales positions before
              realising that the reason that I kept on withdrawing from the
              interview process wasn't because, as I kept telling myself, it{" "}
              <em>"wasn't the right opportunity"</em>. It was because I simply
              didn't want to do it anymore, combined with the fact that that my
              side-project of developing my programming skills on the side was
              more intellectually stimulating than any deal I'd ever closed.
            </li>
            <li>
              So I decided to focus on that full-time. <strong>Boom</strong>:
              COVID. For 3 months, I endured brain fog, aching joints and the
              complete inability to stay awake throughout the day.
            </li>
            <li>
              Once I recovered, I spent 6 weeks visiting family/enjoying being
              able to taste food again on vacation before returning and throwing
              myself into my studies refreshed.
            </li>
            <li>
              Now, I'm chomping at the bit to start the next chapter in my
              career 💪
            </li>
          </ul>
        </Disclosure.Panel>
        <Disclosure.Button>How did you learn how to code?</Disclosure.Button>
        <Disclosure.Panel>
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
        </Disclosure.Panel>
      </Disclosure>
    </section>
  );
}

export default FAQs;
