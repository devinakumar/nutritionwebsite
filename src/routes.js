import React from 'react';
import { Route, IndexRoute } from 'react-router';
import New from './components/new';
import Show from './components/show';
import Home from './components/home';

import App from './components/app';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="posts/new" component={New} />
    <Route path="posts/:id" component={Show} />
  </Route>
);
