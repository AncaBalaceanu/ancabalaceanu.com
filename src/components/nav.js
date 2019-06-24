import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.scss';

const headerImage = require('../assets/header.png');

const Nav = (props) => {
  return (
    <nav>
      <NavLink to="/"><img src={headerImage} alt="home icon" /></NavLink>
      <div id="navlinks">
        <NavLink to="/" id="home">home</NavLink>
        { props.location.pathname === '/digital' ? <NavLink to="/digital" id="current-page">digital</NavLink> : <NavLink to="/digital">digital</NavLink>}
        { props.location.pathname === '/physical' ? <NavLink to="/physical" id="current-page">physical</NavLink> : <NavLink to="/physical">physical</NavLink>}
        { props.location.pathname === '/art' ? <NavLink to="/art" id="current-page">art</NavLink> : <NavLink to="/art">art</NavLink>}
        { props.location.pathname === '/about' ? <NavLink to="/about" id="current-page">about me</NavLink> : <NavLink to="/about">about me</NavLink>}
      </div>
    </nav>
  );
};

export default Nav;
