import React from 'react';
import { Fade } from 'react-reveal';
import '../../styles/demo_project.scss';

const recentWorkExample = require('../../assets/home/recent-work.png');
const test = require('../../assets/more-proj-image.png');

const DemoProject = () => {
  return (
    <div id="demo-project-content">
      <Fade up>
        <div id="top-area">
          <img src={recentWorkExample} alt="recent work" />
          <h1>NAME OF PROJECT 2</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </Fade>

      <div id="content-area">
        <Fade up>
          <div className="section">
            <div className="line-circle" />
            <div className="section-text">
              <h2>Timeline & Team</h2>
              <p className="bottom-part" style={{ maxWidth: '400px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
          </div>
        </Fade>

        <Fade up>
          <div className="section">
            <div className="line-circle" />
            <div className="section-text">
              <h2>My Role</h2>
              <p className="bottom-part" style={{ maxWidth: '850px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              </p>
            </div>
          </div>
        </Fade>

        <Fade up>
          <div className="section">
            <div className="line-circle" />
            <div className="section-text">
              <h2>Understanding the Problem</h2>
              <p style={{ maxWidth: '850px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet.</p>

              <div className="image-section bottom-part">
                <div className="demo-img">
                  <img src={test} alt="recent work" />
                </div>
                <div className="demo-img">
                  <img src={test} alt="recent work" />
                </div>
              </div>
            </div>
          </div>
        </Fade>

        <Fade up>
          <div className="section">
            <div className="line-circle" />
            <div className="section-text">
              <h2>Exporing Solutions</h2>
              <p style={{ maxWidth: '850px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet.</p>

              <div className="image-section bottom-part">
                <div className="demo-img">
                  <img src={test} alt="recent work" />
                </div>
                <div className="demo-img">
                  <img src={test} alt="recent work" />
                </div>
                <div className="demo-img">
                  <img src={test} alt="recent work" />
                </div>
                <div className="demo-img">
                  <img src={test} alt="recent work" />
                </div>
                <div className="demo-img">
                  <img src={test} alt="recent work" />
                </div>
                <div className="demo-img">
                  <img src={test} alt="recent work" />
                </div>
              </div>
            </div>
          </div>
        </Fade>

        <Fade up>
          <div className="section">
            <div className="line-circle" />
            <div className="section-text">
              <h2>Testing & Iterating</h2>
              <p style={{ maxWidth: '850px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet.</p>

              <div className="image-section">
                <div className="demo-img">
                  <img src={test} alt="recent work" />
                </div>
                <div className="demo-img">
                  <img src={test} alt="recent work" />
                </div>
                <div className="demo-img">
                  <img src={test} alt="recent work" />
                </div>
              </div>

              <p style={{ maxWidth: '850px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet.</p>

              <div className="image-section bottom-part">
                <div className="demo-img">
                  <img src={test} alt="recent work" />
                </div>
                <div className="demo-img">
                  <img src={test} alt="recent work" />
                </div>
                <div className="demo-img">
                  <img src={test} alt="recent work" />
                </div>
              </div>
            </div>
          </div>
        </Fade>

        <Fade up>
          <div className="section">
            <div className="line-circle" />
            <div className="section-text">
              <h2>Deliverable</h2>
              <p style={{ maxWidth: '850px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet.</p>

              <div className="image-section bottom-part">
                <div className="demo-img">
                  <img src={test} alt="recent work" />
                </div>
                <div className="demo-img">
                  <img src={test} alt="recent work" />
                </div>
                <div className="demo-img">
                  <img src={test} alt="recent work" />
                </div>
              </div>
            </div>
          </div>
        </Fade>

        <Fade up>
          <div className="section">
            <div className="line-circle" />
            <div className="section-text no-border">
              <h2>Reflections</h2>
              <p className="bottom-part" style={{ maxWidth: '850px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </Fade>

      </div>
    </div>
  );
};

export default DemoProject;
