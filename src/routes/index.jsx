import React, { Suspense } from 'react';
import { Router } from '@reach/router';

import PublicRoute from './wrappers/PublicRoute';
import PrivateRoute from './wrappers/PrivateRoute';

import { Login, Dashboard } from '../pages';

const Routes = () => (
  <Suspense fallback={<h1>Loading page...</h1>}>
    <Router>
      <PublicRoute path="/login" component={Login} />
      <PrivateRoute path="/" component={Dashboard} />
    </Router>
  </Suspense>
);

export default Routes;
