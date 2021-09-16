import React from 'react';
import './AboutMe.scss';
import './Projects.scss';
import vooraad from './../picture/voorrad.png';
import marketplace from './../picture/marketplace.png';
import foodgame from './../picture/foodgame.png';

const Projects = React.forwardRef((props, ref) => {
  return (
    <section className="projects" ref={ref}>
      <div className="wrapper">
        <a
          href="https://foodgame.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <h3 className="project_title">The Food Game</h3>
          {/* <p>A fun 80's style game, inspired by my vegan lifestyle.</p> */}
          <img
            className=" project-img foodgame"
            src={foodgame}
            alt="website look"
          />
        </a>
        <a
          className="project_button"
          href="https://github.com/smara-gda/project-1-food-game"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>

      <div className="wrapper">
        <a
          href="https://voorrad.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <h3 className="project_title">Vorraad</h3>
          {/* <p>
            Pair programmed with one other classmate - inspired by my
            classmate’s google sheets for keeping an eye on his finances.
          </p> */}
          <img
            className=" project-img vooraad"
            src={vooraad}
            alt="website look"
          />
        </a>
        <a
          className="project_button"
          href="https://github.com/victornast/voorrad"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>

      <div className="wrapper marketplace">
        <a
          href="https://getstuffdone.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <h3 className="project_title">MarketPlace</h3>
          {/* <p>
            Pair programmed with classmates - inspired by my classmate who
            wanted to bring people closer and allow them to help each other
          </p> */}
          <img
            className=" project-img marketplace"
            src={marketplace}
            alt="website look"
          />
        </a>
        <a
          className="project_button"
          href="https://github.com/melaniebuck10/task-marketplace"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
});
export default Projects;
