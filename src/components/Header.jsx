import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = (props) => {
  return (
    <header className="header">
      <nav className="nav">
        <Link
          to="/"
          onClick={() =>
            props.navRefs[0].current.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Home{' '}
        </Link>

        <Link
          to="/"
          onClick={() =>
            props.navRefs[2].current.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Projects
        </Link>
        <Link
          to="/"
          onClick={() =>
            props.navRefs[1].current.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Skills
        </Link>
        <Link
          to="/"
          onClick={() =>
            props.navRefs[3].current.scrollIntoView({ behavior: 'smooth' })
          }
        >
          About Me
        </Link>
      </nav>
    </header>
  );
};
export default Header;
