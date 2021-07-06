import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

const Home = React.forwardRef((props, ref) => {
  return (
    <div className="generic" id="homeId" ref={ref}>
      <h1>Hi,</h1>
      <h1>I'm Smaragda.</h1>
      <span>Full Stack Developer</span>
      <p>
        To know more about me, see the <Link to="/about">About Me</Link>.
      </p>
    </div>
  );
});

export default Home;
// const SimpleComp = React.forwardRef((props, ref) => {
//   return <div style={{backgroundColor: props.color}} ref={ref}>scroll to me!</div>
// })
