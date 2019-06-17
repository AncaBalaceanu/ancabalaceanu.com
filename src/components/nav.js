import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.scss';

const headerImage = require('../assets/header.png');

const Nav = () => {
  return (
    <nav>
      <NavLink to="/"><img src={headerImage} alt="home icon" /></NavLink>
      <div id="navlinks">
        <NavLink to="/" id="home">home</NavLink>
        <NavLink to="/digital">digital</NavLink>
        <NavLink to="/physical">physical</NavLink>
        <NavLink to="/art">art</NavLink>
        <NavLink to="/about">about me</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
