import React from "react";
import about from "../styles/about.scss";

export default function About() {
  return (
    <div name="about" className="about-container">
      <div className="about-content-container">
        <div className="box-1">
          <h2>About</h2>
        </div>
        <div className="box-2"></div>
        <div className="box-3">
          <h1>Hi. I'm Justin, nice to meet you. Please take a look around.</h1>
        </div>
        <div className="box-4">
          <p>
            I am a programmer with a passion for problem-solving as well as
            creating engaging and user-friendly web applications and websites.
            My journey into web development began as a hobby, but it quickly
            turned into a full-time pursuit. I love the challenge of turning
            complex problems into elegant solutions, and I am constantly
            learning and refining my skills to keep up with the ever-evolving
            technology landscape. In this portfolio, you will find examples of
            my work, including projects that showcase my proficiency in
            front-end and full-stack development. Thank you for stopping by!
          </p>
        </div>
      </div>
    </div>
  );
}
