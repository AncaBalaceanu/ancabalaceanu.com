import React from 'react';
import '../styles/style.scss';
import '../styles/home.scss';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

const anca = require('../assets/anca.png');
const dali = require('../assets/dali.png');
const femme = require('../assets/femme.png');
const sixamhealth = require('../assets/sixamhealth.png');
const caityland = require('../assets/caityland.png');
const immerse = require('../assets/immerse.png');
const diversity = require('../assets/diversity.png');

const Home = () => {
  return (
    <div className="content-container">
      <div id="home-content">
        <div id="welcome-area">
          <Fade up>
            <img src={anca} alt="anca" id="anca" />
            <div id="welcome-text">
              <h1>Hi there, I&apos;m Anca</h1>
              <h2>Product Designer at <a href="http://dali.dartmouth.edu" target="_blank" rel="noopener noreferrer">DALI Lab</a></h2>
              <div className="purple-bar" />
              <div id="description-text">
                <p>World traveler and people-enthusiast.</p>
                <p>I enjoy building experiences that change how we think and make a social impact.</p>
                <p>Current Human-Centered Design student at Dartmouth College with almost 3 years of hands-on project experience.</p>
              </div>
              <div id="button-area">
                <Link to="/about"><div className="button">ABOUT</div></Link>
                <a href="mailto:Anca.I.Balaceanu.20@Dartmouth.edu"><div className="button" id="middle">CONTACT</div></a>
                <Link to="/resume"><div className="button">RESUME</div></Link>
              </div>
            </div>
          </Fade>
        </div>
        <div className="project-section">
          <div>
            <Fade up delay={750}>
              <div id="section-header-area">
                <div className="purple-bar" />
                <h3>ONGOING PROJECTS</h3>
              </div>
            </Fade>
            <Fade up>
              <div id="section-content-area">
                <a href="https://medium.com/@anca.i.balaceanu.20/design-crits-program-c0fd66ec95f9" target="_blank" rel="noopener noreferrer">
                  <div className="content">
                    <img src={dali} alt="DALI Design Crits" />
                    <div className="content-bottom">
                      <h3>Design Crits Program</h3>
                      <h4>Experience Design</h4>
                      <p>Building a support-sytem to accelerate the growth of designers in DALI Lab.</p>
                    </div>
                  </div>
                </a>
                <a href="https://medium.com/@anca.i.balaceanu.20/femme-8746301f72c2" target="_blank" rel="noopener noreferrer">
                  <div className="content">
                    <img src={femme} alt="Femme" />
                    <div className="content-bottom">
                      <h3>Femme</h3>
                      <h4>Concept UI/UX Design</h4>
                      <p>Connecting women globally through meaningful friendships.</p>
                    </div>
                  </div>
                </a>
              </div>
            </Fade>
          </div>
        </div>
        <div className="project-section">
          <Fade up delay={750}>
            <div id="section-header-area">
              <div className="purple-bar" />
              <h3>PAST WORK</h3>
            </div>
          </Fade>
          <Fade up>
            <div id="section-content-area">
              <a href="https://medium.com/@anca.i.balaceanu.20/6am-health-3770ddbb79c5" target="_blank" rel="noopener noreferrer">
                <div className="content">
                  <img src={sixamhealth} alt="6AM Health" />
                  <div className="content-bottom">
                    <h3>6AM Health</h3>
                    <h4>UI/UX Design</h4>
                    <p>Rethinking healthy food and building habits.</p>
                  </div>
                </div>
              </a>
              <a href="https://medium.com/@anca.i.balaceanu.20/caityland-25e00f42a32d" target="_blank" rel="noopener noreferrer">
                <div className="content">
                  <img src={caityland} alt="Caityland" />
                  <div className="content-bottom">
                    <h3>Caityland</h3>
                    <h4>Product Design</h4>
                    <p>How do we create delight for someone on the autism spectrum?</p>
                  </div>
                </div>
              </a>
              <a href="https://medium.com/@anca.i.balaceanu.20/immerse-doc-d08021b4f423" target="_blank" rel="noopener noreferrer">
                <div className="content">
                  <img src={immerse} alt="Immerse@DOC" />
                  <div className="content-bottom">
                    <h3>Immerse@DOC</h3>
                    <h4>Concept UI/UX Design</h4>
                    <p>Empowering professors to create an immersive classrom experience in the outdoors.</p>
                  </div>
                </div>
              </a>
              <a href="https://medium.com/@anca.i.balaceanu.20/diversity-in-media-a0ee22f185bb" target="_blank" rel="noopener noreferrer">
                <div className="content">
                  <img src={diversity} alt="Diversity in Media" />
                  <div className="content-bottom">
                    <h3>Diversity in Media</h3>
                    <h4>User Research</h4>
                    <p>Paving the road towards changing the representation of minorities on screen.</p>
                  </div>
                </div>
              </a>
            </div>
          </Fade>
        </div>
        <Fade up>
          <div className="connect-section">
            <h2>I’m constantly looking to learn and make new friends. Let’s get in touch!</h2>
            <a href="mailto:Anca.I.Balaceanu.20@Dartmouth.edu">CONTACT</a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
