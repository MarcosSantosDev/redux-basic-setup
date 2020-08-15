import React, { Suspense } from 'react';
import { Router } from '@reach/router';

import { Login } from '../pages';

const Routes = () => (
  <Suspense fallback={<h1>Loading page...</h1>}>
    <Router>
      <Login path="/" />
    </Router>
  </Suspense>
);

export default Routes;
