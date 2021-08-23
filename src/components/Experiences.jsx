import React from 'react';
import './Experiences.scss';
import { Link } from 'react-router-dom';

const Experiences = React.forwardRef((props, ref) => {
  return (
    <div className="flex-container" ref={ref}>
      <p>
        I have experience with HTML, CSS, JavaScript, ReactJS, mongoDB, Axios,
        NodeJS,
      </p>

      <p>
        I acquired these skills while taking the part-time bootcamp at IronHack
        where I had the opportunnity to build these{' '}
        <Link
          to="/projects"
          onClick={() =>
            props.navRefs[2].current.scrollIntoView({ behavior: 'smooth' })
          }
        >
          projects.
        </Link>
      </p>
      <p>
        The past years I am working in the QA world where I get the opportunnity
        to help the development teams deliver a high quality product. I am
        familiar with test automation frameworks such as Selenium IDE &
        NightWatchJS. Currently I am looking for Web Development opportunities.
        For more details on my skills and work experience, visit my &nbsp;
        <a
          href="https://www.linkedin.com/in/smaragda-k/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn profile.
        </a>
      </p>
    </div>
  );
});
export default Experiences;
