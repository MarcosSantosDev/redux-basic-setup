import React from 'react';
import { Redirect } from '@reach/router';

import { useAuth } from '../../redux/auth';

const PublicRouter = ({ component: Component, children }) => {
  const { isLogged } = useAuth();

  if (!isLogged) {
    if (Component) {
      return <Component />
    } else if (children) {
      return children
    }
  }

  return <Redirect noThrow to="/" />
}

export default PublicRouter;
