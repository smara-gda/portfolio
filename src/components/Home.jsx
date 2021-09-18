import React from 'react';
import { Link } from 'react-router-dom';
import profilePicture from './../picture/profilePicture.jpeg';

import './Home.scss';

const Home = React.forwardRef((props, ref) => {
  return (
    <section id="homeId" ref={ref}>
      <div className="generic home-section ">
        <div>
          <h1 className="titles">Smaragda Kalogeropoulou</h1>
          <span>Full Stack Developer</span>
        </div>
        <img className="profile_pic" src={profilePicture} alt="profile" />
      </div>
    </section>
  );
});

export default Home;
