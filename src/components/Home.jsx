import React from 'react';
import { Link } from 'react-router-dom';
import profilePicture from './../picture/profilePicture.jpeg';

import './Home.scss';

const Home = React.forwardRef((props, ref) => {
  return (
    <section className="generic home-section " id="homeId" ref={ref}>
      <div>
        <h1>Hi,</h1>
        <h1>I'm Smaragda.</h1>
        <span>Full Stack Developer</span>
        <p>Scroll down to know more about me!</p>
      </div>
      <img className="profile_pic" src={profilePicture} alt="profile" />
    </section>
  );
});

export default Home;
