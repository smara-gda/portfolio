import React from 'react';
import './Experiences.scss';

const Experiences = React.forwardRef((props, ref) => {
  return (
    <div className="flex-container" ref={ref}>
      <p>
        I have experience with HTML, CSS, JavaScript, ReactJS, mongoDB, Axios,
        NodeJS,
      </p>

      <p>
        also with test automation frameworks such as NightwatchJS and Selenium
        IDE. These skills (and many more) were acquired during my time at
        Ironhack and while building the projects [link]
      </p>
      <p>
        Currently I am a Senior Software Quality Specialist at Booking.com and I
        am looking for Web Development opportunities. For more details on my
        skills and work experience, visit my &nbsp;
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
