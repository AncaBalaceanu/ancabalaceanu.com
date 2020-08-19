import React from 'react';
import '../../styles/style.scss';
import '../../styles/case-studies/example.scss';
import { Fade } from 'react-reveal';

const ExampleCaseStudy = () => {
  return (
    <div className="content-container">
      <Fade>
        <div id="example-content">
          <h1>Hello World</h1>
          <p>Hi hey</p>
        </div>
      </Fade>
    </div>
  );
};

export default ExampleCaseStudy;
