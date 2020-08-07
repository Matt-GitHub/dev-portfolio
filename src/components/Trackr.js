import React from 'react';
import Arrow from '../assets/icons8-right-35.svg';

const Trackr = () => {
  return (
    <section className="project">
      <div className="projectDescription">
        <h2 className="projectHeader">Illustrated JS</h2>
        <p className="projectParagraph">
          A bootstrapped SaaS computer science education platform designed with
          accessibility in mind. Illustrated JS is a platform to learn data
          structures and algorithms for those without a math and engineering
          degree. Learn skills to transform your applications, improve
          performance and crush your interview.
        </p>
        <ul className="projectUl">
          <li>
            Designed as an accessibility-first application which provides closed
            captioning and accessible media
          </li>
          <li>
            State management and caching of static assets used by leveraging
            react query
          </li>
          <li>
            Built using JavaScript, React, React Router, CSS, Prism JS, React
            Query, and React-Player
          </li>
        </ul>
        <a href="https://github.com/Matt-GitHub/Illustrated" target="blank">
          <p className="labsParagraphLink">
            Checkout the code{' '}
            <img className="labsImage" src={Arrow} alt="arrow pointing right" />
          </p>
        </a>
        <a href="https://illustratedjs.io" target="blank">
          <p className="labsParagraphLink">
            Checkout the app
            <img className="labsImage" src={Arrow} alt="arrow pointing right" />
          </p>
        </a>
      </div>
      <div className="projectImages"></div>
    </section>
  );
};

export default Trackr;
