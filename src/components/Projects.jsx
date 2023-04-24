import React from "react";
import projects from "../styles/projects.scss";
import juttiegram from "../assets/jg_home_page.PNG";
import chat from "../assets/chat_app.PNG";
import website from "../assets/website.PNG";

export default function Projects() {
  return (
    <div name="projects" className="projects-container">
      <div className="top">
        <h1>Work</h1>
        <p>Check out some of my recent work</p>
      </div>
      <div className="bottom">
        <div className="work">
          <img src={juttiegram} alt="project thumbnail" />
          <div className="project-overlay">
            <h1>React JS and Firebase Application</h1>
            <div className="project-buttons">
              <a
                href="https://cerulean-gumption-3646d7.netlify.app"
                target="_blank"
              >
                <button>Demo</button>
              </a>
              <button>Code</button>
            </div>
          </div>
          <p>A picture sharing social media app</p>
        </div>
        <div className="work">
          <img src={chat} alt="project thumbnail" />
          <div className="project-overlay">
            <h1>React JS and Firebase Application</h1>
            <div className="project-buttons">
              <a
                href="https://musical-paprenjak-c02292.netlify.app"
                target="_blank"
              >
                <button>Demo</button>
              </a>
              <button>Code</button>
            </div>
          </div>
          <p>An instant messaging app</p>
        </div>
        <div className="work">
          <img src={website} alt="project thumbnail" />
          <div className="project-overlay">
            <h1>React JS Application</h1>
            <div className="project-buttons">
              <button>Code</button>
            </div>
          </div>
          <p>This website</p>
        </div>
      </div>
    </div>
  );
}
