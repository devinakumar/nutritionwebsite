import React from 'react';
import { Route, IndexRoute } from 'react-router';
import New from './components/new';
import Show from './components/show';
import Home from './components/home';
import SignIn from './components/signin';
import SignUp from './components/signup';
import RequireAuth from './components/require-auth';

import App from './components/app';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="posts/new" component={RequireAuth(New)} />
    <Route path="posts/:id" component={Show} />
    <Route path="signin" component={SignIn} />
    <Route path="signup" component={SignUp} />
  </Route>
);
