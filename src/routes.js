import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Food from './components/food';
import About from './components/about';
import Home from './components/home';
import Locations from './components/locations';
import SignIn from './components/signin';
import SignUp from './components/signup';

import App from './components/app';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="food" component={Food} />
    <Route path="about" component={About} />
    <Route path="locations" component={Locations} />
    <Route path="signin" component={SignIn} />
    <Route path="signup" component={SignUp} />
  </Route>
);
