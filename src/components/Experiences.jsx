import React from 'react';
import './Experiences.scss';
// import { Link } from 'react-router-dom';
import html5Logo from './../picture/html_5.png';
import cssLogo from './../picture/css_logo.png';
import jsLogo from './../picture/js_logo.png';
import mongoDBLogo from './../picture/mongo_DBLogo.png';
import nodeJSLogo from './../picture/nodeJS_logo.png';
import reactLogo from './../picture/react_logo.png';

const Experiences = React.forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <h1 className="titles">Skills</h1>
      <div className="flex-container icons">
        {/* <p>
          I have experience with HTML, CSS, JavaScript, ReactJS, mongoDB, Axios,
          NodeJS,
        </p> */}
        <img className="skills-icons" src={html5Logo} alt="html" />
        <img className="skills-icons css" src={cssLogo} alt="css" />
        <img className="skills-icons js" src={jsLogo} alt="js" />
        <img className="skills-icons node" src={nodeJSLogo} alt="nodeJS" />
        <img className="skills-icons mongo" src={mongoDBLogo} alt="mongo" />
        <img className="skills-icons react" src={reactLogo} alt="mongo" />
        {/* <p>
          I acquired these skills while taking the part-time bootcamp at
          IronHack where I had the opportunnity to build these{' '}
          <Link
            to="/projects"
            onClick={() =>
              props.navRefs[2].current.scrollIntoView({ behavior: 'smooth' })
            }
          >
            projects.
          </Link>
        </p> */}
        {/* <p>
          The past years I am working in the QA world where I get the
          opportunnity to help the development teams deliver a high quality
          product. I am familiar with test automation frameworks such as
          Selenium IDE & NightWatchJS. Currently I am looking for Web
          Development opportunities. For more details on my skills and work
          experience, visit my &nbsp;
          <a
            href="https://www.linkedin.com/in/smaragda-k/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn profile.
          </a>
        </p> */}
      </div>
    </section>
  );
});
export default Experiences;
