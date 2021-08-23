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
      <Header navRefs={[homeRef, experiencesRef, projectsRef, aboutMeRef]} />
      <Home ref={homeRef} />
      <Experiences
        ref={experiencesRef}
        navRefs={[homeRef, experiencesRef, projectsRef, aboutMeRef]}
      />
      <Projects ref={projectsRef} />
      <AboutMe ref={aboutMeRef} />
      <Footer />
    </main>
  );
};
export default Main;
