import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">Home </Link>
      <Link to="/experience">Experience</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About Me</Link>
    </nav>
  );
}
