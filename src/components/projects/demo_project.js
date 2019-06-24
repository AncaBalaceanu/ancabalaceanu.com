import React from 'react';
import { Fade } from 'react-reveal';
import '../../styles/demo_project.scss';

const recentWorkExample = require('../../assets/home/recent-work.png');

const DemoProject = () => {
  return (
    <div id="demo-project-content">
      <Fade up>
        <div id="top-area">
          <img src={recentWorkExample} alt="recent work" />
          <h1>NAME OF PROJECT 1</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </Fade>

      <div id="content-area">
        <Fade up>
          <div className="section">
            <h2>Timeline & Team</h2>
            <p style={{ maxWidth: '400px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </Fade>

        <Fade up>
          <div className="section">
            <h2>My Role</h2>
            <p style={{ maxWidth: '850px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </p>
          </div>
        </Fade>

        <Fade up>
          <div className="section">
            <h2>Understanding the Problem</h2>
            <p style={{ maxWidth: '850px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet.</p>

            <div className="image-section">
              <div className="demo-img" />
              <div className="demo-img" />
            </div>
          </div>
        </Fade>

        <Fade up>
          <div className="section">
            <h2>Exporing Solutions</h2>
            <p style={{ maxWidth: '850px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet.</p>

            <div className="image-section">
              <div className="demo-img" />
              <div className="demo-img" />
              <div className="demo-img" />
              <div className="demo-img" />
              <div className="demo-img" />
              <div className="demo-img" />
            </div>
          </div>
        </Fade>

        <Fade up>
          <div className="section">
            <h2>Testing & Iterating</h2>
            <p style={{ maxWidth: '850px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet.</p>

            <div className="image-section">
              <div className="demo-img" />
              <div className="demo-img" />
              <div className="demo-img" />
            </div>

            <p style={{ maxWidth: '850px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet.</p>

            <div className="image-section">
              <div className="demo-img" />
              <div className="demo-img" />
              <div className="demo-img" />
            </div>
          </div>
        </Fade>

        <Fade up>
          <div className="section">
            <h2>Deliverable</h2>
            <p style={{ maxWidth: '850px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet.</p>

            <div className="image-section">
              <div className="demo-img" />
              <div className="demo-img" />
              <div className="demo-img" />
            </div>
          </div>
        </Fade>

        <Fade up>
          <div className="section">
            <h2>Reflections</h2>
            <p style={{ maxWidth: '850px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet.</p>
          </div>
        </Fade>

      </div>
    </div>
  );
};

export default DemoProject;
