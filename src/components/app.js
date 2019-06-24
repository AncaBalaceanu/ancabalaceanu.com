import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, withRouter,
} from 'react-router-dom';

import ScrollToTop from './scroll_to_top';

import Home from './home';
import Nav from './nav';
import Digital from './digital';
import Physical from './physical';
import Art from './art';
import About from './about';
import Fallback from './fallback';

import DemoProject from './projects/demo_project';

const NavWithRouter = withRouter(props => <Nav {...props} />);

const App = () => {
  return (
    <Router>
      <div>
        <NavWithRouter />
        <div id="main-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/digital" component={Digital} />
            <Route path="/physical" component={Physical} />
            <Route path="/art" component={Art} />
            <Route path="/about" component={About} />
            <Route path="/demo-project" component={DemoProject} />
            <Route component={Fallback} />
          </Switch>
        </div>
        <ScrollToTop />
      </div>
    </Router>
  );
};

export default App;
