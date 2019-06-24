import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import '../styles/digital.scss';

const recentWorkExample = require('../assets/home/recent-work.png');
const moreProjImage = require('../assets/more-proj-image.png');

const Digital = () => {
  return (
    <div id="digital-content">
      <div className="work-area">
        <Fade up>
          <img src={recentWorkExample} alt="recent work example" />
          <div id="work-sample" className="work-sample-right">
            <h2>Name of Project 1</h2>
            <h3>my role</h3>
            <div className="recent-work-line" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Link to="/demo-project"><h3 className="read-case-button">read case</h3></Link>
          </div>
        </Fade>
      </div>

      <div className="work-area">
        <Fade up>
          <img src={recentWorkExample} alt="recent work example" />
          <div id="work-sample" className="work-sample-right">
            <h2>Name of Project 2</h2>
            <h3>my role</h3>
            <div className="recent-work-line" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Link to="/demo-project"><h3 className="read-case-button">read case</h3></Link>
          </div>
        </Fade>
      </div>

      <div className="work-area">
        <Fade up>
          <img src={recentWorkExample} alt="recent work example" />
          <div id="work-sample" className="work-sample-right">
            <h2>Name of Project 3</h2>
            <h3>my role</h3>
            <div className="recent-work-line" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Link to="/demo-project"><h3 className="read-case-button">read case</h3></Link>
          </div>
        </Fade>
      </div>

      <div className="work-area">
        <Fade up>
          <img src={recentWorkExample} alt="recent work example" />
          <div id="work-sample" className="work-sample-right">
            <h2>Name of Project 4</h2>
            <h3>my role</h3>
            <div className="recent-work-line" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Link to="/demo-project"><h3 className="read-case-button">read case</h3></Link>
          </div>
        </Fade>
      </div>

      <Fade up>
        <div id="explore-more-section">
          <h1 id="title">explore more physical design projects</h1>
          <div id="img-preview-area">
            <Link to="/demo-project">
              <div className="img-preview">
                <img src={moreProjImage} alt="recent work" />
                <h2>NAME OF PROJECT</h2>
              </div>
            </Link>

            <Link to="/demo-project">
              <div className="img-preview">
                <img src={moreProjImage} alt="recent work" />
                <h2>NAME OF PROJECT</h2>
              </div>
            </Link>

            <Link to="/demo-project">
              <div className="img-preview">
                <img src={moreProjImage} alt="recent work" />
                <h2>NAME OF PROJECT</h2>
              </div>
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Digital;
