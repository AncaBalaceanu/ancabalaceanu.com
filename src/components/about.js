import React from 'react';
import '../styles/style.scss';
import '../styles/about.scss';
import { Fade } from 'react-reveal';

const anca = require('../assets/anca-about.png');
const ancaFun1 = require('../assets/anca-fun1.png');
const ancaFun2 = require('../assets/anca-fun2.png');
const downArrow = require('../assets/down-arrow.png');

const About = () => {
  return (
    <div className="content-container">
      <div id="about-content">
        <div id="top-section">
          <Fade top>
            <div id="top-section-text">
              <h1>Learn more about me</h1>
              <h2>I’m a Romanian born designer, world traveler, and goldfish lover.</h2>
              <div id="link-area">
                <a href="https://drive.google.com/file/d/1hJ6IFZuNh4sZqg-e6_PLLXK5JeKT1JbM/view" target="_blank" rel="noopener noreferrer">RESUME</a>
              </div>
            </div>
          </Fade>
          <Fade bottom><img src={anca} alt="Anca" /></Fade>
        </div>
        <div id="top-section-mobile">
          <Fade top><img src={anca} alt="Anca" /></Fade>
          <Fade bottom>
            <h1>Learn more about me</h1>
            <h2>I’m a Romanian born designer, world traveler, and goldfish lover.</h2>
            <a href="https://drive.google.com/file/d/1hJ6IFZuNh4sZqg-e6_PLLXK5JeKT1JbM/view" target="_blank" rel="noopener noreferrer">RESUME</a>
          </Fade>
        </div>
        <div className="interests-section">
          <div>
            <Fade delay={500}>
              <div>
                <div id="section-header-area">
                  <div className="purple-bar" />
                  <h3>INTERESTS</h3>
                </div>
              </div>
              <div id="section-text-area">
                <div>
                  <p>I am a senior at Dartmouth College where I study <span className="emphasize">Cognitive Science</span> with a concentration on Social Systems Cognition.
                  I am fascinated by how our collective minds work.
                  Check out the <a href="http://www.dartmouth-socialneurolab.com/" target="_blank" rel="noopener noreferrer">Social Neuroscience Lab</a> where I do
                  research on how stereotypes are formed in our brain.
                  </p>
                  <p>Add <span className="emphasize">Human-Centered Design</span> to the mix, and you get an eager problem-solver who wants to design for social good and connection.
                  I’ve been learning how to create digital products to solve needs over the past 3 years
                  at the <a href="http://dali.dartmouth.edu/" target="_blank" rel="noopener noreferrer">DALI Lab</a>.
                  </p>
                  <p className="block">How can I use what I know about the brain to create better products that positively impact people?
                  That’s the question I am looking to answer in my future projects.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <div className="interests-section">
          <div>
            <div>
              <div id="section-header-area">
                <div className="purple-bar" />
                <h3>CAMPUS INVOLVEMENT</h3>
              </div>
            </div>
            <div id="section-text-area">
              <div>
                <p>When I don’t design, I help other students grow their skills - I have been a <span className="emphasize">Teaching Assistant</span> for the Design Thinking
                  Course several times and I also helped pilot the first ever <a href="https://www.uiux.live/" target="_blank" rel="noopener noreferrer">UI/UX Design Course</a> offered
                  at Dartmouth together with Prof. Lorie Loeb and Natalie Svoboda.
                </p>
                <p>Most recently, I’ve been working on launching a campus organization to <span className="emphasize">unlock the creative potential</span> of the Dartmouth student community.
                  Learn more about the <a href="http://dali.dartmouth.edu/" target="_blank" rel="noopener noreferrer">Dartmouth Design Society</a> and get involved!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="interests-section">
          <div>
            <div>
              <div id="section-header-area">
                <div className="purple-bar" id="special" />
                <h3>FUN FACTS</h3>
              </div>
            </div>
            <div id="section-fun-area">
              <div>
                <div className="fun-section">
                  <img src={ancaFun1} alt="Anca with cat" />
                  <p>I rescued a cat from the jungle in Costa Rica this summer. His name is Chupito.</p>
                </div>
              </div>
              <div>
                <div className="fun-section">
                  <img src={ancaFun2} alt="Anca with cat" />
                  <p>I love music festivals and dancing. Ask me about my favorite dance move!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="connect-section">
          <h2>I’m constantly looking to learn and make new friends. Let’s get in touch!</h2>
          <a href="mailto:Anca.I.Balaceanu.20@Dartmouth.edu">CONTACT</a>
          <img src={downArrow} alt="down arrow" />
        </div>
      </div>
    </div>
  );
};

export default About;
