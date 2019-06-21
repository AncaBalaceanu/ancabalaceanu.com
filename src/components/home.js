/* eslint-disable react/no-will-update-set-state */
import React from 'react';
import '../styles/home.scss';
import { Fade } from 'react-reveal';

const pinkLeft = require('../assets/home/pink-left.png');
const yellowRight = require('../assets/home/yellow-right.png');
const line = require('../assets/home/line.png');
const lineMobile = require('../assets/home/line-mobile.png');
const purpleLeft = require('../assets/home/purple-left.png');
const orangeRight = require('../assets/home/orange-right.png');
const blueBottom = require('../assets/home/blue-bottom.png');

const anca = require('../assets/home/anca.png');
const recentWorkExample = require('../assets/home/recent-work.png');

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lineImage: window.innerWidth < 900 ? lineMobile : line,
      lineType: window.innerWidth < 900 ? 'mobile' : 'full',
      recentProjWrap: window.innerWidth < 1206,
    };

    window.onresize = () => {
      if (window.innerWidth < 1206) {
        this.setState({
          recentProjWrap: true,
        });
      } else {
        this.setState({
          recentProjWrap: false,
        });
      }

      if (window.innerWidth < 900 && this.state.lineType !== 'mobile') {
        this.setState({
          lineImage: lineMobile,
          lineType: 'mobile',
        });
      } else if (this.state.lineType !== 'full') {
        this.setState({
          lineImage: line,
          lineType: 'full',
        });
      }
    };
  }

  render() {
    return (
      <div id="home">
        <div id="background-images">
          <div className="background-flex">
            <Fade left><img src={pinkLeft} alt="pink left" id="pink-left" /></Fade>
            <Fade right><img src={yellowRight} alt="yellow right" id="yellow-right" /></Fade>
          </div>

          <Fade up><img src={this.state.lineImage} alt="line" id="line" /></Fade>

          <div className="background-flex">
            <Fade left><img src={purpleLeft} alt="purple left" id="purple-left" /></Fade>
            <Fade right><img src={orangeRight} alt="orange right" id="orange-right" /></Fade>
          </div>

          <Fade up><img src={blueBottom} alt="blue bottom" id="blue-bottom" /></Fade>

        </div>

        <div id="home-content">
          <div id="welcome-area">
            <Fade up>
              <div id="welcome-text">
                <h1>WELCOME, I’M ANCA</h1>
                <h3>I’m a UX designer who wants to understand how people think.</h3>
                <div id="welcome-bar" />
              </div>
              <img src={anca} alt="anca" id="anca" />
            </Fade>
          </div>

          <div id="recent-work-section">
            <Fade up>
              <h1 className="section-title">RECENT WORK</h1>
              <div id="recent-work">
                <div className="work-area">
                  <Fade up>
                    <img src={recentWorkExample} alt="recent work example" />
                    <div id="work-sample" className="work-sample-right">
                      <h2>Name of Project</h2>
                      <h3>my role</h3>
                      <div className="recent-work-line" />
                      <p>description</p>
                    </div>
                  </Fade>
                </div>

                <div className="work-area">
                  {this.state.recentProjWrap ? (
                    <Fade up>
                      <img src={recentWorkExample} alt="recent work example" />
                      <div id="work-sample" className="work-sample-right">
                        <h2>Name of Project</h2>
                        <h3>my role</h3>
                        <div className="recent-work-line" />
                        <p>description</p>
                      </div>
                    </Fade>
                  ) : (
                    <Fade up>
                      <div id="work-sample" className="work-sample-right">
                        <h2>Name of Project</h2>
                        <h3>my role</h3>
                        <div className="recent-work-line" />
                        <p>description</p>
                      </div>
                      <img src={recentWorkExample} alt="recent work example" />
                    </Fade>
                  )}
                </div>

                <div className="work-area">
                  <Fade up>
                    <img src={recentWorkExample} alt="recent work example" />
                    <div id="work-sample" className="work-sample-right">
                      <h2>Name of Project</h2>
                      <h3>my role</h3>
                      <div className="recent-work-line" />
                      <p>description</p>
                    </div>
                  </Fade>
                </div>
              </div>
            </Fade>
          </div>

          <div id="other-projects-section">
            <Fade up>
              <h1 className="section-title">OTHER PROJECTS</h1>
            </Fade>

            <div id="other-projects">
              <div className="flex-proj-area">
                <div className="other-proj">
                  <Fade left>
                    <div className="other-proj-img" />
                    <div className="other-proj-text">
                      <h2>NAME OF PROJECT</h2>
                      <h3>my role</h3>
                    </div>
                  </Fade>
                </div>
                <div className="other-proj">
                  <Fade right>
                    <div className="other-proj-img" />
                    <div className="other-proj-text">
                      <h2>NAME OF PROJECT</h2>
                      <h3>my role</h3>
                    </div>
                  </Fade>
                </div>
              </div>
              <div className="flex-proj-area">
                <div className="other-proj">
                  <Fade left>
                    <div className="other-proj-img" />
                    <div className="other-proj-text">
                      <h2>NAME OF PROJECT</h2>
                      <h3>my role</h3>
                    </div>
                  </Fade>
                </div>
                <div className="other-proj">
                  <Fade right>
                    <div className="other-proj-img" />
                    <div className="other-proj-text">
                      <h2>NAME OF PROJECT</h2>
                      <h3>my role</h3>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>

            <div id="discover-more">
              <h3>Discover More</h3>
            </div>
          </div>

          <div id="bottom-section">
            <h2>Let’s get in touch!</h2>
            <div id="connect-section">
              <div className="connect-icon" />
              <div className="connect-icon" />
              <div className="connect-icon" />
              <div className="connect-icon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
