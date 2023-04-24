import { useEffect } from "react";
import home from "../styles/home.scss";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { Link } from "react-scroll";

export default function Home() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          duration: 1.2,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0, scale: 0.5 });
    }
  }, [inView]);
  return (
    <div name="home" className="home-container">
      <div className="home-one" ref={ref}>
        <motion.div animate={animation} className="home-one-container">
          <strong>
            <h3>Hi, my name is</h3>
          </strong>
          <h1>Justin Newpoff</h1>
          <h2>I'm a Web Developer</h2>
          <p>
            I'm passionate about creating interactive and user-friendly web
            applications that solve real-world problems.
          </p>
          <Link to="projects" smooth={true} duration={500}>
            <button className="home-button">
              View Projects
              <BsArrowRight className="arrow" />
            </button>
          </Link>
        </motion.div>
      </div>
      {/* <div className="home-two"></div> */}
    </div>
  );
}
