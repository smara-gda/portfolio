import React from 'react';

import AboutMe from './AboutMe';
import Experiences from './Experiences';
import Projects from './Projects';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';

const Main = () => {
  const homeRef = React.useRef();
  const aboutMeRef = React.useRef();
  const experiencesRef = React.useRef();
  const projectsRef = React.useRef();
  return (
    <main>
      <Header navRefs={[homeRef, aboutMeRef, experiencesRef, projectsRef]} />
      <Home ref={homeRef} />
      <AboutMe ref={aboutMeRef} />
      <Experiences ref={experiencesRef} />
      <Projects ref={projectsRef} />
      <Footer />
    </main>
  );
};
export default Main;
