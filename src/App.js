import React, { useState } from "react";
import "./styles.css";
import { skills } from "./skills.js";

export default function App() {
  const [skillChosen, setSkillChosen] = useState("Coding");

  function skillClickHandler(event) {
    setSkillChosen(event);
  }

  return (
    <div className="App">
      <h1>Learn A New Skill</h1>
      <p>
        In the ever changing dynamic world, skills are important to live a grand
        life. Here are some of the <span>Top Recommended Skills</span> along
        with resource list.
      </p>

      {/* buttons */}
      <div>
        <ul>
          {Object.keys(skills).map((skill) => {
            return (
              <li className="list-item-inline">
                <button
                  className="link-button"
                  onClick={() => skillClickHandler(skill)}
                >
                  {skill}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* list */}

      <section className="section-main">
        <div className="container">
          <ul>
            {skills[skillChosen].map((skill) => {
              return (
                <li>
                  <div className="container-skill">
                    <h2>{skill.name}</h2>
                    <p>{skill.description}</p>
                    <a
                      className="link-button-alternate"
                      href={skill.link}
                      target="blank"
                    >
                      Click Here!
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* <!-- footer --> */}
      <footer>
        <h2>Get in touch with me</h2>
        <ul>
          <li className="list-item-inline">
            <a
              className="link-button-alternate"
              href="https://github.com/thesudeshdas"
              target="blank"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link-button-alternate"
              href="https://www.linkedin.com/in/sudesh-kumar-das"
              target="blank"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link-button-alternate"
              href="https://twitter.com/thesudeshdas"
              target="blank"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link-button-alternate"
              href="https://www.instagram.com/thesudeshdas"
              target="blank"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
