import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = (props) => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const handleToggle = () => {
    setNavBarOpen((prev) => !prev);
  };
  return (
    <header className="header">
      <nav className="navBar">
        <button onClick={handleToggle}>{navBarOpen ? 'Close' : 'Open'}</button>
        <ul className={`mobile-view-nav ${navBarOpen ? ' showMenu' : ''}`}>
          <li>
            <Link
              to="/"
              onClick={() =>
                props.navRefs[0].current.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Home{' '}
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() =>
                props.navRefs[2].current.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() =>
                props.navRefs[1].current.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() =>
                props.navRefs[3].current.scrollIntoView({ behavior: 'smooth' })
              }
            >
              About Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
