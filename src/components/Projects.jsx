import React from 'react';
import './AboutMe.scss';
import './Projects.scss';

const Projects = React.forwardRef((props, ref) => {
  return (
    <section className=" projects" ref={ref}>
      <div className="wrapper">
        <h3>
          <a
            href="https://foodgame.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            The Food Game
          </a>
        </h3>
        <p>TODOpage Description - inspired by my vegan lifestyle</p>
      </div>

      <div className="wrapper">
        <h3>
          <a
            href="https://voorrad.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            Vorraad
          </a>
        </h3>
        <p>
          TODOPair programmed with one other classmate - inspired by my
          classmate’s google sheets for keeping an eye on his finances.
        </p>
      </div>

      <div className="wrapper">
        <h3>
          <a
            href="https://getstuffdone.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            MarketPlace
          </a>
        </h3>
        <p>
          TODO Pair programmed with classmates - inspired by my classmate who
          wanted to bring people closer and allow them to help each other
        </p>
      </div>
    </section>
  );
});
export default Projects;
