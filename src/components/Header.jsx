import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = (props) => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const handleToggle = () => {
    setNavBarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setNavBarOpen(false);
  };

  return (
    <header className="header">
      <nav className="navBar">
        <button onClick={handleToggle}>{navBarOpen ? 'Close' : 'Open'}</button>
        <ul className={`mobile-view-nav ${navBarOpen ? ' showMenu' : ''}`}>
          <li>
            <Link
              to="/"
              onClick={() => {
                props.navRefs[0].current.scrollIntoView({ behavior: 'smooth' });
                closeMenu();
              }}
            >
              Home{' '}
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => {
                props.navRefs[2].current.scrollIntoView({ behavior: 'smooth' });
                closeMenu();
              }}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => {
                props.navRefs[1].current.scrollIntoView({ behavior: 'smooth' });
                closeMenu();
              }}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => {
                props.navRefs[3].current.scrollIntoView({ behavior: 'smooth' });
                closeMenu();
              }}
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
