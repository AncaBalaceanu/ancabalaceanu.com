import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, withRouter,
} from 'react-router-dom';

import ScrollToTop from './scroll_to_top';

import Home from './home';
import Nav from './nav';
import About from './about';
import Contact from './contact';
import Resume from './resume';
import Fallback from './fallback';

const NavWithRouter = withRouter(props => <Nav {...props} />);

const App = () => {
  return (
    <Router>
      <div>
        <NavWithRouter />
        <div id="main-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
            <Route component={Fallback} />
          </Switch>
        </div>
        <ScrollToTop />
      </div>
    </Router>
  );
};

export default App;
