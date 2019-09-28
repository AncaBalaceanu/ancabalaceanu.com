import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.scss';

const Nav = (props) => {
  return (
    <nav>
      <div id="name-area"><NavLink to="/">Anca Balaceanu</NavLink></div>
      <div id="navlinks">
        { props.location.pathname === '/' ? <NavLink to="/" id="current-page">Work</NavLink> : <NavLink to="/">Work</NavLink>}
        { props.location.pathname === '/about' ? <NavLink to="/about" id="current-page">About</NavLink> : <NavLink to="/about">About</NavLink>}
        <a href="mailto:Anca.I.Balaceanu.20@Dartmouth.edu">Contact</a>
        { props.location.pathname === '/resume' ? <NavLink to="/resume" id="current-page">Resume</NavLink> : <NavLink to="/resume">Resume</NavLink>}
      </div>
    </nav>
  );
};

export default Nav;
