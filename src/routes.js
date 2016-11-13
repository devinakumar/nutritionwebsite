import React from 'react';
import { Route, IndexRoute } from 'react-router';
import New from './components/new';
import Show from './components/show';
import Home from './components/home';
import Stats from './components/stats';
import SignIn from './components/signin';

import App from './components/app';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="posts/edit" component={New} />
    <Route path="posts/:id" component={Show} />
    <Route path="signin" component={SignIn} />
    <Route path="stats" component={Stats} />
  </Route>
);
