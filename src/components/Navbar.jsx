import { useState } from "react";
import navbar from "../styles/navbar.scss";
import logo from "../assets/jn_logo_blue.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

export default function Skills() {
  const [scroll, setScroll] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [link, setLink] = useState("");

  const scrolled = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", scrolled);

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 0.9,
      },
    },
  };

  const target = (e) => {
    setLink(e.target.innerHTML);
  };

  return (
    <div className="navbar" style={{ backgroundColor: scroll && "#000" }}>
      <div className="logo">
        <Link to="home" smooth={true} duration={500}>
          <img
            src={logo}
            alt="logo picture"
            style={{ display: mobileNav && "none" }}
          />
        </Link>
      </div>
      <div className="links">
        <ul>
          <li className={link === "Home" ? "selected-link" : ""}>
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={(e) => target(e)}
            >
              Home
            </Link>
          </li>
          <li className={link === "About" ? "selected-link" : ""}>
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={(e) => target(e)}
            >
              About
            </Link>
          </li>
          <li className={link === "Skills" ? "selected-link" : ""}>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              onClick={(e) => target(e)}
            >
              Skills
            </Link>
          </li>
          <li className={link === "Projects" ? "selected-link" : ""}>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              onClick={(e) => target(e)}
            >
              Projects
            </Link>
          </li>
          <li className={link === "Contact" ? "selected-link" : ""}>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={(e) => target(e)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* ///Mobile Nav/// */}
      <AnimatePresence>
        {mobileNav && (
          <motion.div
            className="mobile-navbar"
            variant={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "120vh", opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit="exit"
          >
            <div className="mobile-links">
              <ul>
                <motion.li
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.8,
                    },
                  }}
                >
                  <Link
                    onClick={() => setMobileNav(!mobileNav)}
                    to="home"
                    smooth={true}
                    duration={500}
                  >
                    Home
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.6,
                    },
                  }}
                >
                  <Link
                    onClick={() => setMobileNav(!mobileNav)}
                    to="about"
                    smooth={true}
                    duration={500}
                  >
                    About
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.4,
                    },
                  }}
                >
                  <Link
                    onClick={() => setMobileNav(!mobileNav)}
                    to="skills"
                    smooth={true}
                    duration={500}
                  >
                    Skills
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.2,
                    },
                  }}
                >
                  <Link
                    onClick={() => setMobileNav(!mobileNav)}
                    to="projects"
                    smooth={true}
                    duration={500}
                  >
                    Projects
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.1,
                    },
                  }}
                >
                  <Link
                    onClick={() => setMobileNav(!mobileNav)}
                    to="contact"
                    smooth={true}
                    duration={500}
                  >
                    Contact
                  </Link>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="hamburger" onClick={() => setMobileNav(!mobileNav)}>
        {!mobileNav ? <FaBars /> : <FaTimes />}
      </div>
    </div>
  );
}
