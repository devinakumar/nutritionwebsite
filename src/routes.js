import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/home';
import SignIn from './components/signin';
import SignUp from './components/signup';
import Stats from './components/stats';

import App from './components/app';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="signin" component={SignIn} />
    <Route path="signup" component={SignUp} />
    <Route path="stats" component={Stats} />
  </Route>
);
