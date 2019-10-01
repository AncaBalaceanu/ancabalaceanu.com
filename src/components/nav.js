import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.scss';

const workActive = require('../assets/work-active.png');
const workInactive = require('../assets/work-inactive.png');
const aboutActive = require('../assets/about-active.png');
const aboutInactive = require('../assets/about-inactive.png');
const mobileMail = require('../assets/mobile-mail.png');

const Nav = (props) => {
  return (
    <nav>
      <div id="name-area"><NavLink to="/">Anca Balaceanu</NavLink></div>
      <div id="navlinks">
        { props.location.pathname === '/' ? <NavLink to="/" id="current-page">Work</NavLink> : <NavLink to="/">Work</NavLink>}
        { props.location.pathname === '/about' ? <NavLink to="/about" id="current-page">About</NavLink> : <NavLink to="/about">About</NavLink>}
        <a href="mailto:Anca.I.Balaceanu.20@Dartmouth.edu">Contact</a>
        <a href="https://drive.google.com/file/d/1hJ6IFZuNh4sZqg-e6_PLLXK5JeKT1JbM/view" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
      <div id="navlinks-mobile">
        <div className="navlink-button">
          <NavLink to="/">
            {props.location.pathname === '/' ? <img src={workActive} alt="work icon" /> : <img src={workInactive} alt="work icon" />}
            <p>work</p>
          </NavLink>
        </div>
        <a href="mailto:Anca.I.Balaceanu.20@Dartmouth.edu"><img src={mobileMail} id="mobile-mail" alt="mobile mail icon" /></a>
        <div className="navlink-button">
          <NavLink to="/about">
            {props.location.pathname === '/about' ? <img src={aboutActive} alt="about icon" /> : <img src={aboutInactive} alt="about icon" />}
            <p>about</p>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
