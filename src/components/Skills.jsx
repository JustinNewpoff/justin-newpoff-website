import { useEffect } from "react";
import skills from "../styles/skills.scss";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import firebase from "../assets/firebase.png";
import node from "../assets/node.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export default function Skills() {
  // const { ref, inView } = useInView({
  //   threshold: 0.7,
  // });
  // const animation = useAnimation();

  // useEffect(() => {
  //   if (inView) {
  //     animation.start({
  //       opacity: 1,
  //       scale: 1,
  //       transition: {
  //         type: "spring",
  //         duration: 1.2,
  //         bounce: 0.3,
  //       },
  //     });
  //   }
  //   if (!inView) {
  //     animation.start({ opacity: 0, scale: 0.5 });
  //   }
  // }, [inView]);

  return (
    <div name="skills" className="skills-container">
      <div className="skills-content-container">
        <div className="skills-top">
          <h1>Skills</h1>
          <p>Some of the technologies I've worked with</p>
        </div>
        <div className="skills-bottom">
          <div className="skill">
            <img src={html} alt="HTML icon" />
            <p>HTML</p>
          </div>
          <div className="skill">
            <img src={css} alt="css icon" />
            <p>CSS</p>
          </div>
          <div className="skill">
            <img src={javascript} alt="javascript icon" />
            <p>JAVASCRIPT</p>
          </div>
          <div className="skill">
            <img src={react} alt="react icon" />
            <p>REACT</p>
          </div>
          <div className="skill">
            <img src={node} alt="node icon" />
            <p>NODE</p>
          </div>
          <div className="skill">
            <img src={firebase} alt="firebase icon" />
            <p>FIREBASE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
