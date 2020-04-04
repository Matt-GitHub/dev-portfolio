import React from "react";
import Github from "../assets/icons8-github-50.svg";
import LinkedIn from "../assets/icons8-linkedin-50.svg";
import Twitter from "../assets/icons8-twitter-50.svg";

const Header = () => {
  return (
    <nav className="headerContainer">
      <p className="intro">Hi, my name is</p>
      <h1 className="name">
        Matthew <span className="alt">Bedard</span>
      </h1>
      <p className="intro">I develop tools for the modern user</p>
      <div className="media">
        <ul>
          <li className="links">
            <a href="https://github.com/matt-github" target="blank">
              <img fill="" src={Github} alt="github" />
            </a>
          </li>
          <li className="links">
            <a
              href="https://www.linkedin.com/in/matthew-bedard-dev"
              target="blank"
            >
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </li>
          <li className="links">
            <a href="https://twitter.com/Matthew_Bedard_" target="blank">
              <img fill="" src={Twitter} alt="Twitter" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
