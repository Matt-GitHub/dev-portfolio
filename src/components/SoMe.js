import React from 'react';
import Arrow from '../assets/icons8-right-35.svg';

const SoMe = () => {
  return (
    <section className="labs">
      <div className="labsDescription">
        <h2 className="labsHeader">SoMe</h2>
        <p className="labsParagraph">
          A social media manager, kanban style, capable of organizing, and
          scheduling tweets while simultaneously managing engagement statistics.
          Data science enables a user to gauge what is the optimal posting time
          and how effective a tweet will be to their following
        </p>
        <ul className="labsUl">
          <li>
            Built from scrath in less than 8 weeks, with cross discipline teams
            (ux, data science) in an agile enviornment
          </li>
          <li>
            Implemented Twitter's API enabling users to draft, schedule and post
            tweets to any of their accounts
          </li>
          <li>
            Led consultations with product stakeholders and real-world users in
            a SCRUM enviornment
          </li>
        </ul>
        <a
          href="https://github.com/Lambda-School-Labs/social-media-strategy-fe#readme"
          target="blank"
        >
          <p className="labsParagraphLink">
            Checkout the code{' '}
            <img className="labsImage" src={Arrow} alt="arrow pointing right" />
          </p>
        </a>
        <a href="https://www.so-me.net/" target="blank">
          <p className="labsParagraphLink">
            Checkout the app{' '}
            <img className="labsImage" src={Arrow} alt="arrow pointing right" />
          </p>
        </a>
      </div>
      <div className="labsPhotos"></div>
    </section>
  );
};

export default SoMe;
