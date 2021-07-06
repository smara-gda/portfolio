import React from 'react';
import profilePicture from './../picture/profilePicture.jpeg';
import './AboutMe.scss';

const AboutMe = React.forwardRef((props, ref) => {
  return (
    <div className="generic flex-wrapper" ref={ref}>
      <img className="profile_pic" src={profilePicture} alt="profile" />
      <div className="flex-container">
        <p>
          I was born in Greece and now residing in the small town of Uithoorn in
          the Netherlands. I tried a lot of video courses, I learned the basics
          of JS, CSS & HTML, but I needed the next step. I decided to go back to
          school. I joined the IronHack Remote Bootcamp. This was a game
          changer, the best gift I could have ever done to myself.
        </p>
        <p>
          Since I was a kid I wanted to get involved with computer science. Here
          I am today, presenting to you myself on my own website!
        </p>
        <p>
          When I started working in QA I learned about CSS and HTML because I
          had to inspect the website for testing purposes. Working closely with
          development teams, my interest in web development grew even more. It
          was decided that one day I will learn how to do that myself.
        </p>
        <p>
          Have a look at my Projects Page to know more about my knowledge on the
          technologies I am familiar with.
        </p>
      </div>
    </div>
  );
});
export default AboutMe;
