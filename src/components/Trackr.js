import React from "react";
import Arrow from "../assets/icons8-right-35.svg";

const Trackr = () => {
  return (
    <section className="project">
      <div className="projectDescription">
        <h2 className="projectHeader">Trackr</h2>
        <p className="projectParagraph">
          A personal project that represents a niche spin-off of the popular job
          hunter app, Huntr. Trackr is an all-in-one application tracker
          tailored towards new grads that allows users to manage their
          applications across platforms, create and leverage their network for
          open positions, and access guides and resources to be a stand out
          applicant
        </p>
        <ul className="projectUl">
          <li>Built using react, redux, node js, and postgreSQL</li>
          <li>Developed database schema following RESTful api principles</li>
          <li>
            Managed data flow and state management using redux and react hooks
            to create seamless user experience
          </li>
        </ul>
        <p className="projectParagraphLink">
          Checkout the code{" "}
          <img
            className="projectImage"
            src={Arrow}
            alt="arrow pointing right"
          />
        </p>
        <p className="projectParagraphLink">
          Checkout the app{" "}
          <img
            className="projectImage"
            src={Arrow}
            alt="arrow pointing right"
          />
        </p>
      </div>
      <div className="projectImages">
        {/* <div className="twoImages">
          <img className="projectImageImport" src={Image} alt="something" />
          <img className="projectImageImport" src={Image} alt="fun" />
        </div>
        <div className="twoImages">
          <img className="projectImageImport" src={Image} alt="asdf" />
          <img className="projectImageImport" src={Image} alt="asdf" />
        </div> */}
      </div>
    </section>
  );
};

export default Trackr;
