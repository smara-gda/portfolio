import React from 'react';
// import { Link } from 'react-router-dom';

import './Home.scss';

const Home = React.forwardRef((props, ref) => {
  return (
    <section id="homeId" ref={ref}>
      <div className="generic home-section ">
        <div className="titles me">
          <h1>Smaragda Kalogeropoulou</h1>
          <span>Full Stack Developer</span>
        </div>
      </div>
    </section>
  );
});

export default Home;
