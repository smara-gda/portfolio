import React from 'react';

import './AboutMe.scss';
import resume from './../cv/Resume Smaragda Doc.pdf';
import profilePicture from './../picture/profilePicture.jpeg';
const AboutMe = React.forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <h1 className="titles">About Me</h1>
      <div className="generic flex-wrapper">
        <div>
          <img className="profile_pic" src={profilePicture} alt="profile" />
        </div>
        <div className="flex-container about">
          <p>
            Because of my interest in computer sience I took a direction in my
            career where I landed in a job as a Software Quality Specialist.
            During my QA career, I got started with learning the basics of
            HTML/CSS & JS. I was determined to continue, and as for me
            selfstudying was not enough, I joined a WebDevelopment Bootcamp. I
            got the chance to work with modern technologies, like ReactJs,
            NodeJS, MongoDB and more.
          </p>

          <a
            className="button-cv"
            href={resume}
            target="_blank"
            rel="noreferrer"
          >
            Checkout my CV{' '}
          </a>
        </div>
      </div>
    </section>
  );
});
export default AboutMe;
