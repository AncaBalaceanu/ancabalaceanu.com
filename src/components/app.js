import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import Home from './home';
import Nav from './nav';
import Digital from './digital';
import Physical from './physical';
import Art from './art';
import About from './about';
import Fallback from './fallback';

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <div id="main-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/digital" component={Digital} />
            <Route path="/physical" component={Physical} />
            <Route path="/art" component={Art} />
            <Route path="/about" component={About} />
            <Route component={Fallback} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
